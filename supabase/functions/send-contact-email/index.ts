
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
if (!RESEND_API_KEY) {
  console.error("[Edge Function] RESEND_API_KEY is not set");
}

let resend: Resend | undefined = undefined;

// Safely initialize resend object if api key present
try {
  if (RESEND_API_KEY) {
    resend = new Resend(RESEND_API_KEY);
  }
} catch (err) {
  console.error("[Edge Function] Failed instantiating Resend object:", err);
}

const YOUR_EMAIL = "info@elink.cat"; // Destination email

interface ContactRequest {
  nom: string;
  email: string;
  missatge: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nom, email, missatge }: ContactRequest = await req.json();

    // You should set your actual destination email below!
    const destination = YOUR_EMAIL;

    if (!nom || !email || !missatge) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "No RESEND_API_KEY set. Please configure it in Supabase secrets." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!resend) {
      return new Response(
        JSON.stringify({ error: "Resend initialization failed. Check RESEND_API_KEY." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subject = `Nou missatge de contacte d'elink.cat (${nom})`;
    const html = `
      <h2>Nou missatge de contacte</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Missatge:</strong></p>
      <p>${missatge.replace(/\n/g, "<br/>")}</p>
    `;

    // Log sending attempt details for debugging
    console.log("[Edge Function] Attempting to send email with Resend", {
      from: "elink.cat <noreply@elink.cat>",
      to: destination,
      reply_to: email,
      subject,
      html: html,
    });

    const { data, error } = await resend.emails.send({
      from: "elink.cat <noreply@elink.cat>",
      to: [destination],
      reply_to: email,
      subject,
      html,
    });

    if (error) {
      console.error("[Edge Function] Resend error:", error);
      return new Response(
        JSON.stringify({ error: error.message || "Error enviant el missatge." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[Edge Function] Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("[Edge Function] Error:", err?.message || err);
    return new Response(
      JSON.stringify({ error: "Error inesperat. " + (err?.message ?? err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

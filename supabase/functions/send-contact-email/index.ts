import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const YOUR_EMAIL = "info@elink.cat"; // Destination email updated

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

    const subject = `Nou missatge de contacte d'elink.cat (${nom})`;
    const html = `
      <h2>Nou missatge de contacte</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Missatge:</strong></p>
      <p>${missatge.replace(/\n/g, "<br/>")}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "elink.cat <noreply@elink.cat>",
      to: [destination],
      reply_to: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: error.message || "Error enviant el missatge." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Error inesperat." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

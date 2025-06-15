
/**
 * Calls the Supabase Edge Function to send a contact email.
 * @param nom Name of the sender
 * @param email Sender's email
 * @param missatge Message content
 * @returns Promise resolving to { success: boolean, error?: string }
 */
export async function sendContactEmail({
  nom,
  email,
  missatge,
}: {
  nom: string;
  email: string;
  missatge: string;
}) {
  try {
    // URL pública de la Supabase Edge Function
    const url = "https://vwaigmzevohdywsvdgly.functions.supabase.co/send-contact-email";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, email, missatge }),
    });

    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      console.error("Error from backend:", data);
      return {
        success: false,
        error: data?.error || (typeof data === 'string' ? data : "Error enviant el missatge."),
      };
    }
    return { success: true };
  } catch (err: any) {
    console.error("Network or code error:", err);
    return {
      success: false,
      error: err?.message || "No s'ha pogut connectar amb el backend.",
    };
  }
}


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
  // This assumes your edge function is called 'send-contact-email'
  const response = await fetch("/functions/v1/send-contact-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nom, email, missatge }),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      success: false,
      error: data?.error || "Error enviant el missatge.",
    };
  }
  return { success: true };
}

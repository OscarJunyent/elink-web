import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { Calendar } from "lucide-react";

const schema = z.object({
  nom: z.string().min(2, "Nom obligatori"),
  email: z.string().email("Email no vàlid"),
  missatge: z.string().min(4, "El missatge és obligatori"),
});

type FormType = z.infer<typeof schema>;

const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormType) => {
    // Call backend to send email via Supabase Edge Function
    const result = await sendContactEmail({
      nom: data.nom,
      email: data.email,
      missatge: data.missatge
    });

    if (result.success) {
      toast({
        title: "Missatge enviat!",
        description:
          "Ens posarem en contacte aviat. Gràcies per confiar en elink.cat.",
      });
      reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "No s'ha pogut enviar el missatge.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="nom" className="block mb-1 font-medium">
          Nom i cognoms
        </label>
        <Input
          id="nom"
          autoComplete="name"
          {...register("nom")}
          disabled={isSubmitting}
        />
        {errors.nom && (
          <div className="text-destructive text-xs mt-1">
            {errors.nom.message}
          </div>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Correu electrònic
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <div className="text-destructive text-xs mt-1">
            {errors.email.message}
          </div>
        )}
      </div>
      <div>
        <label htmlFor="missatge" className="block mb-1 font-medium">
          Missatge
        </label>
        <Textarea
          id="missatge"
          rows={4}
          {...register("missatge")}
          disabled={isSubmitting}
        />
        {errors.missatge && (
          <div className="text-destructive text-xs mt-1">
            {errors.missatge.message}
          </div>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? "Enviant..." : "Enviar missatge"}
      </Button>
    </form>
  );
};

export default ContactForm;

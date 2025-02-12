"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../ui/form";

import { Button } from "../ui/button";
import { useState } from "react";

import Step1 from "../_steps/step1";

import Step2 from "../_steps/step2";
import Step0 from "../_steps/step0";
import Step3 from "../_steps/step3";

const formSchema = z.object({
  name: z.string().min(3, {
    message: '"Nome é obrigatório"',
  }),
  year: z.coerce.number().int().positive().min(18, {
    message: "Idade deve ser igual ou maior que 18",
  }),
  email: z.string().email("Email inválido"),
  github: z.string().url("URL do GitHub inválida"),
  linkedin: z.string().url("URL do LinkedIn inválida"),
  description: z
    .string()
    .refine((val) => val === "" || val.length >= 10, {
      message: "Descrição deve ter pelo menos 10 caracteres",
    })
    .optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

const FormTeam = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      year: 1,
      email: "",
      github: "",
      linkedin: "",
      description: "",
    },
  });

  const [step, setStep] = useState(0);

  const firstStep = () => setStep((prev) => prev + 1);
  const nextStep = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };
  const prevStep = () => step > 0 && setStep((prev) => prev - 1);

  // Função onSubmit agora salva os dados no localStorage
  const onSubmit = async (data: FormSchema) => {
    try {
      // Salva os dados no localStorage
      localStorage.setItem("formData", JSON.stringify(data));
      console.log("Dados salvos no localStorage:", data);
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {step === 0 && <Step0 setSubscribe={firstStep} />}
        {step === 1 && <Step1 control={form.control} />}
        {step === 2 && <Step2 control={form.control} />}
        {step === 3 && <Step3 control={form.control} />}

        {step > 0 && (
          <div className="flex justify-center space-x-4 p-4">
            {step > 0 && (
              <Button
                type="button"
                onClick={prevStep}
                className="w-[150px] rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-2xl font-bold text-white"
              >
                Voltar
              </Button>
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="w-[150px] rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-2xl font-bold text-white"
              >
                Próximo
              </Button>
            ) : (
              <Button
                type="submit" // Aqui é o tipo 'submit' para que o formulário seja enviado ao clicar no botão
                className="w-[150px] rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-2xl font-bold text-white"
              >
                Enviar
              </Button>
            )}
          </div>
        )}
      </form>
    </Form>
  );
};

export default FormTeam;

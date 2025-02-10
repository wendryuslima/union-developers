"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";

import { Button } from "./ui/button";
import { useState } from "react";

import Step1 from "./step1";

import Step2 from "./step2";
import Step0 from "./step0";
import Step3 from "./step3";

const formSchema = z.object({
  name: z.string().min(1, {
    message: '"Nome é obrigatório"',
  }),
  year: z.coerce.number().int().positive().min(4, {
    message: "Ano deve ter pelo menos 4 caracteres",
  }),
  email: z.string().email("Email inválido"),
  github: z.string().url("URL do GitHub inválida"),
  linkedin: z.string().url("URL do LinkedIn inválida"),
  description: z.string().min(10, {
    message: "Descrição deve ter pelo menos 10 caracteres",
  }),
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

  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep((prev) => prev + 1);
  const prevStep = () => step > 0 && setStep((prev) => prev - 1);
  const onSubmit = async () => {
    try {
      await console.log("logado");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {step === 0 && <Step0 setSubscribe={nextStep} />}
        {step === 1 && <Step1 control={form.control} />}
        {step === 2 && <Step2 control={form.control} />}
        {step === 3 && <Step3 control={form.control} />}
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
          {step !== 3 ? (
            <Button
              type="submit"
              onClick={nextStep}
              className="w-[150px] rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-2xl font-bold text-white"
            >
              Próximo
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={nextStep}
              className="w-[150px] rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 text-2xl font-bold text-white"
            >
              Enviar
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default FormTeam;

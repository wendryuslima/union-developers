import { Control } from "react-hook-form";
import { FormSchema } from "./form.team";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Step2Props {
  control: Control<FormSchema>;
}

const Step2 = ({ control }: Step2Props) => {
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Junte-se ao time!</h2>
      <p className="mt-2 text-center text-sm">
        Tem interesse em participar do Union? Confira abaixo os requisitos para
        participar.
      </p>

      <FormItem>
        <FormLabel>
          <span className="text-red-500">*</span> Quanto tempo de programação
        </FormLabel>
        <FormControl>
          <RadioGroup className="gap-4" defaultValue="option1">
            <div className="mt-4 flex items-center space-x-2">
              <RadioGroupItem
                value="option1"
                id="option1"
                className="h-5 w-5 border-2 border-white"
              />
              <label htmlFor="option1" className="text-sm font-medium">
                1 ano
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option3"
                id="option3"
                className="h-5 w-5 border-2 border-white"
              />
              <label htmlFor="option2" className="text-sm font-medium">
                2 anos
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option4"
                id="option4"
                className="h-5 w-5 border-2 border-white"
              />
              <label htmlFor="option2" className="text-sm font-medium">
                3 anos
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option5"
                id="option5"
                className="h-5 w-5 border-2 border-white"
              />
              <label htmlFor="option2" className="text-sm font-medium">
                Mais de 3 anos
              </label>
            </div>
          </RadioGroup>
        </FormControl>
      </FormItem>

      <div className="mt-4">
        <FormField
          control={control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span> Link do repositório do
                seu melhor projeto
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[50px] rounded-lg"
                  placeholder="Qual o link para o repositório do seu melhor projeto?"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="mt-4">
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500 mr-1">*</span>
                Fale sobre como foi construir esse projeto? Quais foram os
                aprendizados e dificuldades que teve durante o desenvolvimento?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[150px] rounded-lg"
                  placeholder="Fale sobre seu melhor projeto, nos conte como foi trabalhar nele?"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Step2;

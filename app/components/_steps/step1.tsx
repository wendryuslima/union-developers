import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Control } from "react-hook-form";
import { FormSchema } from "../_team/form.team";

interface Step1Props {
  control: Control<FormSchema>;
}

const Step1 = ({ control }: Step1Props) => {
  return (
    <div key="1">
      <h2 className="text-center text-xl font-bold">Junte-se ao time!</h2>
      <p className="mt-2 text-center text-sm">
        Tem interesse em participar do Union? Confira abaixo os requisitos para
        participar.
      </p>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="h-[200px]">
              <span className="text-red-500">*</span>
              <span className="text-white">Nome</span>
            </FormLabel>
            <FormControl>
              <Input
                className="h-[50px] rounded-lg"
                placeholder="Qual seu nome completo?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={control}
        name="year"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <span className="text-red-500">*</span>
              <span className="text-white">Idade</span>
            </FormLabel>
            <FormControl>
              <Input
                className="h-[50px] rounded-lg"
                placeholder="Qual sua idade?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <span className="text-red-500">*</span>{" "}
              <span className="text-white">Email</span>
            </FormLabel>
            <FormControl>
              <Input
                className="h-[50px] rounded-lg"
                placeholder="Qual seu email?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <span className="text-red-500">*</span>
              <span className="text-white">Github</span>
            </FormLabel>
            <FormControl>
              <Input
                className="h-[50px] rounded-lg"
                placeholder="Qual seu Github?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <span className="text-red-500">*</span>
              <span className="text-white">Linkedin</span>
            </FormLabel>
            <FormControl>
              <Input
                className="h-[50px] rounded-lg"
                placeholder="Qual seu linkedin?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>

      <div className="">
        <Label className="borber-white border-solid">
          <span className="text-red-500">*</span> Onde você gosta mais de
          trabalhar?
        </Label>
        <RadioGroup defaultValue="option1">
          <div className="mt-4 flex items-center space-x-2">
            <RadioGroupItem
              value="option1"
              id="option1"
              className="h-5 w-5 border-2 border-purple-500 bg-gradient-to-r from-purple-700 to-blue-600"
            />
            <label htmlFor="option1" className="text-sm font-medium">
              Front End
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option2"
              id="option2"
              className="h-5 w-5 border-2 border-blue-500 bg-gradient-to-r from-purple-700 to-blue-600"
            />
            <label htmlFor="option2" className="text-sm font-medium">
              Back End
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Step1;

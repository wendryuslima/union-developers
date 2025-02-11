import { Control } from "react-hook-form";

import { Input } from "../ui/input";
import { FormSchema } from "../_team/form.team";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

interface Step4Props {
  control: Control<FormSchema>;
}

const Step3 = ({ control }: Step4Props) => {
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Junte-se ao time!</h2>
      <p className="mt-2 text-center text-sm">
        Tem interesse em participar do Union? Confira abaixo os requisitos para
        participar.
      </p>

      <div className="mt-4">
        <FormField
          control={control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span> Por que você gosta de
                programar? Qual sua maior motivação?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[50px] rounded-lg"
                  placeholder="Qual sua motivação para fazer o que faz?"
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
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span> Como você faz para
                conseguir cumprir todos as suas responsabilidades do dia a dia?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[50px] rounded-lg"
                  placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia??"
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
                <span className="mr-1 text-red-500">*</span>
                Quando você recebe um feedback, como é para você?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[150px] rounded-lg"
                  placeholder="Quando você recebe um feedback, como é para você??"
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
                <span className="mr-1 text-red-500">*</span>
                Como você ficou sabendo sobre o Union?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[150px] rounded-lg"
                  placeholder="Como você ficou sabendo sobre o Union??"
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
                <span className="mr-1 text-red-500">*</span>
                Por que você quer fazer parte do Union?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[150px] rounded-lg"
                  placeholder="
Por que você quer fazer parte do Union??"
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
                <span className="mr-1 text-red-500">*</span>
                Por que você deveria fazer parte do pequeno grupo que vai ter a
                oportunidade de participar do Union?
              </FormLabel>
              <FormControl>
                <Input
                  className="h-[150px] rounded-lg"
                  placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
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

export default Step3;

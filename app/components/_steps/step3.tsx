import { Control } from "react-hook-form";

import { Input } from "../ui/input";
import { FormSchema } from "../_team/form.team";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Checkbox } from "../ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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

        <div className="mt-4 flex items-center gap-2">
          <Checkbox className="border-white text-blue-600" />
          <h1>Li e aceito os</h1>
          <Sheet>
            <SheetTrigger>termos</SheetTrigger>
            <SheetContent className="fixed inset-0 m-auto max-h-[100%] max-w-[90%] flex-col items-center justify-center overflow-y-auto rounded-lg bg-[#704db9] p-6 py-4 shadow-lg md:max-w-[600px]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="border-solid border-b-white text-xl font-bold text-white">
                  Termos e condições
                </h1>
                <div className="gap-4 space-y-4 text-center text-sm text-white">
                  Ao prosseguir com o preenchimento do formulário de inscrição,
                  você concorda com os seguintes termos e condições do Union:
                  <br />
                  <br />
                  <h1>
                    1.<strong>Autorização para coleta de informações:</strong>{" "}
                    Ao fornecer suas informações pessoais no formulário de
                    inscrição, você autoriza o Union a coletar, armazenar e
                    utilizar os dados fornecidos para fins de avaliação de
                    inscrição e organização das atividades no âmbito do programa
                    Comprometemo-nos a proteger a privacidade e
                    confidencialidade dos seus dados,em conformidade com as leis
                    aplicáveis de proteção de dados.
                  </h1>
                  <h1>
                    2.<strong>Idade mínima:</strong> Todos os membros do Union
                    devem ter 18 anos de idade ou mais para participar do
                    programa.
                  </h1>
                  <h1>
                    3.<strong>Utilização de webcam:</strong> Todos os membros do
                    Union Os membros do Union devem possuir uma webcam para
                    participar de entrevistas, reuniões e atividades do
                    programa. A utilização de webcam é fundamental para promover
                    um ambiente de interação e colaboração entre os membros
                  </h1>
                  <h1>
                    4.<strong> Gravação de entrevistas e reuniões:</strong>{" "}
                    Todos os membros do Você concorda que todas as entrevistas e
                    reuniões realizadas no âmbito do Union poderão ser gravadas
                    para fins de registro e acompanhamento das atividades do
                    programa. Essas gravações poderão ser utilizadas
                    internamente pelo Union para fins de análise, feedback e
                    melhoria contínua do programa. Além disso, o Union poderá
                    utilizar essas gravações de forma selecionada para divulgar
                    em suas redes sociais ou outros meios de comunicação, sempre
                    com o objetivo de promover a transparência e compartilhar a
                    experiência do programa.
                  </h1>
                  <h1>
                    5.<strong>Remoção de membros:</strong> O Union se reserva o
                    direito de remover membros do programa caso seja
                    identificado algum comportamento inadequado ou em desacordo
                    com as regras e valores estabelecidos. Nossa intenção é
                    manter um ambiente colaborativo e respeitoso para todos os
                    participantes do Union.
                  </h1>
                  <h1>
                    6.
                    <strong>
                      {" "}
                      Uso das informações para fins de divulgação:
                    </strong>
                    Ao participar do Union, você concorda que poderemos utilizar
                    seu nome e depoimentos para fins de divulgação, tais como
                    posts em redes sociais, artigos no blog, e outras formas de
                    comunicação sobre o programa. No entanto, qualquer
                    informação pessoal sensível será mantida em sigilo e não
                    será divulgada publicamente sem sua autorização prévia
                  </h1>
                  <h1>
                    5.<strong> Atualização dos termos e condições:</strong> Os
                    termos e condições do Union podem ser atualizados
                    periodicamente. Quaisquer alterações serão comunicadas aos
                    membros e publicadas na landing page do Union. Ao continuar
                    participando do programa após a atualização dos termos, você
                    estará concordando com as novas condições.
                  </h1>
                  <br />
                  <br />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Step3;

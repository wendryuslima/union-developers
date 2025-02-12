"use client";

import { useState } from "react";
import FormTeam from "./form.team";

import Step0 from "../_steps/step0";

const Team = () => {
  const [subsbribe, setSubscribe] = useState(false);
  return (
    <div className="mx-auto mt-4 flex w-[450px] items-center justify-center from-[#0048FE]/20 to-[#851D86]/20 px-7 lg:mx-auto lg:w-[900px] lg:justify-center">
      <div className="w-[100%] rounded-lg bg-gradient-to-br p-6 shadow-lg lg:max-w-[650px]">
        {!subsbribe ? (
          <Step0 setSubscribe={() => setSubscribe(true)} />
        ) : (
          <FormTeam />
        )}
      </div>
    </div>
  );
};

export default Team;

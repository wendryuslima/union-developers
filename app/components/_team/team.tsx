"use client";

import { useState } from "react";
import FormTeam from "./form.team";

import Step0 from "../_steps/step0";

const Team = () => {
  const [subsbribe, setSubscribe] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center px-4 lg:px-6">
      <div className="mx-auto mt-12 flex w-full max-w-[500px] flex-col items-center justify-center gap-6 space-y-4 rounded-lg bg-[#252031] bg-gradient-to-br p-6 shadow-lg lg:max-w-[700px]">
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

"use client";

import { useState } from "react";
import FormTeam from "./form.team";

import Step0 from "../_steps/step0";

const Team = () => {
  const [subsbribe, setSubscribe] = useState(false);
  return (
    <div className="mx-auto mt-6 flex w-[450px] flex-col items-center gap-6 space-y-4 rounded-lg bg-gradient-to-br from-[#0048FE]/20 to-[#851D86]/20 p-6 shadow-lg lg:w-[900px]">
      {!subsbribe ? (
        <Step0 setSubscribe={() => setSubscribe(true)} />
      ) : (
        <div>
          <FormTeam />
        </div>
      )}
    </div>
  );
};

export default Team;

import React, { useState } from "react";
import { OptionButton } from "../ui/button";
import { InputText } from "../ui/forms";

export default function MonitoringResult() {
  const [select, setSelect] = useState(1);

  return (
    <div className="space-y-2">
      <div>Hasil Pemantauan</div>
      <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <div>
          <OptionButton onClick={() => setSelect(1)} selected={select === 1} type="button">
            Sehat
          </OptionButton>
        </div>
        <div>
          <OptionButton onClick={() => setSelect(2)} selected={select === 2} type="button">
            Bergejala (Suspek)
          </OptionButton>
        </div>
        <div>
          <OptionButton onClick={() => setSelect(3)} selected={select === 3} type="button">
            Rujuk RS
          </OptionButton>
        </div>
        <div>
          <OptionButton onClick={() => setSelect(4)} selected={select === 4} type="button">
            Meninggal
          </OptionButton>
        </div>
      </div>
      <div>
        <MonitoringOption option={select} />
      </div>
    </div>
  );
}

function MonitoringOption(props: { option: number }): JSX.Element | null {
  if (props.option === 4) {
    return (
      <div className="py-4 space-y-2">
        <div>Tanggal Meninggal</div>
        <div className="relative w-64">
          <div className="absolute top-0 right-0 px-3 py-2">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <InputText type="date" />
        </div>
      </div>
    );
  }
  return null;
}

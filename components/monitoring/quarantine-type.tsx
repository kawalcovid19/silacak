import React, { useState } from "react";
import { OptionButton } from "../ui/button";
import { InputText } from "../ui/forms";

export default function QuarantineType() {
  const [select, setSelect] = useState(1);

  return (
    <div className="space-y-2">
      <div>Jenis Karantina</div>
      <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <div>
          <OptionButton onClick={() => setSelect(1)} selected={select === 1} type="button">
            Tidak Karantina
          </OptionButton>
        </div>
        <div>
          <OptionButton onClick={() => setSelect(2)} selected={select === 2} type="button">
            Karantina mandiri di rumah
          </OptionButton>
        </div>
        <div>
          <OptionButton onClick={() => setSelect(3)} selected={select === 3} type="button">
            Karantina mandiri di fasilitas khusus
          </OptionButton>
        </div>
      </div>
      <div>
        <QuarantineOption option={select} />
      </div>
    </div>
  );
}

function QuarantineOption(props: { option: number }): JSX.Element | null {
  if (props.option === 3) {
    return (
      <div className="py-4 space-y-2">
        <div>Nama Lokasi Karantina</div>
        <div className="min-w-max">
          <InputText placeholder="Masukkan nama lokasi karantina" />
        </div>
      </div>
    );
  }
  return null;
}

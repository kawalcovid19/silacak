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
          <OptionButton
            className="w-full md:w-max"
            onClick={() => setSelect(1)}
            selected={select === 1}
            type="button"
          >
            Tidak Karantina
          </OptionButton>
        </div>
        <div>
          <OptionButton
            className="w-full md:w-max"
            onClick={() => setSelect(2)}
            selected={select === 2}
            type="button"
          >
            Karantina mandiri di rumah
          </OptionButton>
        </div>
        <div>
          <OptionButton
            className="w-full md:w-max"
            onClick={() => setSelect(3)}
            selected={select === 3}
            type="button"
          >
            Karantina mandiri di fasilitas khusus
          </OptionButton>
        </div>
      </div>
      <div>
        <div className="py-4 space-y-2" hidden={select !== 3}>
          <div>Nama Lokasi Karantina</div>
          <div className="w-full lg:max-w-lg">
            <InputText placeholder="Masukkan nama lokasi karantina" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { OptionButton, OutlineButton } from "../ui/button";
import { InputText } from "../ui/forms";

export default function MonitoringResult() {
  const [select, setSelect] = useState(1);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <div>Hasil Pemantauan</div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <OptionButton
            className="w-full lg:max-w-sm"
            onClick={() => setSelect(1)}
            selected={select === 1}
            type="button"
          >
            Sehat
          </OptionButton>
        </div>
        <div>
          <OptionButton
            className="w-full lg:max-w-sm truncate"
            onClick={() => setSelect(2)}
            selected={select === 2}
            type="button"
          >
            Bergejala (Suspek)
          </OptionButton>
        </div>
        <div>
          <OptionButton
            className="w-full lg:max-w-sm"
            onClick={() => setSelect(3)}
            selected={select === 3}
            type="button"
          >
            Rujuk RS
          </OptionButton>
        </div>
        <div>
          <OptionButton
            className="w-full lg:max-w-sm"
            onClick={() => setSelect(4)}
            selected={select === 4}
            type="button"
          >
            Meninggal
          </OptionButton>
        </div>
      </div>
      <div className="py-4 space-y-2" hidden={select !== 4}>
        <DatePicker label="Tanggal Meninggal" />
      </div>
      <div className="py-4 space-y-2" hidden={select !== 2}>
        <div className="py-4 space-y-4">
          <DatePicker label="Tanggal Mulai Gejala" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <MultipleChoice question="Panas / Demam" />
            <MultipleChoice question="Batuk" />
            <MultipleChoice question="Pilek" />
          </div>
          <div className="w-full border-t border-gray-300 border-dashed" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <MultipleChoice question="Sesak Nafas" />
            <MultipleChoice question="Anosmia (Hilang Penciuman)" />
          </div>
          <div className="w-full border-t border-gray-300 border-dashed" />
          <div className="lg:flex lg:justify-center">
            <OutlineButton
              className="w-full md:w-max h-8"
              icon={expanded ? ChevronUpIcon : ChevronDownIcon}
              iconPosition="right"
              onClick={() => setExpanded(!expanded)}
            >
              Terdapat gejala lain
            </OutlineButton>
          </div>
          <div className="py-4 space-y-4" hidden={!expanded}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <MultipleChoice question="Ageusia (Hilang indra perasa/pengecap)" />
              <MultipleChoice question="Lesu/Lemah/Letih/Lelah" />
              <MultipleChoice question="Sakit Kepala" />
            </div>
            <div className="w-full border-t border-gray-300 border-dashed" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <MultipleChoice question="Diare" />
              <MultipleChoice question="Mual" />
              <MultipleChoice question="Muntah" />
            </div>
            <div className="w-full border-t border-gray-300 border-dashed" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <MultipleChoice question="Tanda Pneumonia" />
              <MultipleChoice question="Sakit Tenggorokan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultipleChoice(props: { question: string }) {
  const [select, setSelect] = useState(2);
  return (
    <div className="space-y-2">
      <div className="truncate">{props.question}</div>
      <div className="grid grid-cols-3 gap-4 lg:flex">
        <OptionButton
          className="truncate"
          onClick={() => setSelect(1)}
          selected={select === 1}
          type="button"
        >
          Ya
        </OptionButton>
        <OptionButton
          className="truncate"
          onClick={() => setSelect(2)}
          selected={select === 2}
          type="button"
        >
          Tidak
        </OptionButton>
        <OptionButton
          className="truncate"
          onClick={() => setSelect(3)}
          selected={select === 3}
          type="button"
        >
          Tidak Tahu
        </OptionButton>
      </div>
    </div>
  );
}

function DatePicker(props: { label: string }) {
  return (
    <div className="space-y-2">
      <div>{props.label}</div>
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

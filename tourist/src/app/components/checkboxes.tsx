"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowDown from "../../../public/photos/svg/tabler_arrow-up.svg";
type CheckboxValues = {
  [key: string]: boolean;
};

type CheckboxListProps = {
  sections: {
    title: string;
    checkboxes: {
      label: string;
      value: string;
    }[];
  }[];
};

export default function CheckboxList({ sections }: CheckboxListProps) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<CheckboxValues>(
    {}
  );

  const handleCheckboxChange = (
    sectionTitle: string,
    checkboxValue: string
  ) => {
    setSelectedCheckboxes((prev) => {
      const newCheckboxes = {
        ...prev,
        [`${sectionTitle}_${checkboxValue}`]:
          !prev[`${sectionTitle}_${checkboxValue}`],
      };
      console.log(newCheckboxes);
      return newCheckboxes;
    });
  };

  return (
    <div>
      <div className=" flex flex-col gap-10">
        <h2 className="font-semibold text-[28px]">Favorite</h2>
        <div>
          <h4 className="text-[#404E7C] text-[16px] font-semibold flex gap-2">
            Sortare (mod implicit)
            <Image src={ArrowDown} width={28} height={28} alt="Arrow Down" />
          </h4>
          <hr className="w-52 h-[2px]  bg-[#6C759D] border-0" />
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="py-10">
          <CheckboxSection
            title={section.title}
            checkboxes={section.checkboxes}
            selectedCheckboxes={selectedCheckboxes}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      ))}
    </div>
  );
}

type CheckboxSectionProps = {
  title: string;
  checkboxes: {
    label: string;
    value: string;
  }[];
  selectedCheckboxes: CheckboxValues;
  onCheckboxChange: (sectionTitle: string, checkboxValue: string) => void;
};

function CheckboxSection({
  title,
  checkboxes,
  selectedCheckboxes,
  onCheckboxChange,
}: CheckboxSectionProps) {
  return (
    <div className="mt-4">
      <strong>{title}</strong>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.value}
          label={checkbox.label}
          value={checkbox.value}
          checked={selectedCheckboxes[`${title}_${checkbox.value}`]}
          onCheckboxChange={() => onCheckboxChange(title, checkbox.value)}
        />
      ))}
    </div>
  );
}

type CheckboxProps = {
  label: string;
  value: string;
  checked: boolean;
  onCheckboxChange: () => void;
};

function Checkbox({ label, value, checked, onCheckboxChange }: CheckboxProps) {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        id={value}
        checked={checked}
        onChange={onCheckboxChange}
        className={`mr-2 h-5 w-5 appearance-none border-2 rounded border-[#9D946C] checked:border-[#9D946C] checked:ring-[#9D946C] ${
          checked ? "bg-checkmark bg-contain bg-no-repeat" : ""
        } cursor-pointer`}
      />
      <label htmlFor={value} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

// Usage:
export const CheckboxFilter = () => {
  const sections = [
    {
      title: "TIPUL REȘEDINȚEI",
      checkboxes: [
        { label: "Hoteluri mici", value: "hoteluri_mici" },
        { label: "Apartamente", value: "apartamente" },
        {
          label: "Case și apartamente în întregime",
          value: "case_si_apartamente",
        },
        { label: "Saună", value: "sauna" },
        { label: "Case de vacanță", value: "case_de_vacanta" },
        { label: "Hoteluri", value: "hoteluri" },
      ],
    },
    {
      title: "FACILITĂȚI ÎN CAMERĂ",
      checkboxes: [
        { label: "Izolare fonică", value: "izolare_fonica" },
        { label: "Balcon", value: "balcon" },
        { label: "Terasă", value: "terasa" },
        { label: "Baie proprie", value: "baie_proprie" },
        { label: "Loc de muncă pentru laptop", value: "loc_de_munca" },
        { label: "Aer condiționat", value: "aer_conditionat" },
        { label: "Bucătărie/chicinetă", value: "bucatarie" },
      ],
    },
    {
      title: "NUTRIȚIE",
      checkboxes: [
        { label: "Mic dejun inclus", value: "mic_dejun_inclus" },
        { label: "Cu bucătărie proprie", value: "cu_bucatarie_proprie" },
        { label: "Două paturi separate", value: "doua_paturi_separate" },
        { label: "Un pat dublu", value: "un_pat_dublu" },
      ],
    },
    {
      title: "TIP PAT",
      checkboxes: [
        { label: "Două paturi separate", value: "doua_paturi_separate" },
        { label: "Un pat dublu", value: "un_pat_dublu" },
      ],
    },
    {
      title: "FACILITĂȚI SPECIALE ÎN INTERIOR",
      checkboxes: [
        { label: "Indicii sonore", value: "indicii_sonore" },
        { label: "Semne tactile", value: "semne_tactile" },
        { label: "Prompturi Braille", value: "prompturi_braille" },
        { label: "Chiuvetă joasă", value: "chiuveta_joasa" },
        { label: "Toaletă înaltă", value: "toaleta_inalta" },
        { label: "WC cu balustrade", value: "wc_cu_balustrade" },
      ],
    },
    // Add more sections as needed
  ];

  return <CheckboxList sections={sections} />;
};

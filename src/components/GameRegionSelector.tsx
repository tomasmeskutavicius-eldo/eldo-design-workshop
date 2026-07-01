import { useState } from "react";
import "./GameRegionSelector.css";

const REGIONS = ["EU", "NA", "Asia", "TW, HK, MO"] as const;

type Region = (typeof REGIONS)[number];

type ChipProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

function CheckIcon() {
  return (
    <svg
      className="game-region-chip__icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chip({ label, selected, onSelect }: ChipProps) {
  return (
    <button
      type="button"
      className={`game-region-chip${selected ? " game-region-chip--selected" : ""}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      {selected && <CheckIcon />}
      <span className="game-region-chip__label">{label}</span>
    </button>
  );
}

type GameRegionSelectorProps = {
  defaultValue?: Region;
  onChange?: (region: Region) => void;
};

export function GameRegionSelector({
  defaultValue = "EU",
  onChange,
}: GameRegionSelectorProps) {
  const [selected, setSelected] = useState<Region>(defaultValue);

  const handleSelect = (region: Region) => {
    setSelected(region);
    onChange?.(region);
  };

  return (
    <div className="game-region-selector">
      <p className="game-region-selector__label">Game region</p>
      <div
        className="game-region-selector__options"
        role="group"
        aria-label="Game region"
      >
        {REGIONS.map((region) => (
          <Chip
            key={region}
            label={region}
            selected={selected === region}
            onSelect={() => handleSelect(region)}
          />
        ))}
      </div>
    </div>
  );
}

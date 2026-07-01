import { useEffect, useId, useRef, useState } from "react";
import signRightIcon from "./assets/header/sign-right.svg";
import { useThemeCopy } from "./theme/useThemeCopy";
import "./GameRegionSelector.css";

const REGIONS = ["EU", "NA", "Asia", "TW, HK, MO"] as const;

type Region = (typeof REGIONS)[number];

type OptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

function CheckIcon() {
  return (
    <svg
      className="game-region-option__icon"
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

function DropdownOption({ label, selected, onSelect }: OptionProps) {
  const copy = useThemeCopy();

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      className={`game-region-option${selected ? " game-region-option--selected" : ""}`}
      onClick={onSelect}
    >
      {selected && <CheckIcon />}
      <span className="game-region-option__label">{copy(label)}</span>
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
  const [isOpen, setIsOpen] = useState(false);
  const copy = useThemeCopy();
  const listboxId = useId();
  const labelId = `${listboxId}-label`;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (region: Region) => {
    setSelected(region);
    onChange?.(region);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="game-region-selector" ref={containerRef}>
      <p className="game-region-selector__label" id={labelId}>
        {copy("Game region")}
      </p>
      <div className="game-region-selector__control">
        <button
          type="button"
          className={`game-region-selector__trigger${isOpen ? " game-region-selector__trigger--open" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="game-region-selector__trigger-label">{copy(selected)}</span>
          <span className="game-region-selector__chevron" aria-hidden="true">
            <img src={signRightIcon} alt="" />
          </span>
        </button>
        {isOpen && (
          <div
            id={listboxId}
            className="game-region-selector__menu"
            role="listbox"
            aria-label={copy("Game region")}
          >
            {REGIONS.map((region) => (
              <DropdownOption
                key={region}
                label={region}
                selected={selected === region}
                onSelect={() => handleSelect(region)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import multipleCoins from "./assets/multiple-coins.png";
import twoCoins from "./assets/two-coins.png";
import catCrystalIcon from "./assets/cat-crystal.svg";
import { useThemeCopy } from "./theme/useThemeCopy";
import { useTheme } from "./theme/ThemeProvider";
import "./AmountCard.css";

export type AmountCardProps = {
  amount: string;
  productName?: string;
  originalPrice: string;
  price: string;
  discount: string;
  icon: "two" | "multiple";
  selected?: boolean;
  onSelect?: () => void;
};

function CheckIcon() {
  return (
    <svg
      className="amount-card__check-icon"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AmountCard({
  amount,
  productName = "Genesis Crystals",
  originalPrice,
  price,
  discount,
  icon,
  selected = false,
  onSelect,
}: AmountCardProps) {
  const { theme } = useTheme();
  const copy = useThemeCopy();
  const isCatMode = theme === "cat";
  const iconSrc = isCatMode ? catCrystalIcon : icon === "two" ? twoCoins : multipleCoins;
  const displayProductName = copy(isCatMode ? "Cat Crystals" : productName);

  return (
    <button
      type="button"
      className={`amount-card${selected ? " amount-card--selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      {selected && (
        <span className="amount-card__check" aria-hidden="true">
          <CheckIcon />
        </span>
      )}

      <div className="amount-card__top">
        <img
          className="amount-card__icon"
          src={iconSrc}
          alt=""
          width={40}
          height={40}
        />
        <div className="amount-card__details">
          <span
            className={`amount-card__amount${selected ? " amount-card__amount--bold" : ""}`}
          >
            {amount}
          </span>
          <span className="amount-card__product">{displayProductName}</span>
        </div>
      </div>

      <div className="amount-card__pricing">
        <span className="amount-card__original-price">{originalPrice}</span>
        <div className="amount-card__price-row">
          <span className="amount-card__price">{price}</span>
          <span className="amount-card__discount">{discount}</span>
        </div>
      </div>
    </button>
  );
}

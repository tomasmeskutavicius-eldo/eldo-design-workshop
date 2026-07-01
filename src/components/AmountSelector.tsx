import { useState } from "react";
import { AmountCard } from "./AmountCard";
import "./AmountSelector.css";

const AMOUNT_OPTIONS = [
  {
    id: "60",
    amount: "60",
    originalPrice: "$0.99",
    price: "$0.66",
    discount: "-34%*",
    icon: "two" as const,
  },
  {
    id: "330",
    amount: "330",
    originalPrice: "$4.99",
    price: "$3.30",
    discount: "-33%*",
    icon: "two" as const,
  },
  {
    id: "1090",
    amount: "1,090",
    originalPrice: "$14.99",
    price: "$10.14",
    discount: "-33%*",
    icon: "two" as const,
  },
  {
    id: "2240",
    amount: "2,240",
    originalPrice: "$29.99",
    price: "$18.62",
    discount: "-38%*",
    icon: "two" as const,
  },
  {
    id: "3880",
    amount: "3,880",
    originalPrice: "$49.99",
    price: "$30.99",
    discount: "-39%*",
    icon: "multiple" as const,
  },
  {
    id: "8080",
    amount: "8,080",
    originalPrice: "$99.99",
    price: "$61.49",
    discount: "-39%*",
    icon: "multiple" as const,
  },
  {
    id: "16160",
    amount: "16,160",
    originalPrice: "$199.98",
    price: "$122.99",
    discount: "-39%*",
    icon: "multiple" as const,
  },
  {
    id: "24240",
    amount: "24,240",
    originalPrice: "$299.97",
    price: "$184.99",
    discount: "-39%*",
    icon: "multiple" as const,
  },
  {
    id: "32320",
    amount: "32,320",
    originalPrice: "$399.96",
    price: "$244.99",
    discount: "-39%*",
    icon: "multiple" as const,
  },
  {
    id: "80800",
    amount: "80,800",
    originalPrice: "$999.90",
    price: "$619.99*",
    discount: "-38%*",
    icon: "multiple" as const,
  },
];

export function AmountSelector() {
  const [selectedId, setSelectedId] = useState("8080");

  return (
    <section className="amount-selector" aria-labelledby="amount-selector-title">
      <h2 id="amount-selector-title" className="amount-selector__title">
        Amount
      </h2>
      <div className="amount-selector__grid" role="group" aria-label="Select amount">
        {AMOUNT_OPTIONS.map((option) => (
          <AmountCard
            key={option.id}
            amount={option.amount}
            originalPrice={option.originalPrice}
            price={option.price}
            discount={option.discount}
            icon={option.icon}
            selected={selectedId === option.id}
            onSelect={() => setSelectedId(option.id)}
          />
        ))}
      </div>
    </section>
  );
}

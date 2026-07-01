import { useCallback, useEffect, useRef, useState } from "react";
import { AmountCard } from "./AmountCard";
import { useThemeCopy } from "./theme/useThemeCopy";
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

const DEFAULT_OPTION_ID = "8080";

function getClosestOptionId(
  viewport: HTMLDivElement,
  slideRefs: Record<string, HTMLDivElement | null>,
) {
  const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
  let closestId = AMOUNT_OPTIONS[0].id;
  let closestDistance = Infinity;

  for (const option of AMOUNT_OPTIONS) {
    const slide = slideRefs[option.id];
    if (!slide) continue;

    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const distance = Math.abs(viewportCenter - slideCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = option.id;
    }
  }

  return closestId;
}

export function AmountSelector() {
  const copy = useThemeCopy();
  const [selectedId, setSelectedId] = useState(DEFAULT_OPTION_ID);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const selectedIndex = Math.max(
    0,
    AMOUNT_OPTIONS.findIndex((option) => option.id === selectedId),
  );

  const scrollToOption = useCallback((optionId: string) => {
    const viewport = viewportRef.current;
    const slide = slideRefs.current[optionId];
    if (!viewport || !slide) return;

    isProgrammaticScroll.current = true;
    const targetLeft =
      slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    viewport.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScroll)),
      behavior: "smooth",
    });

    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  }, []);

  const selectOption = useCallback(
    (optionId: string) => {
      setSelectedId(optionId);
      scrollToOption(optionId);
    },
    [scrollToOption],
  );

  useEffect(() => {
    scrollToOption(DEFAULT_OPTION_ID);
  }, [scrollToOption]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        const closestId = getClosestOptionId(viewport, slideRefs.current);
        setSelectedId((currentId) => (currentId === closestId ? currentId : closestId));
      }, 80);
    };

    viewport.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleRangeChange = (index: number) => {
    selectOption(AMOUNT_OPTIONS[index].id);
  };

  return (
    <section className="amount-selector" aria-labelledby="amount-selector-title">
      <h2 id="amount-selector-title" className="amount-selector__title">
        {copy("Amount")}
      </h2>

      <div ref={viewportRef} className="amount-selector__viewport">
        <div
          className="amount-selector__track"
          role="group"
          aria-label={copy("Select amount")}
        >
          {AMOUNT_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="amount-selector__slide"
              ref={(el) => {
                slideRefs.current[option.id] = el;
              }}
            >
              <AmountCard
                amount={option.amount}
                originalPrice={option.originalPrice}
                price={option.price}
                discount={option.discount}
                icon={option.icon}
                selected={selectedId === option.id}
                onSelect={() => selectOption(option.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <input
        type="range"
        className="amount-selector__range"
        min={0}
        max={AMOUNT_OPTIONS.length - 1}
        step={1}
        value={selectedIndex}
        onChange={(event) => handleRangeChange(Number(event.target.value))}
        aria-label={copy("Slide through amount options")}
        aria-valuemin={0}
        aria-valuemax={AMOUNT_OPTIONS.length - 1}
        aria-valuenow={selectedIndex}
        aria-valuetext={`${AMOUNT_OPTIONS[selectedIndex].amount} crystals`}
      />
    </section>
  );
}

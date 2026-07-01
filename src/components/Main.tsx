import { AmountSelector } from "./AmountSelector";
import { GameRegionSelector } from "./GameRegionSelector";
import { TopUpsSellersList } from "./TopUpsSellersList";
import { TopUpCard } from "./TopUpCard/TopUpCard";
import { useThemeCopy } from "./theme/useThemeCopy";
import "./Main.css";

const DISCLAIMER =
  "*Prices shown are compared to official in-game store prices at the time of listing. Discounts reflect price differences only and do not imply affiliation with or endorsement by the game publisher. The displayed price is not final and a payment fee will be added at checkout.";

function MissingComponent({ label, className }: { label?: string; className?: string }) {
  const copy = useThemeCopy();

  return (
    <div className={`main__missing${className ? ` ${className}` : ""}`}>
      {copy(label ?? "component missing")}
    </div>
  );
}

export function Main() {
  const copy = useThemeCopy();

  return (
    <main className="main">
      <div className="main__inner">
        <div className="main__product-row">
          <div className="main__product-column">
            <div className="main__product-card">
              <GameRegionSelector defaultValue="EU" />
              <AmountSelector />
            </div>
            <p className="main__disclaimer">{copy(DISCLAIMER)}</p>
          </div>

          <aside className="main__sidebar">
            <TopUpCard />
            <MissingComponent label="component missing" className="main__missing--seller" />
          </aside>
        </div>

        <TopUpsSellersList />
      </div>
    </main>
  );
}

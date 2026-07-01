import { AmountSelector } from "./AmountSelector";
import { CardDescription } from "./CardDescription";
import { GameRegionSelector } from "./GameRegionSelector";
import "./Main.css";

const DISCLAIMER =
  "*Prices shown are compared to official in-game store prices at the time of listing. Discounts reflect price differences only and do not imply affiliation with or endorsement by the game publisher. The displayed price is not final and a payment fee will be added at checkout.";

function MissingComponent({ label, className }: { label?: string; className?: string }) {
  return (
    <div className={`main__missing${className ? ` ${className}` : ""}`}>
      {label ?? "component missing"}
    </div>
  );
}

export function Main() {
  return (
    <main className="main">
      <div className="main__inner">
        <div className="main__product-row">
          <div className="main__product-column">
            <div className="main__product-card">
              <GameRegionSelector defaultValue="EU" />
              <AmountSelector />
            </div>
            <p className="main__disclaimer">{DISCLAIMER}</p>
          </div>

          <aside className="main__sidebar">
            <MissingComponent label="component missing" className="main__missing--checkout" />
            <CardDescription />
          </aside>
        </div>

        <section className="main__sellers-section" aria-labelledby="other-sellers-title">
          <h2 id="other-sellers-title" className="main__sellers-title">
            Other sellers (10)
          </h2>
          <MissingComponent label="component missing" className="main__missing--sellers-list" />
          <MissingComponent label="component missing" className="main__missing--pagination" />
        </section>
      </div>
    </main>
  );
}

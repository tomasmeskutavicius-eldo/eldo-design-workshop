import "./ProductNavigation.css";

import genshinImpactIcon from "../assets/product-navigation/genshin-impact.png";
import tabActiveBg from "../assets/product-navigation/tab-active-bg.svg";

const TABS = [
  { label: "Accounts", active: false },
  { label: "Top Ups", active: true },
  { label: "Boosting", active: false },
] as const;

export function ProductNavigation() {
  return (
    <nav className="product-navigation" aria-label="Product">
      <div className="product-navigation__inner">
        <div className="product-navigation__game">
          <img
            src={genshinImpactIcon}
            alt=""
            className="product-navigation__game-icon"
          />
          <span className="product-navigation__game-title">Genshin Impact Top Ups</span>
        </div>

        <div className="product-navigation__tabs" role="tablist">
          {TABS.map(({ label, active }) => (
            <a
              key={label}
              href="#"
              role="tab"
              aria-selected={active}
              className={`product-navigation__tab${active ? " product-navigation__tab--active" : ""}`}
            >
              {active && (
                <span className="product-navigation__tab-glow" aria-hidden="true">
                  <img src={tabActiveBg} alt="" />
                </span>
              )}
              {label}
            </a>
          ))}
        </div>

        <div className="product-navigation__spacer" aria-hidden="true" />
      </div>
    </nav>
  );
}

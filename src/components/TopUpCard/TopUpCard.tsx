import multipleCoins from "../assets/multiple-coins.png";
import applePay from "../assets/top-up-card/apple-pay.svg";
import googlePay from "../assets/top-up-card/google-pay.svg";
import lightningIcon from "../assets/top-up-card/icon-lightning.svg";
import shieldIcon from "../assets/top-up-card/icon-shield.svg";
import supportIcon from "../assets/top-up-card/icon-support.svg";
import "./TopUpCard.css";

export function TopUpCard() {
  return (
    <article className="top-up-card">
      <header className="top-up-card__section top-up-card__title">
        <img
          alt=""
          className="top-up-card__icon"
          src={multipleCoins}
        />
        <h2 className="top-up-card__product-name">8080 Genesis Crystals</h2>
      </header>

      <div className="top-up-card__section top-up-card__row">
        <p className="top-up-card__label">Delivery time</p>
        <p className="top-up-card__value">14 min - 20 min</p>
      </div>

      <div className="top-up-card__section top-up-card__pricing">
        <div className="top-up-card__row">
          <p className="top-up-card__label">Total</p>
          <div className="top-up-card__price-block">
            <p className="top-up-card__original-price">$99.99</p>
            <div className="top-up-card__sale-row">
              <span className="top-up-card__discount-chip">-62%*</span>
              <p className="top-up-card__sale-price">$58.99</p>
            </div>
          </div>
        </div>

        <button className="top-up-card__buy-button" type="button">
          Buy now
        </button>
      </div>

      <footer className="top-up-card__usp">
        <div className="top-up-card__usp-item">
          <img
            alt=""
            className="top-up-card__usp-icon"
            src={shieldIcon}
          />
          <div className="top-up-card__usp-content">
            <p className="top-up-card__usp-primary">Money-back Guarantee</p>
            <p className="top-up-card__usp-secondary">Protected by TrustShield</p>
          </div>
        </div>

        <div className="top-up-card__usp-item top-up-card__usp-item--centered">
          <img
            alt=""
            className="top-up-card__usp-icon"
            src={lightningIcon}
          />
          <div className="top-up-card__usp-content">
            <p className="top-up-card__usp-primary">Fast Checkout Options</p>
            <img
              alt="Apple Pay"
              className="top-up-card__payment-badge"
              src={applePay}
            />
            <img
              alt="Google Pay"
              className="top-up-card__payment-badge"
              src={googlePay}
            />
          </div>
        </div>

        <div className="top-up-card__usp-item">
          <img
            alt=""
            className="top-up-card__usp-icon"
            src={supportIcon}
          />
          <div className="top-up-card__usp-content">
            <p className="top-up-card__usp-primary">24/7 Live support</p>
            <p className="top-up-card__usp-secondary">
              We&apos;re always here to help
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}

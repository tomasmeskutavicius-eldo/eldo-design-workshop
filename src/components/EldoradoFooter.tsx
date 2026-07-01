import "./EldoradoFooter.css";

import { footerIcons } from "./icons/footerIcons";
import { SvgIcon } from "./icons/SvgIcon";
import { useThemeCopy } from "./theme/useThemeCopy";

const PAYMENT_METHODS = [
  { name: "Visa", svg: footerIcons.payment.visa },
  { name: "Mastercard", svg: footerIcons.payment.mastercard },
  { name: "American Express", svg: footerIcons.payment.amex },
  { name: "Discover", svg: footerIcons.payment.discover },
  { name: "Bitcoin", svg: footerIcons.payment.bitcoin },
  { name: "Google Pay", svg: footerIcons.payment.googlePay },
  { name: "Apple Pay", svg: footerIcons.payment.applePay },
] as const;

const SOCIAL_LINKS = [
  { name: "Reddit", svg: footerIcons.social.reddit },
  { name: "TikTok", svg: footerIcons.social.tiktok },
  { name: "X", svg: footerIcons.social.twitter },
  { name: "Instagram", svg: footerIcons.social.instagram },
  { name: "Facebook", svg: footerIcons.social.facebook },
  { name: "YouTube", svg: footerIcons.social.youtube },
] as const;

const HELP_LINKS = [
  { label: "Help Center", active: false },
  { label: "Contact Us", active: true },
  { label: "Bug Bounty", active: false },
  { label: "Articles", active: false },
  { label: "Loyalty Program", active: false },
  { label: "Become a seller", active: false },
] as const;

const WARRANTY_LINKS = [
  "Account Warranty",
  "TradeShield (Buying)",
  "TradeShield (Selling)",
  "Deposits",
  "Withdrawals",
] as const;

const POLICY_LINKS = [
  "Account Seller Rules",
  "Seller Rules",
  "Changing Username",
  "Fees",
  "Refund Policy",
] as const;

const LEGAL_LINKS = ["Terms of Service", "Privacy Policy", "DMCA"] as const;

export function EldoradoFooter() {
  const copy = useThemeCopy();

  return (
    <footer className="eldorado-footer">
      <div className="eldorado-footer__container">
        <div className="eldorado-footer__payments" aria-label={copy("Accepted payment methods")}>
          {PAYMENT_METHODS.map((method) => (
            <SvgIcon
              key={method.name}
              className="eldorado-footer__payment-icon"
              svg={method.svg}
              label={copy(method.name)}
            />
          ))}
          <span className="eldorado-footer__payments-more">{copy("+ 15 more")}</span>
        </div>

        <div className="eldorado-footer__content">
          <div className="eldorado-footer__brand">
            <div className="eldorado-footer__logo" aria-label={copy("Eldorado")}>
              <SvgIcon className="eldorado-footer__logo-icon" svg={footerIcons.logo.icon} />
              <SvgIcon
                className="eldorado-footer__logo-text"
                svg={footerIcons.logo.text}
                label={copy("Eldorado")}
              />
            </div>
            <p className="eldorado-footer__tagline">
              {copy("Join us today to level up your gaming experience!")}
            </p>
            <div className="eldorado-footer__socials" aria-label={copy("Social media links")}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  className="eldorado-footer__social-link"
                  href="#"
                  aria-label={copy(social.name)}
                >
                  <SvgIcon svg={social.svg} />
                </a>
              ))}
            </div>
          </div>

          <nav className="eldorado-footer__links" aria-label={copy("Footer navigation")}>
            <ul className="eldorado-footer__link-column">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className={`eldorado-footer__link${link.active ? " eldorado-footer__link--active" : ""}`}
                    href="#"
                  >
                    {copy(link.label)}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="eldorado-footer__link-column">
              {WARRANTY_LINKS.map((label) => (
                <li key={label}>
                  <a className="eldorado-footer__link" href="#">
                    {copy(label)}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="eldorado-footer__link-column">
              {POLICY_LINKS.map((label) => (
                <li key={label}>
                  <a className="eldorado-footer__link" href="#">
                    {copy(label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="eldorado-footer__copyright">
        <p className="eldorado-footer__copyright-text">
          {copy(
            "© 2024 Eldorado Market. The eldorado.gg website is owned and operated by Eldorado Market, UAB.",
          )}
        </p>
        <div className="eldorado-footer__legal-links">
          {LEGAL_LINKS.map((label) => (
            <a key={label} className="eldorado-footer__legal-link" href="#">
              {copy(label)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

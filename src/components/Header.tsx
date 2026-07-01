import "./Header.css";

import logo from "../assets/header/logo.svg";
import messageIcon from "../assets/header/message.svg";
import moonIcon from "../assets/header/moon.svg";
import notificationIcon from "../assets/header/notification.svg";
import searchIcon from "../assets/header/search.svg";
import signRightIcon from "../assets/header/sign-right.svg";
import sunIcon from "../assets/header/sun.svg";
import supportIcon from "../assets/header/support.svg";
import switchIcon from "../assets/header/switch.svg";
import userAvatar from "../assets/header/user-avatar.png";
import { useTheme } from "../theme/ThemeProvider";

const NAV_ITEMS = ["Currency", "Accounts", "Top Ups", "Items", "Boosting"] as const;

function DropdownItem({ label }: { label: string }) {
  return (
    <button type="button" className="header-dropdown">
      <span className="header-dropdown__label">{label}</span>
      <span className="header-dropdown__chevron" aria-hidden="true">
        <img src={signRightIcon} alt="" className="header-icon" />
      </span>
    </button>
  );
}

function IconButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button type="button" className="header-icon-button" aria-label={label}>
      <img src={icon} alt="" className="header-icon" />
    </button>
  );
}

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-secondary">
        <div className="header-secondary__support">
          <img src={supportIcon} alt="" className="header-secondary__support-icon header-icon" />
          <span>24/7 Live Support</span>
        </div>

        <div className="header-secondary__actions">
          <DropdownItem label="English" />
          <DropdownItem label="CAD ($)" />

          <div className="header-theme-switch" role="group" aria-label="Theme">
            <button
              type="button"
              className={`header-theme-switch__button${theme === "light" ? " header-theme-switch__button--active" : ""}`}
              aria-label="Light mode"
              aria-pressed={theme === "light"}
              onClick={() => setTheme("light")}
            >
              <img src={sunIcon} alt="" />
            </button>
            <button
              type="button"
              className={`header-theme-switch__button${theme === "dark" ? " header-theme-switch__button--active" : ""}`}
              aria-label="Dark mode"
              aria-pressed={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              <img src={moonIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="header-primary">
        <div className="header-primary__menu">
          <a href="/" className="header-logo" aria-label="Eldorado home">
            <img src={logo} alt="Eldorado" />
          </a>

          <nav className="header-nav" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <a key={item} href="#" className="header-nav__link">
                {item}
              </a>
            ))}
          </nav>

          <label className="header-search">
            <img src={searchIcon} alt="" className="header-search__icon header-icon" />
            <input type="search" placeholder="Search Eldorado" aria-label="Search Eldorado" />
          </label>
        </div>

        <div className="header-action-bar">
          <IconButton icon={switchIcon} label="Activity" />
          <IconButton icon={messageIcon} label="Messages" />
          <IconButton icon={notificationIcon} label="Notifications" />
          <button type="button" className="header-avatar" aria-label="User profile">
            <img src={userAvatar} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import avatarImage from "../../assets/card-description/avatar.png";
import badgeIcon from "../../assets/card-description/badge.svg";
import chevronDownIcon from "../../assets/card-description/chevron-down.svg";
import thumbsUpIcon from "../../assets/card-description/thumbs-up.svg";
import "./CardDescription.css";

export type CardDescriptionProps = {
  sellerLabel?: string;
  username?: string;
  avatarSrc?: string;
  feedbackScore?: string;
  reviewCount?: string;
  instructionsTitle?: string;
  instructions?: string[];
  fullInstructions?: string[];
  onReviewsClick?: () => void;
  onToggleInstructions?: (expanded: boolean) => void;
};

const defaultInstructions = [
  "🔔 Why Choose Us? 🔔",
  "⏱ 24/7 Online Services",
  "⚡ Safe & Fast Delivery",
  "----------------------------------------------------",
];

const defaultFullInstructions = [
  "Fortnite V-Bucks Top-Up – 100% Safe 🔥",
  "",
  "✨4500 Vbucks ✨",
  "",
  "Delivered through Xbox Store or Epic Games Store !",
  "",
  "❗ Upon ordering, provide Epic Games information. ❗",
  "",
  "❗ If delivered through Xbox, i'll link my xbox account to your epic, if delivered through Epic Games Store, i'll change region . Once changed, you will not be able to change it back for the next 6 months and you will not be able to purchase anything without me. ❗",
  "",
  "❗ If you ask Epic to change region back, they will refund",
];

export function CardDescription({
  sellerLabel = "Seller",
  username = "TokenHut",
  avatarSrc = avatarImage,
  feedbackScore = "99.7%",
  reviewCount = "4,088 reviews",
  instructionsTitle = "Delivery instructions",
  instructions = defaultInstructions,
  fullInstructions = defaultFullInstructions,
  onReviewsClick,
  onToggleInstructions,
}: CardDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleInstructions = () => {
    const nextExpanded = !isExpanded;
    setIsExpanded(nextExpanded);
    onToggleInstructions?.(nextExpanded);
  };

  const visibleInstructions = isExpanded
    ? [...instructions, ...fullInstructions]
    : instructions;

  return (
    <article className="card-description" data-name="card description">
      <header className="card-description__label">
        <h2 className="card-description__label-text">{sellerLabel}</h2>
      </header>

      <section className="card-description__user-info" aria-label="Seller profile">
        <div className="card-description__user-row">
          <div className="card-description__avatar">
            <img src={avatarSrc} alt="" width={48} height={48} />
          </div>

          <div className="card-description__user-details">
            <div className="card-description__username-row">
              <p className="card-description__username">{username}</p>
              <span className="card-description__badge" aria-hidden="true">
                <img src={badgeIcon} alt="" />
              </span>
            </div>

            <div className="card-description__stats">
              <div className="card-description__feedback">
                <span className="card-description__feedback-icon" aria-hidden="true">
                  <img src={thumbsUpIcon} alt="" />
                </span>
                <p className="card-description__feedback-score">{feedbackScore}</p>
              </div>

              <button
                type="button"
                className="card-description__reviews-link"
                onClick={onReviewsClick}
              >
                {reviewCount}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="card-description__description">
        <div
          className={`card-description__description-inner${
            isExpanded ? " card-description__description-inner--expanded" : ""
          }`}
        >
          <h3 className="card-description__description-title">
            {instructionsTitle}
          </h3>

          <div className="card-description__description-content">
            {visibleInstructions.map((line, index) => (
              <p key={`${index}-${line}`}>
                {line === "" ? "\u00A0" : line}
              </p>
            ))}
          </div>

          <button
            type="button"
            className={`card-description__view-full${
              isExpanded ? " card-description__view-full--expanded" : ""
            }`}
            onClick={handleToggleInstructions}
            aria-expanded={isExpanded}
          >
            <span className="card-description__view-full-text">
              {isExpanded ? "Show less" : "View full instructions"}
            </span>
            <span className="card-description__view-full-icon" aria-hidden="true">
              <img src={chevronDownIcon} alt="" />
            </span>
          </button>
        </div>
      </section>
    </article>
  );
}

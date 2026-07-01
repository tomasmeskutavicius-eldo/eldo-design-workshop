import { useState } from "react";
import "./TopUpsSellersList.css";

const ASSETS = {
  avatar:
    "https://www.figma.com/api/mcp/asset/ce7bb071-b996-462b-9697-692167ed6c37",
  badge:
    "https://www.figma.com/api/mcp/asset/73226aeb-a9bb-4720-b306-756de2b95cf3",
  thumbsUp:
    "https://www.figma.com/api/mcp/asset/2f8563ca-f454-401a-a9d0-0c946a7ef1ce",
  chevronDown:
    "https://www.figma.com/api/mcp/asset/30fdc6b5-437c-4a72-a368-9d5b314c1cec",
  chevronUp:
    "https://www.figma.com/api/mcp/asset/1aa670a6-b74e-40f4-bee3-a57cef8aff05",
  signLeft:
    "https://www.figma.com/api/mcp/asset/fb52c1ec-1899-4e79-a893-5a1cd35291a7",
  signRight:
    "https://www.figma.com/api/mcp/asset/cf453422-f1c0-4b3d-ae0b-8b4d5a7ad4a2",
  chevronDownSmall:
    "https://www.figma.com/api/mcp/asset/e155ffc8-cd61-4090-a62e-8df7d06e595d",
} as const;

const DELIVERY_INSTRUCTIONS = `Welcome to Fast & Cheap & Safe Pokecoins service.
In order to get this service we will need following:
- Account details (Pokemon Trainer Club/Face-book/Google)
(Pokemon Trainer Club is best and fastest option without confirmations)
FAQ
+ How much time it will take?
Fast Delivery. We provide the Fastest possible delivery.
+ Is this service totally secure?
100% Safe and No Ban Risk`;

type Seller = {
  id: string;
  username: string;
  feedbackScore: string;
  reviewCount: string;
  deliveryTime: string;
  originalPrice: string;
  discount: string;
  currentPrice: string;
};

const SELLERS: Seller[] = Array.from({ length: 8 }, (_, index) => ({
  id: `seller-${index + 1}`,
  username: "Banana_Boosters",
  feedbackScore: "99.7%",
  reviewCount: "103,270 reviews",
  deliveryTime: "2 min",
  originalPrice: "$99.99",
  discount: "-62%*",
  currentPrice: index === 3 ? "$58.99*" : "$58.99",
}));

const PAGE_NUMBERS = ["1", "2", "3", "...", "39"];

export function TopUpsSellersList() {
  const [expandedId, setExpandedId] = useState<string | null>("seller-2");
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState("2");

  const toggleInstructions = (sellerId: string) => {
    setExpandedId((current) => (current === sellerId ? null : sellerId));
  };

  return (
    <section className="top-ups-sellers" data-node-id="5005:70384">
      <h2 className="top-ups-sellers__title" data-node-id="5005:70385">
        Other sellers (10)
      </h2>

      <div className="top-ups-sellers__list" data-node-id="5005:70386">
        {SELLERS.map((seller) => {
          const isExpanded = expandedId === seller.id;

          return (
            <article
              key={seller.id}
              className="top-ups-sellers__card"
              data-name="Top Ups Sellers"
            >
              <div
                className={`top-ups-sellers__row${
                  isExpanded ? " top-ups-sellers__row--expanded" : ""
                }`}
                data-name="Top bar"
              >
                <div className="top-ups-sellers__seller">
                  <img
                    className="top-ups-sellers__avatar"
                    src={ASSETS.avatar}
                    alt=""
                    width={48}
                    height={48}
                  />
                  <div className="top-ups-sellers__seller-meta">
                    <div className="top-ups-sellers__username-row">
                      <span className="top-ups-sellers__username">
                        {seller.username}
                      </span>
                      <img
                        className="top-ups-sellers__badge"
                        src={ASSETS.badge}
                        alt="Verified seller"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className="top-ups-sellers__stats">
                      <div className="top-ups-sellers__feedback">
                        <img
                          src={ASSETS.thumbsUp}
                          alt=""
                          width={18}
                          height={18}
                        />
                        <span>{seller.feedbackScore}</span>
                      </div>
                      <button type="button" className="top-ups-sellers__reviews">
                        {seller.reviewCount}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="top-ups-sellers__delivery">
                  <span className="top-ups-sellers__label">Delivery time</span>
                  <span className="top-ups-sellers__value">
                    {seller.deliveryTime}
                  </span>
                </div>

                <div className="top-ups-sellers__pricing">
                  <span className="top-ups-sellers__original-price">
                    {seller.originalPrice}
                  </span>
                  <div className="top-ups-sellers__price-row">
                    <span className="top-ups-sellers__discount-chip">
                      {seller.discount}
                    </span>
                    <span className="top-ups-sellers__current-price">
                      {seller.currentPrice}
                    </span>
                  </div>
                </div>

                <button type="button" className="top-ups-sellers__buy-button">
                  Buy now
                </button>

                <button
                  type="button"
                  className="top-ups-sellers__instructions-toggle"
                  onClick={() => toggleInstructions(seller.id)}
                  aria-expanded={isExpanded}
                >
                  <span>Delivery instructions</span>
                  <img
                    src={isExpanded ? ASSETS.chevronUp : ASSETS.chevronDown}
                    alt=""
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {isExpanded && (
                <div className="top-ups-sellers__instructions-body">
                  <h3 className="top-ups-sellers__instructions-title">
                    Delivery instructions
                  </h3>
                  <p className="top-ups-sellers__instructions-text">
                    {DELIVERY_INSTRUCTIONS}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <nav
        className="top-ups-sellers__pagination"
        aria-label="Sellers pagination"
        data-node-id="5005:70387"
      >
        <div className="top-ups-sellers__pages">
          <button
            type="button"
            className="top-ups-sellers__page-button top-ups-sellers__page-button--icon"
            aria-label="Previous page"
          >
            <img src={ASSETS.signLeft} alt="" width={24} height={24} />
          </button>

          {PAGE_NUMBERS.map((page) => (
            <button
              key={page}
              type="button"
              className={`top-ups-sellers__page-button${
                page === String(currentPage)
                  ? " top-ups-sellers__page-button--active"
                  : ""
              }`}
              onClick={() => {
                if (page !== "...") {
                  setCurrentPage(Number(page));
                }
              }}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="top-ups-sellers__page-button top-ups-sellers__page-button--icon"
            aria-label="Next page"
          >
            <img src={ASSETS.signRight} alt="" width={24} height={24} />
          </button>
        </div>

        <label className="top-ups-sellers__go-to-page">
          <span>Go to page:</span>
          <span className="top-ups-sellers__page-select">
            <select
              value={goToPage}
              onChange={(event) => setGoToPage(event.target.value)}
              aria-label="Go to page"
            >
              {Array.from({ length: 39 }, (_, index) => {
                const page = String(index + 1);
                return (
                  <option key={page} value={page}>
                    {page}
                  </option>
                );
              })}
            </select>
            <img src={ASSETS.chevronDownSmall} alt="" width={24} height={24} />
          </span>
        </label>
      </nav>
    </section>
  );
}

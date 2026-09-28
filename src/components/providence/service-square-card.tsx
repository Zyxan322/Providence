import { ArrowRight, Check, Plus, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { ServiceCard } from "@/lib/providence-data";

export function ServiceSquareCard({ card }: { card: ServiceCard }) {
  const { addService, isInCart, openCart } = useCart();
  const inCart = isInCart(card.id);

  const handleCartToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addService(card);
    } else {
      openCart();
    }
  };

  return (
    <article className="service-square-card group">
      <div className="service-square-media">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="service-square-img"
          width={600}
          height={600}
        />
        <div className="service-square-overlay" />
        <div className="service-square-glow" />
      </div>

      <div className="service-square-top">
        <span className="service-square-number">{card.number}</span>
        <span className="service-square-tag">{card.category}</span>
      </div>

      <div className="service-square-body">
        <h3 className="service-square-title">{card.title}</h3>
        <p className="service-square-desc">{card.description}</p>
      </div>

      <div className="service-square-footer">
        <Button
          variant={inCart ? "secondary" : "outline"}
          size="sm"
          onClick={handleCartToggle}
          className={`service-cart-btn ${inCart ? "is-in-cart" : ""}`}
          aria-label={inCart ? `${card.title} added to cart` : `Add ${card.title} to cart`}
        >
          {inCart ? (
            <>
              <Check size={13} className="text-emerald-400 mr-1.5" /> Added
            </>
          ) : (
            <>
              <Plus size={13} className="mr-1.5 text-signal" /> Add to Cart
            </>
          )}
        </Button>

        <Link
          to="/services"
          className="service-square-link"
          aria-label={`Learn more about ${card.title}`}
        >
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ShoppingBag, Trash2, X, ShieldCheck, Sparkles, BookOpen, Layers, Server, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    clearCart,
    subtotal,
    discount,
    total,
    openCheckout,
    totalCount,
    courseCount,
    serviceCount,
  } = useCart();

  const serviceItems = items.filter((i) => i.type === "service");
  const courseItems = items.filter((i) => i.type === "course");

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-backdrop"
            onClick={closeCart}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.aside
            className="cart-drawer"
            role="dialog"
            aria-label="Your Shopping Cart"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cart-header">
              <div className="cart-title-wrap">
                <ShoppingBag size={18} className="text-signal" />
                <h2>Providence Cart</h2>
                <span className="cart-items-badge">
                  {totalCount} {totalCount === 1 ? "item" : "items"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-[0.65rem] text-white/40 hover:text-red-400 px-2 py-1 rounded transition-colors"
                    title="Clear cart"
                  >
                    Clear all
                  </button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="cart-close-btn"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty-state">
                <div className="cart-empty-icon">
                  <ShoppingBag size={44} strokeWidth={1.2} />
                </div>
                <h3>Your cart is empty</h3>
                <p>Explore Providence services, enterprise solutions, and frontier technology courses.</p>
                <Button variant="premium" onClick={closeCart} className="mt-4 text-xs font-semibold">
                  <BookOpen size={14} className="mr-1.5" /> Explore Portfolio
                </Button>
              </div>
            ) : (
              <>
                <div className="cart-items-list space-y-4">
                  {/* Service Items Section */}
                  {serviceItems.length > 0 && (
                    <div className="cart-group">
                      <div className="flex items-center gap-1.5 text-[0.68rem] font-bold tracking-widest text-signal uppercase mb-2 px-1">
                        <Server size={12} />
                        <span>Services & Solutions ({serviceItems.length})</span>
                      </div>
                      <div className="space-y-2">
                        {serviceItems.map((item) => (
                          <div key={item.id} className="cart-item">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="cart-item-image"
                              width={72}
                              height={48}
                            />
                            <div className="cart-item-info">
                              <span className="cart-item-category text-signal">SERVICE • {item.category}</span>
                              <h4 className="cart-item-title">{item.title}</h4>
                              <div className="cart-item-bottom">
                                <span className="cart-item-custom-quote">Custom Scope / Quote</span>
                              </div>
                            </div>
                            <button
                              className="cart-remove-btn"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.title}`}
                              title="Remove item"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Course Items Section */}
                  {courseItems.length > 0 && (
                    <div className="cart-group">
                      <div className="flex items-center gap-1.5 text-[0.68rem] font-bold tracking-widest text-emerald-400 uppercase mb-2 px-1">
                        <BookOpen size={12} />
                        <span>Education Courses ({courseItems.length})</span>
                      </div>
                      <div className="space-y-2">
                        {courseItems.map((item) => (
                          <div key={item.id} className="cart-item">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="cart-item-image"
                              width={72}
                              height={48}
                            />
                            <div className="cart-item-info">
                              <span className="cart-item-category text-emerald-400">COURSE • {item.category}</span>
                              <h4 className="cart-item-title">{item.title}</h4>
                              {item.level && (
                                <div className="cart-item-meta">
                                  <span className="cart-item-level">{item.level}</span>
                                  {item.duration && <span className="cart-item-duration">• {item.duration}</span>}
                                </div>
                              )}
                              <div className="cart-item-bottom">
                                <span className="cart-item-price">${item.price}</span>
                                {item.originalPrice && (
                                  <span className="cart-item-orig-price">${item.originalPrice}</span>
                                )}
                              </div>
                            </div>
                            <button
                              className="cart-remove-btn"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.title}`}
                              title="Remove item"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="cart-footer">
                  {discount > 0 && (
                    <div className="cart-promo-banner">
                      <Sparkles size={14} />
                      <span>Multi-course bundle savings applied: -15%</span>
                    </div>
                  )}

                  <div className="cart-summary-rows">
                    {courseCount > 0 && (
                      <div className="cart-summary-row">
                        <span>Courses Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="cart-summary-row discount">
                        <span>Bundle Savings</span>
                        <span>-${discount}</span>
                      </div>
                    )}
                    {serviceCount > 0 && (
                      <div className="cart-summary-row">
                        <span>Services Scope</span>
                        <span className="text-signal text-[0.75rem]">Quote Upon Inquiry</span>
                      </div>
                    )}
                    <div className="cart-summary-row total">
                      <span>Total Due Today</span>
                      <span>{total > 0 ? `$${total}` : "Free Consultation Inquiry"}</span>
                    </div>
                  </div>

                  <Button
                    variant="premium"
                    size="xl"
                    className="cart-checkout-btn text-xs font-bold uppercase tracking-wider"
                    onClick={openCheckout}
                  >
                    Proceed to Checkout <ArrowRight size={16} />
                  </Button>

                  <div className="cart-guarantee">
                    <ShieldCheck size={14} />
                    <span>Instant access • Dedicated engineering consultation</span>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, CheckCircle2, CreditCard, Lock, ArrowRight, Loader2, Sparkles, Copy, Check, Server, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    total,
    subtotal,
    discount,
    clearCart,
    openCart,
    serviceCount,
    courseCount,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "crypto">("card");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [licenseKey, setLicenseKey] = useState("");
  const [copied, setCopied] = useState(false);

  if (!isCheckoutOpen) return null;

  const hasOnlyServices = courseCount === 0 && serviceCount > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const randomKey = "PRVD-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-PASS";
      setLicenseKey(randomKey);
      clearCart();
    }, 1200);
  };

  const handleCopy = () => {
    if (!licenseKey) return;
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDone = () => {
    setIsSuccess(false);
    setIsProcessing(false);
    closeCheckout();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={isProcessing ? undefined : closeCheckout}
          aria-hidden="true"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0d0d12] border border-white/15 rounded-2xl shadow-2xl p-6 md:p-8 text-white z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-dialog-title"
        >
          {/* Close button */}
          {!isProcessing && (
            <button
              onClick={closeCheckout}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
              aria-label="Close checkout"
            >
              <X size={20} />
            </button>
          )}

          {isSuccess ? (
            <div className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400"
              >
                <CheckCircle2 size={36} />
              </motion.div>

              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
                {hasOnlyServices ? "Inquiry Confirmed" : "Order Activated"}
              </span>

              <h2 id="checkout-dialog-title" className="text-2xl font-bold font-display text-white mb-2">
                Welcome to Providence
              </h2>
              <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
                Your request has been registered in our intelligence network. Confirmation and next steps have been dispatched to <strong className="text-white">{email || "your email"}</strong>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/50 font-medium">Your Providence Reference Key:</span>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="font-mono text-sm tracking-wider bg-black/60 px-3 py-2 rounded-lg border border-white/10 text-signal font-bold text-center select-all">
                  {licenseKey}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="premium" size="lg" onClick={handleDone}>
                  Return to Ecosystem <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-signal/15 border border-signal/30 flex items-center justify-center text-signal">
                  <Lock size={18} />
                </div>
                <div>
                  <h2 id="checkout-dialog-title" className="text-xl font-bold font-display text-white">
                    {hasOnlyServices ? "Service Engagement Inquiry" : "Secure Checkout & Enrollment"}
                  </h2>
                  <p className="text-xs text-white/50">
                    {hasOnlyServices ? "Dedicated technical consultation & architectural scoping" : "Instant lifetime access & accredited certification"}
                  </p>
                </div>
              </div>

              {/* Order summary mini-box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center text-xs text-white/60 mb-2">
                  <span>Selected Items ({items.length})</span>
                  <button
                    type="button"
                    onClick={() => {
                      closeCheckout();
                      openCart();
                    }}
                    className="text-signal hover:underline"
                  >
                    Edit Cart
                  </button>
                </div>

                <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs py-1 border-b border-white/5 items-center">
                      <div className="flex items-center gap-2 truncate mr-2">
                        {item.type === "service" ? (
                          <Server size={12} className="text-signal shrink-0" />
                        ) : (
                          <BookOpen size={12} className="text-emerald-400 shrink-0" />
                        )}
                        <span className="text-white/90 truncate">{item.title}</span>
                      </div>
                      <span className="font-semibold text-white shrink-0">
                        {item.isCustomQuote ? "Custom Quote" : `$${item.price}`}
                      </span>
                    </div>
                  ))}
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-xs text-emerald-400 pt-2 border-t border-white/10 mt-2">
                    <span>Bundle Discount (15%)</span>
                    <span>-${discount}</span>
                  </div>
                )}

                <div className="flex justify-between items-baseline pt-2 mt-2 border-t border-white/10">
                  <span className="text-sm font-semibold text-white">
                    {total > 0 ? "Total Due Today" : "Estimated Upfront Charge"}
                  </span>
                  <span className="text-xl font-bold font-display text-white">
                    {total > 0 ? `$${total}` : "$0 (Quote Request)"}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-signal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-signal"
                    />
                  </div>
                </div>

                {serviceCount > 0 && (
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-1">Company / Organization (Optional)</label>
                      <input
                        type="text"
                        placeholder="Company or Studio Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-signal"
                      />
                    </div>
                  </div>
                )}

                {/* If courses exist, show payment selection */}
                {total > 0 ? (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-white/70 mb-2">Payment Option</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all ${
                            paymentMethod === "card"
                              ? "bg-signal/20 border-signal text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                          }`}
                        >
                          <CreditCard size={15} /> Card / Apple Pay
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("crypto")}
                          className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all ${
                            paymentMethod === "crypto"
                              ? "bg-signal/20 border-signal text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                          }`}
                        >
                          <Sparkles size={15} /> Crypto (USDC / ETH)
                        </button>
                      </div>
                    </div>

                    {paymentMethod === "card" ? (
                      <div className="space-y-3 bg-white/[0.02] border border-white/10 rounded-xl p-3">
                        <div>
                          <label className="block text-[0.7rem] font-semibold text-white/60 mb-1">Card Number</label>
                          <input
                            type="text"
                            required
                            maxLength={19}
                            placeholder="4242 •••• •••• 4242"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 font-mono focus:outline-none focus:border-signal"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[0.7rem] font-semibold text-white/60 mb-1">Expires (MM/YY)</label>
                            <input
                              type="text"
                              required
                              maxLength={5}
                              placeholder="12/28"
                              value={expiry}
                              onChange={(e) => setExpiry(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 font-mono focus:outline-none focus:border-signal"
                            />
                          </div>
                          <div>
                            <label className="block text-[0.7rem] font-semibold text-white/60 mb-1">CVC</label>
                            <input
                              type="password"
                              required
                              maxLength={4}
                              placeholder="•••"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 font-mono focus:outline-none focus:border-signal"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                        <p className="text-xs text-white/80 mb-1.5">Web3 Direct Settlement</p>
                        <p className="text-[0.75rem] text-white/50 mb-2">
                          Instant smart contract checkout with zero slippage.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-signal">
                          <span>1 USDC = $1.00 USD</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3">
                    <label className="block text-xs font-semibold text-white/70 mb-1">Project Scope / Requirements Note (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Brief overview of technical requirements or timeline..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-signal resize-none"
                    />
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="premium"
                    size="xl"
                    disabled={isProcessing || items.length === 0}
                    className="w-full justify-center text-sm font-semibold"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={16} className="animate-spin mr-2" />
                        Processing Request...
                      </>
                    ) : (
                      <>
                        {total > 0
                          ? `Authorize $${total} & Complete Order`
                          : "Submit Scope for Technical Review"} <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[0.65rem] text-white/40 pt-1">
                  <ShieldCheck size={14} />
                  <span>256-Bit Encrypted Communication • Direct Technical Scoping</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

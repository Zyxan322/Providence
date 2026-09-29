import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Eye, ShoppingBag, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { ServiceCard } from "@/lib/providence-data";

const getServiceHighlights = (service: ServiceCard) => {
  const base = [
    `${service.category} strategy and planning`,
    `Delivery and implementation for ${service.title.toLowerCase()}`,
    "Optimization, refinement and ongoing support",
  ];

  if (service.id.includes("ai")) {
    return [
      "AI strategy and opportunity mapping",
      "Model, workflow and system implementation",
      "Monitoring, optimization and continuous improvement",
    ];
  }

  if (service.id.includes("3d") || service.id.includes("game")) {
    return [
      "Spatial design and interactive system planning",
      "Immersive build and experience engineering",
      "Performance tuning and launch-ready polish",
    ];
  }

  if (service.id.includes("software") || service.id.includes("research") || service.id.includes("education")) {
    return [
      "Discovery, scope and architecture review",
      "Build, deployment and system integration",
      "Training, documentation and operational support",
    ];
  }

  return base;
};

export function ServiceDetailModal() {
  const { selectedService, closeServiceDetail, addService, isInCart, openCart } = useCart();

  if (!selectedService) return null;

  const inCart = isInCart(selectedService.id);
  const highlights = getServiceHighlights(selectedService);

  const handleAction = () => {
    if (!inCart) {
      addService(selectedService);
    } else {
      closeServiceDetail();
      openCart();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeServiceDetail}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#0d0d12] border border-white/15 rounded-2xl shadow-2xl text-white z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-dialog-title"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/40 to-transparent" />

            <button
              onClick={closeServiceDetail}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 transition-all hover:scale-105"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-signal/20 border border-signal/40 text-[0.65rem] font-bold text-signal tracking-widest uppercase">
                  {selectedService.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[0.65rem] font-semibold text-white/80 uppercase">
                  Service
                </span>
              </div>
              <h2 id="service-dialog-title" className="text-xl md:text-2xl font-bold font-display text-white line-clamp-2">
                {selectedService.title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-2 mb-2 text-signal">
                <Eye size={14} />
                <span className="text-[0.7rem] font-bold uppercase tracking-wider">Service overview</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-signal" /> Included work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-white/75 bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
                    <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 sticky bottom-0 bg-[#0d0d12] py-2">
              <div>
                <span className="text-[0.65rem] text-white/50 block">Engagement model</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold font-display text-white">Custom quote</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={inCart ? "secondary" : "premium"}
                  size="lg"
                  onClick={handleAction}
                  className="px-6 font-semibold"
                >
                  {inCart ? (
                    <>
                      <Check size={16} className="mr-2 text-emerald-400" /> View in Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} className="mr-2" /> Add to Cart <ArrowRight size={16} className="ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { X, Star, Clock, BookOpen, Check, ShoppingBag, ArrowRight, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export function CourseDetailModal() {
  const { selectedCourse, closeCourseDetail, addToCart, isInCart, openCart } = useCart();

  if (!selectedCourse) return null;

  const inCart = isInCart(selectedCourse.id);
  const discountPercent = selectedCourse.originalPrice
    ? Math.round(((selectedCourse.originalPrice - selectedCourse.price) / selectedCourse.originalPrice) * 100)
    : 0;

  const handleAction = () => {
    if (!inCart) {
      addToCart(selectedCourse);
    } else {
      closeCourseDetail();
      openCart();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeCourseDetail}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#0d0d12] border border-white/15 rounded-2xl shadow-2xl text-white z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-dialog-title"
        >
          {/* Header Image Cover */}
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/40 to-transparent" />
            
            <button
              onClick={closeCourseDetail}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 transition-all hover:scale-105"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-signal/20 border border-signal/40 text-[0.65rem] font-bold text-signal tracking-widest uppercase">
                  {selectedCourse.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[0.65rem] font-semibold text-white/80 uppercase">
                  {selectedCourse.level}
                </span>
                {discountPercent > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[0.65rem] font-bold uppercase">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
              <h2 id="course-dialog-title" className="text-xl md:text-2xl font-bold font-display text-white line-clamp-2">
                {selectedCourse.title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Meta stats bar */}
            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <div>
                <span className="text-[0.65rem] text-white/50 block mb-0.5 uppercase tracking-wider">Duration</span>
                <div className="flex items-center justify-center gap-1 text-xs font-semibold text-white">
                  <Clock size={13} className="text-signal" />
                  {selectedCourse.duration}
                </div>
              </div>
              <div>
                <span className="text-[0.65rem] text-white/50 block mb-0.5 uppercase tracking-wider">Curriculum</span>
                <div className="flex items-center justify-center gap-1 text-xs font-semibold text-white">
                  <BookOpen size={13} className="text-signal" />
                  {selectedCourse.lessonsCount} Lessons
                </div>
              </div>
              <div>
                <span className="text-[0.65rem] text-white/50 block mb-0.5 uppercase tracking-wider">Rating</span>
                <div className="flex items-center justify-center gap-1 text-xs font-semibold text-white">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  {selectedCourse.rating.toFixed(1)} ({selectedCourse.studentsCount})
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Overview</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* What you'll learn */}
            {selectedCourse.whatYouLearn && selectedCourse.whatYouLearn.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-signal" /> Key Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCourse.whatYouLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/75 bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus / Modules */}
            {selectedCourse.curriculum && selectedCourse.curriculum.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-1.5">
                  <Layers size={14} className="text-signal" /> Curriculum Breakdown
                </h3>
                <div className="space-y-2">
                  {selectedCourse.curriculum.map((mod, idx) => (
                    <div key={idx} className="border border-white/10 rounded-xl bg-white/[0.02] p-3">
                      <h4 className="text-xs font-semibold text-white mb-2">{mod.module}</h4>
                      <ul className="space-y-1 pl-4 list-disc list-outside text-[0.72rem] text-white/60">
                        {mod.lessons.map((lesson, lIdx) => (
                          <li key={lIdx}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom action bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 sticky bottom-0 bg-[#0d0d12] py-2">
              <div>
                <span className="text-[0.65rem] text-white/50 block">Full Tuition Access</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-display text-white">${selectedCourse.price}</span>
                  {selectedCourse.originalPrice && (
                    <span className="text-sm text-white/40 line-through">${selectedCourse.originalPrice}</span>
                  )}
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
                      <ShoppingBag size={16} className="mr-2" /> Add to Cart & Enroll <ArrowRight size={16} className="ml-1" />
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

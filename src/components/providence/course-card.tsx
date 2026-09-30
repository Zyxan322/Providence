import { Check, ShoppingBag, Eye, Star, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Course } from "@/lib/courses-data";

export function CourseCard({ course }: { course: Course }) {
  const { addToCart, isInCart, openCourseDetail } = useCart();
  const inCart = isInCart(course.id);

  const discountPercent = course.originalPrice
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-[#111] border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
      <div className="relative h-[220px] w-full overflow-hidden cursor-pointer" onClick={() => openCourseDetail(course)}>
        <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[0.65rem] font-bold text-white tracking-widest border border-white/20 uppercase">
          {course.category}
        </span>
        {discountPercent > 0 && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-signal text-primary-foreground text-[0.65rem] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(142,59,255,0.5)]">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 relative z-10 bg-[#111]">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-signal font-bold tracking-widest uppercase">{course.level}</span>
          <div className="flex items-center gap-1 text-white/80">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            <span className="font-medium">{course.rating.toFixed(1)}</span>
            <span className="text-white/40">({course.studentsCount})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 font-display cursor-pointer hover:text-signal transition-colors line-clamp-2" onClick={() => openCourseDetail(course)}>
          {course.title}
        </h3>

        <p className="text-sm text-white/60 mb-5 flex-1 line-clamp-3 leading-relaxed">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-6 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={13} /> {course.lessonsCount} Lessons
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-white">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-white/40 line-through pb-[2px]">${course.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent text-white border-white/20 hover:bg-white/10"
              onClick={() => openCourseDetail(course)}
              aria-label={`View details for ${course.title}`}
            >
              <Eye size={14} className="mr-1.5" /> View
            </Button>

            <Button
              variant={inCart ? "secondary" : "default"}
              size="sm"
              className={inCart ? "bg-white/10 text-white cursor-default" : "bg-white text-black hover:bg-white/90 font-semibold"}
              onClick={() => addToCart(course)}
              disabled={inCart}
              aria-label={inCart ? `${course.title} is already in cart` : `Add ${course.title} to cart`}
            >
              {inCart ? (
                <>
                  <Check size={14} className="mr-1.5" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag size={14} className="mr-1.5" /> Add
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

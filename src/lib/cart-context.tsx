import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Course } from "./courses-data";
import type { ServiceCard } from "./providence-data";

export interface CartItem {
  id: string;
  type: "course" | "service";
  title: string;
  category: string;
  image: string;
  price: number; // 0 for custom quote services
  originalPrice?: number;
  level?: string;
  duration?: string;
  isCustomQuote?: boolean;
  quantity: number;
  courseRef?: Course;
  serviceRef?: ServiceCard;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Course | ServiceCard) => void;
  addCourse: (course: Course) => void;
  addService: (service: ServiceCard) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  totalCount: number;
  courseCount: number;
  serviceCount: number;
  subtotal: number;
  discount: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  selectedCourse: Course | null;
  openCourseDetail: (course: Course) => void;
  closeCourseDetail: () => void;
  selectedService: ServiceCard | null;
  openServiceDetail: (service: ServiceCard) => void;
  closeServiceDetail: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE_KEY = "providence_cart_items_v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    }
    setHydrated(true);
  }, []);

  // Persist cart changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage", e);
    }
  }, [items, hydrated]);

  const addCourse = (course: Course) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === course.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: course.id,
          type: "course",
          title: course.title,
          category: course.category,
          image: course.image,
          price: course.price,
          originalPrice: course.originalPrice,
          level: course.level,
          duration: course.duration,
          isCustomQuote: false,
          quantity: 1,
          courseRef: course,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const addService = (service: ServiceCard) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === service.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: service.id,
          type: "service",
          title: service.title,
          category: service.category || "Service",
          image: service.image,
          price: 0,
          isCustomQuote: true,
          quantity: 1,
          serviceRef: service,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const addToCart = (item: Course | ServiceCard) => {
    if ("lessonsCount" in item) {
      addCourse(item as Course);
    } else {
      addService(item as ServiceCard);
    }
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const isInCart = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const totalCount = items.length;
  const courseCount = items.filter((i) => i.type === "course").length;
  const serviceCount = items.filter((i) => i.type === "service").length;

  const subtotal = items
    .filter((i) => i.type === "course")
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Progressive bundle discount for 2+ courses
  const discount = courseCount >= 2 ? Math.round(subtotal * 0.15) : 0;
  const total = Math.max(0, subtotal - discount);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  const openCourseDetail = (course: Course) => setSelectedCourse(course);
  const closeCourseDetail = () => setSelectedCourse(null);
  const openServiceDetail = (service: ServiceCard) => setSelectedService(service);
  const closeServiceDetail = () => setSelectedService(null);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        addCourse,
        addService,
        removeFromCart,
        clearCart,
        isInCart,
        totalCount,
        courseCount,
        serviceCount,
        subtotal,
        discount,
        total,
        isCartOpen,
        openCart,
        closeCart,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        selectedCourse,
        openCourseDetail,
        closeCourseDetail,
        selectedService,
        openServiceDetail,
        closeServiceDetail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

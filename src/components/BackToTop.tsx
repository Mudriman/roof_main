import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Импортируем иконку из lucide-react

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleBackToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-red-700`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" /> {/* Используем иконку ArrowUp из lucide-react */}
    </button>
  );
};

export default BackToTop;
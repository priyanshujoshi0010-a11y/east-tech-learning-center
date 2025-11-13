import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "PGDCA & DCA Programs",
    description:
      "Professional diploma courses in computer applications with university recognition",
  },
  {
    image: heroSlide2,
    title: "Web Designing Mastery",
    description:
      "Learn modern web technologies and create stunning websites from scratch",
  },
  {
    image: heroSlide3,
    title: "Tally & Accounting",
    description: "Master accounting software and boost your career in finance",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full">
      {/* 🌿 Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white text-center py-3 flex justify-center items-center space-x-3 shadow-md animate-bannerFade relative overflow-hidden">
        <div className="animate-bellBounce">
          <BellRing className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <span className="font-semibold text-lg md:text-xl tracking-wide uppercase glow-text">
          🎓 Admission Open for Session 2025–26 🎉
        </span>

        {/* Subtle moving shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
      </div>

      {/* 🎥 Hero Slider Section */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white fadeIn">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
                    {slide.description}
                  </p>
                  <Link to="/courses">
                    <Button
                      size="lg"
                      className="bg-white text-green-700 hover:bg-green-100 font-semibold shadow-md transition-all duration-300"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-green-800 p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-green-800 p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

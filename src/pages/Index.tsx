
import { useState } from "react";
import Header from "@/components/presentation/Header";
import SlideNavigation from "@/components/presentation/SlideNavigation";
import RoadmapSlide from "@/components/presentation/slides/RoadmapSlide";
import HypothesisSlide from "@/components/presentation/slides/HypothesisSlide";
import MarketSlide from "@/components/presentation/slides/MarketSlide";

const SLIDES_COUNT = 3;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES_COUNT - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES_COUNT - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 mx-4 relative">
          {/* Хедер дашборда */}
          <Header currentSlide={currentSlide} slideCount={SLIDES_COUNT} />
          
          <div className="mt-14">
            {/* Слайд 1 - Дорожная карта */}
            <div className={`${currentSlide === 0 ? 'block' : 'hidden'}`}>
              <RoadmapSlide />
            </div>
            
            {/* Слайд 2 - Гипотеза */}
            <div className={`${currentSlide === 1 ? 'block' : 'hidden'}`}>
              <HypothesisSlide />
            </div>
            
            {/* Слайд 3 - Рынок */}
            <div className={`${currentSlide === 2 ? 'block' : 'hidden'}`}>
              <MarketSlide />
            </div>
          </div>
          
          {/* Навигация по слайдам */}
          <SlideNavigation 
            currentSlide={currentSlide}
            slideCount={SLIDES_COUNT}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            onSlideChange={setCurrentSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

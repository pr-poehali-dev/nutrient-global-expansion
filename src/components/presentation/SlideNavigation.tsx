
import { Button } from "@/components/ui/button";
import SlideIndicators from "./SlideIndicators";

interface SlideNavigationProps {
  currentSlide: number;
  slideCount: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSlideChange: (index: number) => void;
}

const SlideNavigation = ({ 
  currentSlide, 
  slideCount, 
  onPrevSlide, 
  onNextSlide, 
  onSlideChange 
}: SlideNavigationProps) => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <SlideIndicators 
        currentSlide={currentSlide} 
        slideCount={slideCount} 
        onSlideChange={onSlideChange} 
      />
      
      <div className="flex gap-3">
        <Button 
          onClick={onPrevSlide} 
          variant="outline" 
          className="rounded-full text-sm border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          Назад
        </Button>
        <Button 
          onClick={onNextSlide} 
          className="rounded-full text-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation;

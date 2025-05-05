
interface SlideIndicatorsProps {
  currentSlide: number;
  slideCount: number;
  onSlideChange: (index: number) => void;
}

const SlideIndicators = ({ currentSlide, slideCount, onSlideChange }: SlideIndicatorsProps) => {
  return (
    <div className="flex space-x-2">
      {[...Array(slideCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-8 h-2 rounded-full transition-colors ${
            currentSlide === index ? 'bg-pink-500' : 'bg-gray-200'
          }`}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;

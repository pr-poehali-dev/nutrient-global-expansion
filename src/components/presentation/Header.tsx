
interface HeaderProps {
  currentSlide: number;
  slideCount: number;
}

const Header = ({ currentSlide, slideCount }: HeaderProps) => {
  return (
    <>
      <div className="absolute top-4 left-6 flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
          R&D
        </div>
        <p className="text-gray-600 font-medium">BioTech • Презентация</p>
      </div>
      
      <div className="absolute top-4 right-6 flex items-center gap-3">
        <div className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full">
          Слайд {currentSlide + 1}/{slideCount}
        </div>
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      </div>
    </>
  );
};

export default Header;

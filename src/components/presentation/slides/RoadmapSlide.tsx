
const RoadmapSlide = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Дорожная карта развития <span className="text-purple-600">2025-2029</span>
      </h2>
      
      {/* Визуализация дорожной карты как график */}
      <RoadmapTimeline />
      
      {/* Карточки с информацией */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <RoadmapCard year="25" color="blue" title="Масштабирование производства">
          Доработка линейки продукции
        </RoadmapCard>
        
        <RoadmapCard year="26" color="purple" title="Расширение продуктовой линейки">
          Разработка планов реабилитации нутриентов
        </RoadmapCard>
        
        <RoadmapCard year="27" color="pink" title="Глобализация">
          Создание новых рабочих мест в странах БРИКС
        </RoadmapCard>
        
        <RoadmapCard year="28" color="orange" title="Укрепление позиций на рынке" />
        
        <RoadmapCard year="29" color="cyan" title="Расширение сети дистрибьюторов" className="md:col-span-2">
          Выход на рынки США и Канады
        </RoadmapCard>
      </div>
    </>
  );
};

interface RoadmapCardProps {
  year: string;
  color: "blue" | "purple" | "pink" | "orange" | "cyan";
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const RoadmapCard = ({ year, color, title, children, className = "" }: RoadmapCardProps) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600",
    cyan: "bg-cyan-100 text-cyan-600"
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full ${colorMap[color]} flex items-center justify-center font-bold`}>
          {year}
        </div>
        <h3 className="font-bold text-gray-700">{title}</h3>
      </div>
      {children && <p className="text-gray-500 text-sm pl-12">{children}</p>}
    </div>
  );
};

const RoadmapTimeline = () => {
  return (
    <div className="mb-8 overflow-hidden">
      <div className="h-36 relative mb-3 rounded-lg border border-gray-100">
        <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 rounded-lg"></div>
        
        <TimelinePoint position={5} bottom={4} year="25" color="blue" />
        <TimelinePoint position={24} bottom={8} year="26" color="purple" />
        <TimelinePoint position={43} bottom={12} year="27" color="pink" />
        <TimelinePoint position={62} bottom={16} year="28" color="orange" />
        <TimelinePoint position={81} bottom={20} year="29" color="cyan" />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 px-4">
        <div>2025</div>
        <div>2026</div>
        <div>2027</div>
        <div>2028</div>
        <div>2029</div>
      </div>
    </div>
  );
};

interface TimelinePointProps {
  position: number;
  bottom: number;
  year: string;
  color: "blue" | "purple" | "pink" | "orange" | "cyan";
}

const TimelinePoint = ({ position, bottom, year, color }: TimelinePointProps) => {
  const colorMap = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500"
  };
  
  const lineColorMap = {
    blue: "bg-blue-300",
    purple: "bg-purple-300",
    pink: "bg-pink-300",
    orange: "bg-orange-300",
    cyan: "bg-cyan-300"
  };

  return (
    <div className={`absolute left-[${position}%] bottom-${bottom} w-[15%] h-20 flex flex-col items-center`}>
      <div className={`w-10 h-10 rounded-full ${colorMap[color]} flex items-center justify-center text-white font-bold text-xs`}>
        {year}
      </div>
      <div className={`mt-2 h-${bottom === 20 ? '0' : (20 - bottom)} w-1 ${lineColorMap[color]}`}></div>
    </div>
  );
};

export default RoadmapSlide;

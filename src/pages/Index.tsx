
import { useRef } from "react";

const Index = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const hypothesisRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Фиксированный хедер */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            R&D
          </div>
          <p className="text-gray-600 font-medium">BioTech • Презентация</p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => scrollToSection(roadmapRef)}
            className="px-4 py-1 text-sm rounded-full hover:bg-gray-100"
          >
            Дорожная карта
          </button>
          <button 
            onClick={() => scrollToSection(hypothesisRef)}
            className="px-4 py-1 text-sm rounded-full hover:bg-gray-100"
          >
            Гипотеза
          </button>
          <button 
            onClick={() => scrollToSection(marketRef)}
            className="px-4 py-1 text-sm rounded-full hover:bg-gray-100"
          >
            Рынок
          </button>
        </div>
      </div>
      
      <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto space-y-32">
        {/* Слайд 1 - Дорожная карта */}
        <section ref={roadmapRef} className="scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Дорожная карта развития <span className="text-purple-600">2025-2029</span>
            </h2>
            
            {/* Визуализация дорожной карты как график */}
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
            
            {/* Карточки с информацией */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </section>
        
        {/* Слайд 2 - Гипотеза */}
        <section ref={hypothesisRef} className="scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="text-green-500">ГИПОТЕЗА ПОДТВЕРЖДЕНА:</span> <br/>
              <span className="text-gray-800 text-xl mt-1 block">РЫНОК ГОТОВ ПЛАТИТЬ</span>
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Круговая диаграмма */}
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden">
                    <div className="h-full w-full" style={{
                      background: "conic-gradient(#10b981 0deg, #10b981 180deg, #ec4899 180deg, #ec4899 270deg, #8b5cf6 270deg, #8b5cf6 360deg)"
                    }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-800">100%</div>
                  </div>
                </div>
              </div>
              
              {/* Информационные карточки */}
              <div className="flex-1 min-w-[280px]">
                <div className="space-y-3">
                  <InfoCard color="green">
                    Мы глубоко понимаем свой продукт, рынок и целевую аудиторию
                  </InfoCard>
                  <InfoCard color="green">
                    Подтвержденный product-market fit
                  </InfoCard>
                  <InfoCard color="pink">
                    Soft-коммиты от лабораторий на закупку реагентов
                  </InfoCard>
                  <InfoCard color="purple">
                    Презентация по разработке уникального нутриента для онкологии, стоимость одной рецептуры 20 млн рублей
                  </InfoCard>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-5 rounded-xl shadow">
              <p className="text-sm leading-relaxed">
                Наш научный фокус — создание передовых нутриентов в сфере клинического питания и функциональной пищи, не имеющих аналогов в мире.
              </p>
            </div>
          </div>
        </section>
        
        {/* Слайд 3 - Рынок */}
        <section ref={marketRef} className="scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              РЫНОК МИКРОБИОМНЫХ ИССЛЕДОВАНИЙ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <MarketStat 
                title="Глобальный рынок" 
                value="4,5 млрд $" 
                colors={["#8b5cf6", "#10b981", "#ec4899", "#3b82f6"]} 
                percentages={[25, 25, 25, 25]}
              />
              
              <MarketStat 
                title="Сегмент реагентов" 
                value="1,5 млрд $" 
                colors={["#3b82f6", "#e5e7eb"]} 
                percentages={[60, 40]}
              />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-8">
              <h3 className="text-gray-700 font-medium mb-4">Прогноз роста выручки (млн $)</h3>
              <div className="h-32 relative mb-2">
                {/* Базовые линии */}
                {[0, 8, 16, 24, 32].map((bottom) => (
                  <div key={bottom} className="absolute left-0 bottom-0 w-full border-t border-gray-100" style={{ bottom: `${bottom}px` }}></div>
                ))}
                
                {/* График - наша компания */}
                <div className="absolute left-0 bottom-0 w-full h-full">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C20,90 40,80 60,50 S80,20 100,10" fill="none" stroke="#8b5cf6" strokeWidth="2"></path>
                  </svg>
                </div>
                
                {/* График - рынок */}
                <div className="absolute left-0 bottom-0 w-full h-full">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,95 C20,85 40,75 60,70 S80,60 100,55" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                {['2025', '2026', '2027', '2028', '2029', '2030', '2031'].map((year) => (
                  <div key={year}>{year}</div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="text-gray-700 font-medium mb-2">Наша цель</h3>
                <p className="text-gray-600 mb-2">
                  Занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка{' '}
                  <span className="font-bold text-blue-600">150 млн $</span>.
                </p>
                <p className="text-gray-600">
                  Прогнозируемая капитализация R&D компании -{' '}
                  <span className="font-bold text-purple-600">500+ млн $</span> к 2031 году.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-5 text-white shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">
                    25%
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">CAGR</h3>
                    <p className="text-white/80 text-sm">Совокупный среднегодовой темп роста</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Нижняя навигация */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-10">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">R&D</div>
            <span className="text-gray-500">BioTech • 2025</span>
          </div>
          
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Вернуться наверх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Компоненты карточек и графиков

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

interface InfoCardProps {
  color: "green" | "pink" | "purple";
  children: React.ReactNode;
}

const InfoCard = ({ color, children }: InfoCardProps) => {
  const colorMap = {
    green: "bg-green-500",
    pink: "bg-pink-500",
    purple: "bg-purple-500"
  };

  return (
    <div className="flex gap-3 items-center bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
      <div className={`w-3 h-3 rounded-full ${colorMap[color]}`}></div>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );
};

interface MarketStatProps {
  title: string;
  value: string;
  colors: string[];
  percentages: number[];
}

const MarketStat = ({ title, value, colors, percentages }: MarketStatProps) => {
  // Создаем строку для conic-gradient
  const generateConicGradient = () => {
    let gradient = "";
    let currentDeg = 0;

    colors.forEach((color, index) => {
      const startDeg = currentDeg;
      const endDeg = currentDeg + (percentages[index] * 3.6); // 3.6 = 360 / 100
      
      gradient += `${color} ${startDeg}%, ${color} ${endDeg}%${index < colors.length - 1 ? ', ' : ''}`;
      currentDeg = endDeg;
    });

    return `conic-gradient(${gradient})`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h3 className="text-gray-500 text-sm mb-3">{title}</h3>
      <div className="flex items-center">
        <div className="relative w-24 h-24 mr-4">
          <div 
            className="absolute inset-0 rounded-full overflow-hidden" 
            style={{ background: generateConicGradient() }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs font-bold">
              {value.split(' ')[0]}
            </div>
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

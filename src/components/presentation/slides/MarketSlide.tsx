
const MarketSlide = () => {
  return (
    <>
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
      
      <GrowthChart />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GoalCard />
        <CagrCard />
      </div>
    </>
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

const GrowthChart = () => {
  return (
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
  );
};

const GoalCard = () => {
  return (
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
  );
};

const CagrCard = () => {
  return (
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
  );
};

export default MarketSlide;

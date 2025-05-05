
const HypothesisSlide = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        <span className="text-green-500">ГИПОТЕЗА ПОДТВЕРЖДЕНА:</span> <br/>
        <span className="text-gray-800 text-xl mt-1 block">РЫНОК ГОТОВ ПЛАТИТЬ</span>
      </h2>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Круговая диаграмма */}
        <PieChart />
        
        {/* Информационные карточки */}
        <InfoCards />
      </div>
      
      <div className="bg-gray-800 text-white p-5 rounded-xl shadow">
        <p className="text-sm leading-relaxed">
          Наш научный фокус — создание передовых нутриентов в сфере клинического питания и функциональной пищи, не имеющих аналогов в мире.
        </p>
      </div>
    </>
  );
};

const PieChart = () => {
  return (
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
  );
};

const InfoCards = () => {
  return (
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

export default HypothesisSlide;

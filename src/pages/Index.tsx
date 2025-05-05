
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 mx-4 relative">
          {/* Хедер с логотипом и навигацией (стилизован под дашборд) */}
          <div className="absolute top-4 left-6 flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">R&D</div>
            <p className="text-gray-600 font-medium">BioTech • Презентация</p>
          </div>
          
          <div className="absolute top-4 right-6 flex items-center gap-3">
            <div className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full">Слайд {currentSlide + 1}/3</div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="mt-14">
            {/* Слайд 1 - Дорожная карта */}
            <div className={`${currentSlide === 0 ? 'block' : 'hidden'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Дорожная карта развития <span className="text-purple-600">2025-2029</span>
              </h2>
              
              {/* Визуализация дорожной карты как график */}
              <div className="mb-8 overflow-hidden">
                <div className="h-36 relative mb-3 rounded-lg border border-gray-100">
                  <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 rounded-lg"></div>
                  
                  <div className="absolute left-[5%] bottom-4 w-[15%] h-20 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">25</div>
                    <div className="mt-2 h-16 w-1 bg-blue-300"></div>
                  </div>
                  
                  <div className="absolute left-[24%] bottom-8 w-[15%] h-20 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">26</div>
                    <div className="mt-2 h-12 w-1 bg-purple-300"></div>
                  </div>
                  
                  <div className="absolute left-[43%] bottom-12 w-[15%] h-20 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xs">27</div>
                    <div className="mt-2 h-8 w-1 bg-pink-300"></div>
                  </div>
                  
                  <div className="absolute left-[62%] bottom-16 w-[15%] h-20 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">28</div>
                    <div className="mt-2 h-4 w-1 bg-orange-300"></div>
                  </div>
                  
                  <div className="absolute left-[81%] bottom-20 w-[15%] h-20 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xs">29</div>
                    <div className="mt-2 h-0 w-1 bg-cyan-300"></div>
                  </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">25</div>
                    <h3 className="font-bold text-gray-700">Масштабирование производства</h3>
                  </div>
                  <p className="text-gray-500 text-sm pl-12">Доработка линейки продукции</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">26</div>
                    <h3 className="font-bold text-gray-700">Расширение продуктовой линейки</h3>
                  </div>
                  <p className="text-gray-500 text-sm pl-12">Разработка планов реабилитации нутриентов</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">27</div>
                    <h3 className="font-bold text-gray-700">Глобализация</h3>
                  </div>
                  <p className="text-gray-500 text-sm pl-12">Создание новых рабочих мест в странах БРИКС</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">28</div>
                    <h3 className="font-bold text-gray-700">Укрепление позиций на рынке</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">29</div>
                    <h3 className="font-bold text-gray-700">Расширение сети дистрибьюторов</h3>
                  </div>
                  <p className="text-gray-500 text-sm pl-12">Выход на рынки США и Канады</p>
                </div>
              </div>
            </div>
            
            {/* Слайд 2 - Гипотеза */}
            <div className={`${currentSlide === 1 ? 'block' : 'hidden'}`}>
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
                    <div className="flex gap-3 items-center bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <p className="text-gray-700 text-sm">Мы глубоко понимаем свой продукт, рынок и целевую аудиторию</p>
                    </div>
                    <div className="flex gap-3 items-center bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <p className="text-gray-700 text-sm">Подтвержденный product-market fit</p>
                    </div>
                    <div className="flex gap-3 items-center bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                      <p className="text-gray-700 text-sm">Soft-коммиты от лабораторий на закупку реагентов</p>
                    </div>
                    <div className="flex gap-3 items-center bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <p className="text-gray-700 text-sm">Презентация по разработке уникального нутриента для онкологии, стоимость одной рецептуры 20 млн рублей</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 text-white p-5 rounded-xl shadow">
                <p className="text-sm leading-relaxed">
                  Наш научный фокус — создание передовых нутриентов в сфере клинического питания и функциональной пищи, не имеющих аналогов в мире.
                </p>
              </div>
            </div>
            
            {/* Слайд 3 - Рынок */}
            <div className={`${currentSlide === 2 ? 'block' : 'hidden'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                РЫНОК МИКРОБИОМНЫХ ИССЛЕДОВАНИЙ
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Круговой график - глобальный рынок */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-gray-500 text-sm mb-3">Глобальный рынок</h3>
                  <div className="flex items-center">
                    <div className="relative w-24 h-24 mr-4">
                      <div className="absolute inset-0 rounded-full overflow-hidden" style={{
                        background: "conic-gradient(#8b5cf6 0%, #8b5cf6 25%, #10b981 25%, #10b981 50%, #ec4899 50%, #ec4899 75%, #3b82f6 75%, #3b82f6 100%)"
                      }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs font-bold">4.5B</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-gray-800">4,5 млрд $</p>
                    </div>
                  </div>
                </div>
                
                {/* Круговой график - сегмент реагентов */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-gray-500 text-sm mb-3">Сегмент реагентов</h3>
                  <div className="flex items-center">
                    <div className="relative w-24 h-24 mr-4">
                      <div className="absolute inset-0 rounded-full overflow-hidden" style={{
                        background: "conic-gradient(#3b82f6 0%, #3b82f6 60%, #e5e7eb 60%, #e5e7eb 100%)"
                      }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs font-bold">1.5B</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-gray-800">1,5 млрд $</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Линейный график */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-8">
                <h3 className="text-gray-700 font-medium mb-4">Прогноз роста выручки (млн $)</h3>
                <div className="h-32 relative mb-2">
                  {/* Базовые линии */}
                  <div className="absolute left-0 bottom-0 w-full border-t border-gray-100"></div>
                  <div className="absolute left-0 bottom-8 w-full border-t border-gray-100"></div>
                  <div className="absolute left-0 bottom-16 w-full border-t border-gray-100"></div>
                  <div className="absolute left-0 bottom-24 w-full border-t border-gray-100"></div>
                  <div className="absolute left-0 bottom-32 w-full border-t border-gray-100"></div>
                  
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
                  <div>2025</div>
                  <div>2026</div>
                  <div>2027</div>
                  <div>2028</div>
                  <div>2029</div>
                  <div>2030</div>
                  <div>2031</div>
                </div>
              </div>
              
              {/* Итоговая информация */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-gray-700 font-medium mb-2">Наша цель</h3>
                  <p className="text-gray-600 mb-2">Занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка <span className="font-bold text-blue-600">150 млн $</span>.</p>
                  <p className="text-gray-600">Прогнозируемая капитализация R&D компании - <span className="font-bold text-purple-600">500+ млн $</span> к 2031 году.</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-5 text-white shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">25%</div>
                    <div>
                      <h3 className="font-bold text-lg">CAGR</h3>
                      <p className="text-white/80 text-sm">Совокупный среднегодовой темп роста</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Навигация */}
          <div className="mt-10 flex justify-between items-center">
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-8 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-200'}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={prevSlide} 
                variant="outline" 
                className="rounded-full text-sm border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Назад
              </Button>
              <Button 
                onClick={nextSlide} 
                className="rounded-full text-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                Далее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

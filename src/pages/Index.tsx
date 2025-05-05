
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-6xl px-4 mx-auto">
        {/* Слайдер */}
        <div className="relative bg-white overflow-hidden mb-10">
          {/* Слайд 1 - Дорожная карта */}
          <div className={`${currentSlide === 0 ? 'block' : 'hidden'} pb-12`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
              Дорожная карта развития <br />
              <span className="text-[#3c40c6]">2025-2029</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#3c40c6] text-white flex items-center justify-center text-2xl font-bold">2025</div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Масштабирование производства</h3>
                  <p className="text-gray-600 text-lg">Доработка линейки продукции</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#3c40c6] text-white flex items-center justify-center text-2xl font-bold">2026</div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Расширение продуктовой линейки</h3>
                  <p className="text-gray-600 text-lg">Разработка планов реабилитации нутриентов</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#3c40c6] text-white flex items-center justify-center text-2xl font-bold">2027</div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Глобализация</h3>
                  <p className="text-gray-600 text-lg">Создание новых рабочих мест в странах БРИКС</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#3c40c6] text-white flex items-center justify-center text-2xl font-bold">2028</div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Укрепление позиций на мировом рынке</h3>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#3c40c6] text-white flex items-center justify-center text-2xl font-bold">2029</div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Расширение сети дистрибьюторов</h3>
                  <p className="text-gray-600 text-lg">Выход на рынки США и Канады</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Слайд 2 - Гипотеза */}
          <div className={`${currentSlide === 1 ? 'block' : 'hidden'} py-12`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
              <span className="text-[#0be881]">ГИПОТЕЗА ПОДТВЕРЖДЕНА:</span> <br />
              РЫНОК ГОТОВ ПЛАТИТЬ
            </h2>
            
            <div className="mb-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-[#0be881] flex-shrink-0"></div>
                <p className="text-xl text-gray-800">Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-[#0be881] flex-shrink-0"></div>
                <p className="text-xl text-gray-800">Подтвержденный product-market fit.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-[#0be881] flex-shrink-0"></div>
                <p className="text-xl text-gray-800">Soft-коммиты от лабораторий на закупку реагентов.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-[#0be881] flex-shrink-0"></div>
                <p className="text-xl text-gray-800">Презентация по разработке уникального нутриента для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded">
              <p className="text-xl text-white leading-relaxed">
                Наш научный фокус — создание передовых нутриентов в сфере клинического питания и функциональной пищи, не имеющих аналогов в мире.
              </p>
            </div>
          </div>
          
          {/* Слайд 3 - Рынок */}
          <div className={`${currentSlide === 2 ? 'block' : 'hidden'} py-12`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
              РЫНОК МИКРОБИОМНЫХ <br /> ИССЛЕДОВАНИЙ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border-2 border-[#3c40c6] rounded p-8">
                <h3 className="text-2xl text-gray-600 mb-4">Глобальный рынок</h3>
                <p className="text-5xl font-bold text-[#3c40c6]">4,5 млрд $</p>
              </div>
              
              <div className="border-2 border-[#3c40c6] rounded p-8">
                <h3 className="text-2xl text-gray-600 mb-4">Сегмент реагентов</h3>
                <p className="text-5xl font-bold text-[#3c40c6]">1,5 млрд $</p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Наша цель</h3>
              <p className="text-xl text-gray-800 mb-4">
                Занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка <span className="font-bold text-[#3c40c6]">150 млн $</span>.
              </p>
              <p className="text-xl text-gray-800">
                Прогнозируемая капитализация R&D компании - <span className="font-bold text-[#3c40c6]">500+ млн $</span> к 2031 году.
              </p>
            </div>
            
            <div className="bg-[#3c40c6] text-white rounded p-8 inline-block">
              <p className="text-3xl font-bold">CAGR - 25%</p>
            </div>
          </div>
        </div>
        
        {/* Навигация */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-6">
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-10 h-2 ${
                  currentSlide === index ? 'bg-[#3c40c6]' : 'bg-gray-300'
                } transition-colors`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <Button 
              onClick={prevSlide} 
              variant="outline" 
              className="border-[#3c40c6] text-[#3c40c6] hover:bg-[#3c40c6] hover:text-white"
            >
              Предыдущий слайд
            </Button>
            <Button 
              onClick={nextSlide} 
              className="bg-[#3c40c6] hover:bg-[#2d319b] text-white"
            >
              Следующий слайд
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

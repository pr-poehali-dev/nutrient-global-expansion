
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl p-6 mx-auto">
        {/* Слайдер с индикатором */}
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden mb-6">
          {/* Слайд 1 - Дорожная карта */}
          <div className={`${currentSlide === 0 ? 'block' : 'hidden'} p-8`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Дорожная карта развития <span className="text-purple-600">2025-2029</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2025</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Масштабирование производства</h3>
                  <p className="text-gray-600">Доработка линейки продукции</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2026</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Расширение продуктовой линейки</h3>
                  <p className="text-gray-600">Разработка планов реабилитации нутриентов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2027</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Глобализация</h3>
                  <p className="text-gray-600">Создание новых рабочих мест в странах БРИКС</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2028</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Укрепление позиций на мировом рынке</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2029</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Расширение сети дистрибьюторов</h3>
                  <p className="text-gray-600">Выход на рынки США и Канады</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Слайд 2 - Гипотеза */}
          <div className={`${currentSlide === 1 ? 'block' : 'hidden'} p-8`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              <span className="text-green-500">ГИПОТЕЗА ПОДТВЕРЖДЕНА:</span> РЫНОК ГОТОВ ПЛАТИТЬ
            </h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <p className="text-gray-700">Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <p className="text-gray-700">Подтвержденный product-market fit.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <p className="text-gray-700">Soft-коммиты от лабораторий на закупку реагентов.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <p className="text-gray-700">Презентация по разработке уникального нутриента для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-lg font-medium">
                Наш научный фокус — создание передовых нутриентов в сфере клинического питания и функциональной пищи, не имеющих аналогов в мире.
              </p>
            </div>
          </div>
          
          {/* Слайд 3 - Рынок */}
          <div className={`${currentSlide === 2 ? 'block' : 'hidden'} p-8`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              РЫНОК МИКРОБИОМНЫХ ИССЛЕДОВАНИЙ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-700 mb-2">Глобальный рынок</h3>
                  <p className="text-4xl font-bold text-blue-600">4,5 млрд $</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-700 mb-2">Сегмент реагентов</h3>
                  <p className="text-4xl font-bold text-blue-600">1,5 млрд $</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Наша цель</h3>
              <p className="text-gray-700 mb-4">Занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка <span className="font-bold text-blue-600">150 млн $</span>.</p>
              <p className="text-gray-700">Прогнозируемая капитализация R&D компании - <span className="font-bold text-blue-600">500+ млн $</span> к 2031 году.</p>
            </div>
            
            <div className="flex items-center justify-center bg-blue-600 text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">CAGR - 25%</p>
            </div>
          </div>
          
          {/* Навигация */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Кнопки навигации */}
        <div className="flex justify-center gap-4">
          <Button onClick={prevSlide} variant="outline">Предыдущий слайд</Button>
          <Button onClick={nextSlide} className="bg-purple-600 hover:bg-purple-700">Следующий слайд</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

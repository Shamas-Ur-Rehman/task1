import React from "react";
import { Link } from "react-router-dom";

const RefrigeratorPromotion = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#e7094a] py-5 rounded-lg">
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold">
        Новый мобильный телефон сегодня, оплата - потом!
        </h1>
      </div>

      {/* Promotion Section */}
      <div className="bg-white flex flex-col items-center py-8 px-4 md:px-12">
        <h2 className="text-black text-center text-lg md:text-2xl font-semibold mb-6">
        От 19 рублей в месяц! В наличии в Беларуси
        </h2>
        <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://smartphone.gg.quiz.coolshoponline.site/images/1.jpg"
            alt="Refrigerator Promotion"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Features Section
      <div className="mt-8 text-center px-4">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Treat yourself and your loved ones to a new refrigerator on favorable terms:
        </h3>
        <ul className="text-left md:text-center space-y-3">
          {[
            "✅ Individual installment terms",
            "✅ No guarantors",
            "✅ No income certificates required",
            "✅ Minimum monthly payment",
            "✅ First payment 0 rubles",
          ].map((item, index) => (
            <li key={index} className="text-green-600 font-medium">
              {item}
            </li>
          ))}
        </ul>
      </div> */}

    {/* "Почему мы?" Section */}
<div className="bg-gray-100 mt-12 py-10 px-4">
  <h2 className="text-center text-2xl font-bold mb-8">Почему мы?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {/* Security */}
    <div>
      <div className="mx-auto mb-4 w-16 h-16">
        <img src="https://smartphone.gg.quiz.coolshoponline.site/images/ico-1.png" alt="Security Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-bold">Безопасность</h3>
      <p className="text-gray-600">
        Мы работаем напрямую с банком и при покупке вы получаете все необходимые документы
      </p>
    </div>

    {/* Benefit */}
    <div>
      <div className="mx-auto mb-4 w-16 h-16">
        <img src="https://smartphone.gg.quiz.coolshoponline.site/images/ico-2.png" alt="Benefit Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-bold">Выгода</h3>
      <p className="text-gray-600">
        У нас самые низкие цены, так как мы являемся одним из крупнейших поставщиков РБ и осуществляем продажи напрямую, без посредников
      </p>
    </div>

    {/* Best Conditions */}
    <div>
      <div className="mx-auto mb-4 w-16 h-16">
        <img src="https://smartphone.gg.quiz.coolshoponline.site/images/ico-3.png" alt="Best Conditions Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-bold">Лучшие условия</h3>
      <p className="text-gray-600">
        Мы оформляем рассрочку до 5 лет без первого взноса, а значит первый платеж вы внесете только через месяц после покупки
      </p>
    </div>

    {/* Simplicity in Design */}
    <div>
      <div className="mx-auto mb-4 w-16 h-16">
        <img src="https://smartphone.gg.quiz.coolshoponline.site/images/ico-4.png" alt="Simplicity Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-bold">Простота в оформлении</h3>
      <p className="text-gray-600">
      Вам не нужны никакие справки и долгие ожидания одобрения рассрочки, оформляем за 1 день

</p>
    </div>

    {/* Free Consultation */}
    <div>
      <div className="mx-auto mb-4 w-16 h-16">
        <img src="https://smartphone.gg.quiz.coolshoponline.site/images/ico-5.png" alt="Consultation Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-bold">Бесплатная консультация</h3>
      <p className="text-gray-600">
      Мы уделим вам столько времени, сколько нужно, поможем определиться с моделью и ответим на любые вопросы      </p>
    </div>
  </div>
</div>


      {/* Footer Section */}
      <footer className="bg-gray-100 text-center py-6 pb-[80px] mt-12">
        <p className="text-sm md:text-base">
        Время работы: пн-вс 09:00 - 21:00
        </p>
        <p className="text-sm md:text-base mt-2">
        ООО "Цитруском" УНП 193699866<br />
        220046, г. Минск, а/я 46
        </p>
        <p className="text-sm md:text-base mt-2 font-semibold">
        Акция действует на всей территории Беларуси
        </p>
        <p className="text-sm md:text-base mt-2">Phone: +375 (29) 330-44-93</p>
        <p className="text-sm md:text-base mt-1">E-mail: citrustele@mail.ru</p>
        
        <div className="mt-4">
          {[
            { text: "Политика конфиденциальности", href: "https://holodilnik.wbc.necitrus.of.by/documents/politics.html" },
            { text: "Пользовательское соглашение", href: "https://holodilnik.wbc.necitrus.of.by/documents/agreement.html" },
            { text: "Договор возврата товара и денежных средств", href: "https://holodilnik.wbc.necitrus.of.by/documents/dogovor_vozvrata.html" },
            { text: "Договор доставки", href: "https://holodilnik.wbc.necitrus.of.by/documents/dostavka.html" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-blue-600 hover:underline mx-2 text-sm md:text-base"
            >
              {link.text}
            </a>
          ))}
        </div>
      </footer>

      {/* Fixed Call-to-Action Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
        <Link to="/refrigerator-Options" className="w-full rounded-lg bg-blue-600 text-white text-lg font-medium py-4 hover:bg-blue-700 shadow-lg">
        Подобрать Мобильный телефон
        </Link>
      </div>
    </>
  );
};

export default RefrigeratorPromotion;

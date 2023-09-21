import React from "react";

const Faq = () => {
  const faqData = [
    {
      question: "What is air and water quality?",
      answer:
        "Air quality refers to the condition of the air in a specific location, indicating how clean or polluted it is. It often measures the presence of pollutants and their impact on health and the environment.Water quality refers to the condition of water in terms of its chemical, physical, and biological properties. It assesses if water is safe for drinking, recreation, and aquatic life",
    },
    {
      question: "What is importance of air and water quality?",
      answer:
        "Air quality is essential because the air we breathe can affect our health. Poor air quality can lead to respiratory problems and other health issues. It also impacts the environment. Water quality is vital for human health, aquatic ecosystems, and the environment. Safe drinking water and clean water bodies are essential for sustaining life. ",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions 123
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="font-semibold text-lg">{item.question}</div>
              <div className="mt-2">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

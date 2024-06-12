import { useState } from "react";

const questions = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
  },
  {
    question: "Do you offer customer support after purchase?",
    answer:
      "We do offer support to both new and continuing customers for whenever there is an update all our customers will be alert for new dashboard updates",
  },
  {
    question: "Can I purchase items in bulk?",
    answer:
      "Yes, we offer bulk purchasing options. Please contact our sales team for more information on bulk pricing and availability.",
  },
];

const QuestionsAnswers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="items-center">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col items-center">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full md:w-8/12 text-center text-lg font-medium py-2 px-1 bg-gray-300 focus:outline-none"
            >
              {item.question}
            </button>
            <div
              className={`mt-2 pl-4 text-gray-700 text-center w-full md:w-8/12 transition-all ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;

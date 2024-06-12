import Pricearticle from "./Pricearticle";
import QuestionsAnswers from "./QustionsAnswers";

const pricingData = [
  {
    plan: "Hobby",
    price: "free",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    plan: "Basic",
    price: "19.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    plan: "Pro",
    price: "49.99",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
  },
  {
    plan: "Enterprise",
    price: "99.99",
    features: ["Feature X", "Feature Y", "Feature Z", "Feature W"],
  },
];

const Pricing = () => {
  return (
    <>
      <main
        id="pricing"
        className="bg-blue-100 p-4 max-w-large m-auto  flex flex-col "
      >
        <h1 className="text-center mt-8">Pricing and Plans</h1>

        <section className="flex flex-wrap justify-center gap-4">
          {pricingData.map((planData, index) => (
            <Pricearticle
              key={index}
              plan={planData.plan}
              price={planData.price}
              features={planData.features}
            />
          ))}
        </section>

        <QuestionsAnswers />
      </main>
    </>
  );
};

export default Pricing;

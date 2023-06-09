import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "List Your Laptop",
      description:
        "Create an account and list your laptop for sale. Provide detailed information and upload high-quality images.",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-71892-LaptopBuyingGuide-2_in_1-208100.jpg",
    },
    {
      id: 2,
      title: "Evaluation Process",
      description:
        "Our experts will evaluate your laptop based on its condition, specifications, and market value.",
      image:
        "https://www.synergita.com/blog/wp-content/uploads/2021/11/How-to-Effectively-Conduct-a-Performance-Evaluation-Process.jpg",
    },
    {
      id: 3,
      title: "Purchase a Laptop",
      description:
        "Browse through the available laptops listed on our platform. Choose the one that meets your requirements and make a purchase.",
      image: "https://images.slideplayer.com/29/9427640/slides/slide_2.jpg",
    },
  ];

  return (
    <section className="mt-28 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

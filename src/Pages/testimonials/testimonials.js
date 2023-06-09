import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote: "Great product! It exceeded my expectations.",
    image: "https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    quote: "I highly recommend this company. Excellent service!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgjxQjXNQZkImLibTcGnCsPmSpxqw3W_ipQ&usqp=CAU",
  },
  {
    id: 3,
    name: "Mike Johnson",
    quote: "The best purchase I've made in a long time. Very satisfied!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyoNCD1EwjiiDLLiAnJ2ug_fyiWyYOAv5Sg&usqp=CAU",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-28 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow p-6"
            >
              <blockquote className="text-lg italic mb-4">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  {/* Additional information like job title or company can be added here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

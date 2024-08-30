import React from "react";
import Slider from "react-slick";

const product = [
  {
    text: "Online Ordering",
    img: "../slider/blob.jpg",
    review:
      "Start taking orders online from millions of users near you and deliver with Zomato...",
    button: "Learn more"
  },
  {
    text: "Online Ordering",
    img: "../slider/man.jpg",
    review:
      "Start taking orders online from millions of users near you and deliver with Zomato...",
    button: "Learn more"
  },
  {
    text: "Online Ordering",
    img: "../slider/bilb2.jpg",
    review:
      "Start taking orders online from millions of users near you and deliver with Zomato...",
    button: "Learn more"
  }
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {product.map((p, index) => (
        <div
          key={index}
          className="shadow-2xl flex flex-row md:flex-col md:space-x-3 p-4 bg-white rounded-lg space-y-3 md:space-y-0"
        >
          <div className="flex justify-center items-center">
            <img
              className="max-w-full h-auto rounded"
              src={p.img}
              alt={p.text}
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left space-y-2">
            <p className="text-lg font-semibold">{p.text}</p>
            <div className="text-gray-600">{p.review}</div>
            <div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                {p.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Content1 = () => {
  return (
    <div>
      <div className="w-full mt-auto flex justify-center p-3">
        <div className="mt-20 w-full max-w-4xl space-y-6 flex-col md:flex-row">
         
        
        </div>
      </div>
    </div>
  );
};

export default Content1;

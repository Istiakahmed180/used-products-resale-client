import React from "react";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            className="w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-4 right-5 bottom-[30%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            className="w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-4 right-5 bottom-[30%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-4 right-5 bottom-[30%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

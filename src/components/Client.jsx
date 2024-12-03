import React from "react";
import { useInView } from "react-intersection-observer";

const Client = () => {
  const { ref: image1Ref, inView: image1Visible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: image2Ref, inView: image2Visible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: image3Ref, inView: image3Visible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: image4Ref, inView: image4Visible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id="clients"
      className="bg-white scroll-mt-[100px] text-[#182153] border-b-[2px] transition transform duration-400"
    >
      <div className="text-center">
        <h1 className="text-2xl pb-4 border-b-2 content-center font-bold h-[100px]">
          CLIENTS
        </h1>
      </div>
      <div className="flex flex-wrap px-[20px] md:px-[100px] py-[50px]">
        {/* Image 1 */}
        <div
          ref={image1Ref}
          className={`w-[50%] md:w-[100px] h-[100px] my-7 mx-auto ${
            image1Visible ? "animate-rotate" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/1200px-Tesla_logo-e1659037140772.png?auto=format&q=60&fit=max&w=930"
            alt="Tesla Logo"
          />
        </div>
        {/* Image 2 */}
        <div
          ref={image2Ref}
          className={`w-[50%] md:w-[100px] h-[100px] my-7 mx-auto ${
            image2Visible ? "animate-rotate" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="https://blog.99cluster.com/blog/wp-content/uploads/2022/05/Playstation_logo_colour.svg.png"
            alt="PlayStation Logo"
          />
        </div>
        {/* Image 3 */}
        <div
          ref={image3Ref}
          className={`w-[50%] md:w-[100px] h-[100px] my-7 mx-auto ${
            image3Visible ? "animate-rotate" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="https://blog.99cluster.com/blog/wp-content/uploads/2022/05/Underground.svg-e1659038391159.png"
            alt="Underground Logo"
          />
        </div>
        {/* Image 4 */}
        <div
          ref={image4Ref}
          className={`w-[50%] md:w-[100px] h-[100px] my-7 mx-auto ${
            image4Visible ? "animate-rotate" : ""
          }`}
        >
          <img
            className="w-full h-full object-contain"
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2022/02/fiverr.png"
            alt="Fiverr Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Client;

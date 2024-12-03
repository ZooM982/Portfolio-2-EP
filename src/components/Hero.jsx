/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useInView } from "react-intersection-observer";
import SocialNetwork from "./SocialNetwork";

const Hero = () => {
  const { ref: leftRef, inView: leftVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: rightRef, inView: rightVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: bottomRef, inView: bottomVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-[100px] bg-[#182153] bg-opacity-85 flex flex-wrap justify-center items-center space-y-8 md:space-y-0 md:justify-between">
      <div className="md:flex  mt-[100px] md:px-[200px] mb-[10px] ">
        {/* Section Gauche */}
        <div
          ref={leftRef}
          className={`w-[80%] mx-auto md:w-[50%] h-[500px] ${
            leftVisible ? "animate-slideLeft" : "opacity-0"
          }`}
        >
          <img
            src="https://www.utopix.com/fr/blog/wp-content/uploads/2024/04/Y2E4OTI3NzQtNmUyOC00YmU2LWE5ZjctODcxY2RlMzg2ZDIy_26dfc43e-31dd-463f-ad04-56f39a430691_profilhomme1-scaled.jpg"
            alt="Photo de profil de Revhieno Roll Haurly"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section Droite */}
        <div
          ref={rightRef}
          className={`w-[80%] mx-auto md:w-[50%] h-[500px] text-[#182153] bg-white p-[70px] ${
            rightVisible ? "animate-slideRight" : "opacity-0"
          }`}
        >
          <div className="my-3">
            <h3 className="font-bold text-lg">Revhieno Roll Haurly</h3>
            <p>Designer</p>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-lg">Telephone</h3>
            <p>+221 78 597 50 58</p>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-lg">E-mail</h3>
            <p>haurlyroll@gmail.com</p>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-lg">Adresse</h3>
            <p>Rue OKM-475, Oukam, Espaces mamelles, Dakar, Senegal</p>
          </div>
          <div className="my-3">
            <h3 className="font-bold text-lg">Date de naissance</h3>
            <p>01 Avril, 2000</p>
          </div>
        </div>
      </div>

      {/* Section Bas */}
      <div
        ref={bottomRef}
        className={`w-full bg-[#F1F1F1] h-[300px] text-center text-[#182153] ${
          bottomVisible ? "animate-slideUp" : "opacity-0"
        }`}
      >
        <div className="h-[70px] w-[80%] mx-[40px] md:w-[68%] bg-[#182153] md:mx-[200px] text-white content-center">
          <div className="w-[50%] mx-auto ms-[100px] md:ms-[350px]">
            <SocialNetwork />
          </div>
        </div>
        <h4 className="mt-10 text-2xl">Salut ! Je suis Revhieno</h4>
        <p className="my-5 md:w-[30%] mx-auto">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Porta fames
          litora porta faucibus quis himenaeos sed fames.
        </p>
      </div>
    </section>
  );
};

export default Hero;

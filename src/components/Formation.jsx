import { useInView } from "react-intersection-observer";

const Formation = () => {
  const formation = [
    {
      year: "2024-2024",
      poste: "Ipsum velit",
      nomEntreprise: "Lorem ipsum odor amet",
      details:
        "Neque cubilia dapibus ornare condimentum class class libero montes quis. Vel lectus orci orci massa velit. Tempor magna semper tincidunt lorem gravida bibendum.",
    },
    {
      year: "2024-2024",
      poste: "Ipsum velit",
      nomEntreprise: "Lorem ipsum odor amet",
      details:
        "Neque cubilia dapibus ornare condimentum class class libero montes quis. Vel lectus orci orci massa velit. Tempor magna semper tincidunt lorem gravida bibendum.",
    },
    {
      year: "2024-2024",
      poste: "Ipsum velit",
      nomEntreprise: "Lorem ipsum odor amet",
      details:
        "Neque cubilia dapibus ornare condimentum class class libero montes quis. Vel lectus orci orci massa velit. Tempor magna semper tincidunt lorem gravida bibendum.",
    },
  ];
  const { ref: bottomRef, inView: bottomVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      id="formation"
      className="bg-white scroll-mt-[100px] text-[#182153] border-b-[2px] transition transform duration-400  "
    >
      <div className="text-center ">
        <h1 className="text-2xl pb-4 border-b-2 content-center font-bold h-[100px] ">
          FORMATION
        </h1>
      </div>
      <div
        ref={bottomRef}
        className={`md:w-[50%] mx-auto px-[25px] md:px-[100px] py-[50px]  ${
          bottomVisible ? "animate-slideUp" : "opacity-0"
        }`}
      >
        {formation.map((formation, index) => (
          <div key={index} className="flex my-6 mx-auto">
            <div className="w-[26%] md:w-[30%] ">
              <p className="md:text-2xl">{formation.year}</p>
              <p>{formation.poste} </p>
            </div>
            <div className="bg-blue-700 mx-auto h-[15px] w-[15px] mt-[10px] rounded-full   ">
              <div className="border-r-[5px] h-[150px] mt-[15px] mr-[5px] "></div>
            </div>
            <div className="w-[59%] md:w-[60%] ms-5 md:h-[150px]  ">
              <p className="md:text-2xl">{formation.nomEntreprise}</p>
              <p>{formation.details} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;

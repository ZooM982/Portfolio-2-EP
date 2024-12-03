import React from "react";

const Expertise = () => {
  const expertise = [
    {
      titre: "Class ac aptent",
      Description:
        "Ac sollicitudin porttitor interdum accumsan; nunc elementum. Molestie cursus imperdiet, dui himenaeos ligula libero felis taciti. Class luctus tempus facilisi euismod ante.",
    },
    {
      titre: "Class ac aptent",
      Description:
        "Ac sollicitudin porttitor interdum accumsan; nunc elementum. Molestie cursus imperdiet, dui himenaeos ligula libero felis taciti. Class luctus tempus facilisi euismod ante.",
    },
    {
      titre: "Class ac aptent",
      Description:
        "Ac sollicitudin porttitor interdum accumsan; nunc elementum. Molestie cursus imperdiet, dui himenaeos ligula libero felis taciti. Class luctus tempus facilisi euismod ante.",
    },
  ];

  // Créer un hook pour chaque expertise
  const { refs, inViewStates } = useExpertiseInView(expertise.length);

  return (
    <section
      id="expertise"
      className="bg-white scroll-mt-[100px] text-[#182153] transition transform duration-400"
    >
      <div className="text-center">
        <h1 className="text-2xl pb-4 border-b-2 content-center font-bold h-[100px]">
          EXPERTISE
        </h1>
      </div>
      <div className="flex flex-wrap md:px-[70px] py-[50px] pb-[100px] md:space-x-6">
        {expertise.map((expert, index) => (
          <div
            key={index}
            ref={refs[index]} // Référence spécifique à cet élément
            className={` space-y-2 mb-10 md:mb-0 mx-auto w-[80%] md:w-[30%] transform transition duration-700 ${
              inViewStates[index] ? "animate-slideIn" : "opacity-0"
            }`}
          >
            <p className="text-xl font-bold">{expert.titre}</p>
            <p>{expert.Description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Custom hook pour gérer les références et leur état
const useExpertiseInView = (count) => {
  const refs = Array.from({ length: count }, () => React.createRef());
  const [inViewStates, setInViewStates] = React.useState(
    Array(count).fill(false)
  );

  React.useEffect(() => {
    const observers = refs.map((ref, index) =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewStates((prev) =>
              prev.map((v, i) => (i === index ? true : v))
            );
          }
        },
        { threshold: 0.5 }
      )
    );

    refs.forEach((ref, index) => {
      if (ref.current) observers[index].observe(ref.current);
    });

    // Nettoyer les observers
    return () => observers.forEach((observer) => observer.disconnect());
  }, [refs]);

  return { refs, inViewStates };
};

export default Expertise;

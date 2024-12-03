const aptitudesLeft = [
    "Microsoft Excel - Avancé",
    "Microsoft Word - Avancé",
    "PowerPoint - Compétent",
  ];
  
  const aptitudesRight = [
    "Adobe - Compétent",
    "Français - Avancé",
    "Anglais - Moyen",
  ];
  
  const Aptitude = () => {
    return (
      <section
        id="aptitudes"
        className="bg-[#182153] scroll-mt-[100px] bg-opacity-50 text-white border-b-2 transition-transform duration-400"
      >
        <div className="text-center bg-[#182153] items-center">
          <h1 className="text-2xl pb-4 border-b-2 content-center font-bold h-[100px]">
            APTITUDES
          </h1>
        </div>
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0  px-10 md:px-24 py-12">
          {/* Colonne gauche */}
          <div className="w-full md:w-[45%] space-y-4">
            {aptitudesLeft.map((skill, index) => (
              <div
                key={index}
                className={`h-[70px] w-full bg-[#47527a] bg-opacity-75 flex items-center justify-center rounded-md opacity-0 animate-rollIn`}
                style={{ animationDelay: `${index * 0.3}s` }} // Ajoute un délai progressif
              >
                {skill}
              </div>
            ))}
          </div>
  
          {/* Colonne droite */}
          <div className="w-full md:w-[45%] space-y-4">
            {aptitudesRight.map((skill, index) => (
              <div
                key={index}
                className={`h-[70px] w-full bg-[#47527a] bg-opacity-75 flex items-center justify-center rounded-md opacity-0 animate-rollIn`}
                style={{ animationDelay: `${index * 0.3}s` }} // Ajoute un délai progressif
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Aptitude;
  
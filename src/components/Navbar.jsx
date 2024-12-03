
const Navbar = () => {
  return (
    <nav>
      {/* Logo et Titre */}
      <div className="md:h-[100px] bg-[#ffffff] fixed top-0 left-0 w-full z-50 py-4 px-6 flex flex-wrap text-center md:justify-between transition duration-300 ">
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 rounded-full bg-red-500"></div>
          <h1 className="text-xl font-bold">
            <a href="/#" className="hover:text-red-500 mx-auto transition duration-200">
              Revhieno Roll Haurly
            </a>
          </h1>
        </div>

        {/* Liens de Navigation */}
        <div className="flex flex-wrap md:ms-[70px] items-center md:space-x-6 mt-4 md:mt-0">
          <a
            href="#experience"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200 pr-4"
          >
            EXPERIENCE
          </a>
          <a
            href="#formation"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200 pr-4"
          >
            FORMATION
          </a>
          <a
            href="#clients"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200 pr-4"
          >
            CLIENTS
          </a>
          <a
            href="#aptitudes"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200 pr-4"
          >
            APTITUDES
          </a>
          <a
            href="#expertise"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200 pr-4"
          >
            EXPERTISE
          </a>
          
          <a
            href="#contact"
            className="hover:underline hover:text-red-500 mx-auto transition duration-200"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

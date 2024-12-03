import SocialNetwork from "./SocialNetwork";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#F1F1F1] scroll-mt-[100px] text-[#182153] transition transform duration-400  "
    >
      <div className="text-center ">
        <h1 className="text-2xl pb-4 border-b-2 border-b-white content-center font-bold h-[100px] ">
          CONTACTEZ-MOI
        </h1>
      </div>
      <div className="flex flex-wrap">
        <div className="mx-auto p-[50px] md:w-[50%] ">
          <form className="space-y-6 p-3 ">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Votre prenom"
                className="w-[48%] p-4 border outline-none focus:outline-red-500"
              />
              <input
                type="text"
                placeholder="Votre nom de famille"
                className="w-[48%] p-4 border outline-none focus:outline-red-500"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-4 border outline-none focus:outline-red-500"
              />
            </div>
            <textarea
              placeholder="Votre message"
              className="w-full h-[150px] p-4 border outline-none focus:outline-red-500"
            ></textarea>
            <button className="w-full  bg-yellow-700 text-white m-auto py-3 px-auto shadow-md hover:bg-yellow-500 transition duration-500">
              Envoyer
            </button>
          </form>
        </div>
        <div className="mx-auto p-[50px] md:w-[50%] border-t-[2px] border-t-white md:border-t-[0px]  md:border-s-[2px] md:border-s-white ">
          <div className="my-3">
            <h3 className="font-bold text-2xl">Revhieno Roll Haurly</h3>
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
          <div className="border-t-[2px] border-t-[#182153] mt-[100px] md:w-[50%]   ">
            <SocialNetwork />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

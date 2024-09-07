import Image from "next/image";

import boys from "../../public/assets/images/image.png";

const Heros = () => {
  return (
    <main
      className="grid w-full h-auto pt-32 lg:grid-cols-2"
      style={{
        background:
          "conic-gradient(from 0deg at 50% 50%, rgba(229, 141, 210, 0.20) 183.6deg, rgba(187, 228, 220, 0.20) 360deg), #FFF",
      }}
    >
      <div className="max-w-5xl p-16 mx-auto border-b border-gray-400 rounded-b-full">
        <h2 className="headText">Make your life easier with</h2>
        <h1 className="headTitle bg-gradient-to-r from-[#F37934] via-[#E58DD2] to-[#BBE4DC] bg-clip-text text-transparent">
          Coongify
        </h1>

        <div className="flex item-center ">
          <button className="px-6 py-5 text-white bg-orange-500 rounded-full">
            Explore More
          </button>
          <span className="mt-2 ml-4 text-lg font-bold">Get Started</span>
        </div>
      </div>

      <div>
        <Image
          width={500}
          height={300}
          alt="boys with headphones"
          src={boys}
          className="lg:pl-6"
        />
      </div>
    </main>
  );
};

export default Heros;

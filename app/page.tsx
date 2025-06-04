import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-full bg-[#0F172A] text-white flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
        Welcome to CreativeCo
      </h1>
      <p className="text-lg md:text-2xl text-center mb-8 max-w-xl text-gray-300">
        Building impactful digital solutions that elevate your brand and streamline your business.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white text-[#0F172A] font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
          Explore Services
        </button>
        <button className="border border-white py-2 px-6 rounded hover:bg-white hover:text-[#0F172A] transition">
          Contact Us
        </button>
      </div>
      <div className="mt-10 hidden md:block">
        <Image
          src="/images.jpeg"
          alt="Creative workspace"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}

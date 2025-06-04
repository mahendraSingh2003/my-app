import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-8 items-center">
      <Image src="/about.jpeg" alt="About Us" width={600} height={400} className="rounded-lg shadow-md" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About CreativeCo</h2>
        <p className="text-lg mb-4">
          We are a team of designers, developers, and strategists delivering impactful digital solutions. Our focus is
          on quality, performance, and long-term partnerships.
        </p>
        <p>
          Founded in 2021, we ve worked with over 100 clients worldwide in industries like health, education, retail,
          and logistics.
        </p>
      </div>
    </main>
  );
}

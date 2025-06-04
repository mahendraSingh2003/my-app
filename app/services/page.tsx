import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, scalable web solutions tailored to your brand.',
      image: '/web.jpg',
    },
    {
      title: 'Mobile Apps',
      description: 'iOS & Android app development that scales with your business.',
      image: '/download.png',
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, Ads, and strategy to boost your online visibility.',
      image: '/download.jpeg',
    },
  ];

  return (
    <main className="w-full bg-[#0F172A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

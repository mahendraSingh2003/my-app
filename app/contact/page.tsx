import Image from 'next/image';

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Message" rows={5} className="w-full border px-4 py-2 rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
        <Image src="/contact.jpeg" alt="Contact Us" width={600} height={400} className="rounded-lg shadow-md" />
      </div>
    </main>
  );
}

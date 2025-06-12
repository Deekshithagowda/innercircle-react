import { Helmet } from "react-helmet";

<Helmet>
  <title>Innercircle Softech | Home</title>
  <meta name="description" content="Empowering businesses through technology." />
</Helmet>
export default function Contactus() {
  return (
    <div  className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/abou.jpeg')" }}>
     <form className="space-y-4 max-w-md mx-auto">
  <input className="w-full p-2 border" type="text" placeholder="Your Name" required />
  <input className="w-full p-2 border" type="email" placeholder="Your Email" required />
  <textarea className="w-full p-2 border" placeholder="Your Message" required />
  <button className="bg-blue-600 text-white px-4 py-2" type="submit">Send</button>
</form>
<section className="bg-white py-12" style={{ backgroundImage: "url('/images/abou.jpeg')" }}>
  <div className="max-w-4xl mx-auto px-4 grid sm:grid-cols-2 gap-8 text-center">
    
    {/* Call Us Section */}
    <div className="flex flex-col items-center">
      <div className="rounded-full border-2 border-gray-300 p-4 mb-2">
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.12 3.32a1 1 0 01-.23.98l-1.56 1.56a16 16 0 006.6 6.6l1.56-1.56a1 1 0 01.98-.23l3.32 1.12a1 1 0 01.68.95V19a2 2 0 01-2 2h-.5C8.28 21 3 15.72 3 9.5V9a2 2 0 012-2z"
          />
        </svg>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">Call Us</h3>
      <p className="font-bold text-lg">080 49597345 / 080 49598463</p>
    </div>

    {/* Email Us Section */}
    <div className="flex flex-col items-center">
      <div className="rounded-full border-2 border-gray-300 p-4 mb-2">
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">Email Us</h3>
      <p className="font-bold text-lg">innersoftechprivateltd@outlook.com</p>
    </div>
  </div>
</section>

    </div>
  );
}

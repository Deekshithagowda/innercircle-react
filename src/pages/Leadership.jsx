import { Helmet } from "react-helmet";

<Helmet>
  <title>Innercircle Softech | Home</title>
  <meta name="description" content="Empowering businesses through technology." />
</Helmet>
export default function Leadership() {
  return (
    <div className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/abou.jpeg')" }}>
      <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
      <p>
        Our leadership team combines deep industry knowledge with a forward-thinking vision that empowers our people and drives client success.
      </p>
    </div>
  );
}

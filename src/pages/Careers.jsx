import { Helmet } from "react-helmet";

<Helmet>
  <title>Innercircle Softech | Home</title>
  <meta name="description" content="Empowering businesses through technology." />
</Helmet>
export default function Careers() {
  return (
    <div  className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/abou.jpeg')" }}
    >
      <h2 className="text-3xl font-bold mb-4">Careers</h2>
      <p>
        Join our growing team of passionate engineers, designers, and strategists. We’re hiring for roles in frontend, backend, QA, DevOps, and more.
      But currently there are no openings!!!!
      </p>
    </div>
  );
}

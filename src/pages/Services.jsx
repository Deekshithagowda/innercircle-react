import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
<Helmet>
  <title>Innercircle Softech | Home</title>
  <meta name="description" content="Empowering businesses through technology." />
</Helmet>
export default function Services() {
  return (
    <div className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/abou.jpeg')" }}>
      
      <ul className="list-disc ml-6">
         <section className="mt-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Our Services

        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Strategic Mobile Consulting */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/webdev.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Web Development</h3>
             
            </div>
          </motion.div>

          {/* Product Development */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/bi.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Business Intelligence</h3>
              
            </div>
          </motion.div>

          {/* HR Payroll Management */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/sales.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">SalesForce</h3>
             
            </div>
          </motion.div>

          {/* AWS */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/sap.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">SAP</h3>
              
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/sas.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Sas Services</h3>
              
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/django.jpeg"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Django</h3>
              
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/erp.png"  className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">ERP Practice</h3>
              
            </div>
          </motion.div>
        </div>
      </section>
      </ul>
    </div>
  );
}

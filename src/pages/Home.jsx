import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Image imports (adjust paths if needed)
import databasesImg from "../assets/techstack/databases.png";
import mobileImg from "../assets/techstack/mobile-tech.png";
import blockchainImg from "../assets/techstack/blockchain.png";
import emergingTechImg from "../assets/techstack/emerging-tech.png";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
       className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/bgs.jpeg')" }}
      
    >
      <Helmet>
        <title>Innercircle Softech | Home</title>
        <meta
          name="description"
          content="Empowering businesses through technology solutions. Innercircle Softech offers IT consulting, software development, and cloud solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-900 text-white rounded">
        <h1 className="text-4xl font-bold mb-4">Welcome to Innercircle Softech</h1>
        <p className="max-w-xl mx-auto text-lg">Innovative IT Solutions. Delivered with Precision.</p>
      </section>

      {/* Services */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded shadow bg-blue-900 text-white">Web & Mobile Development</div>
          <div className="p-6 border rounded shadow bg-blue-900 text-white">Cloud & DevOps</div>
          <div className="p-6 border rounded shadow bg-blue-900 text-white">Data & AI Solutions</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto">
          At Innercircle Softech, we provide scalable and customized software solutions that empower organizations to
          thrive in the digital age.
        </p>
      </section>

      {/* Our Expertise */}
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Strategic Mobile Consulting */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/mobile-consulting.png" alt="Strategic Mobile Consulting" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Strategic Mobile Consulting</h3>
              <p className="text-gray-700 text-sm">
                As mobile platforms evolve rapidly, enterprises need a forward-thinking strategy aligned with digital goals for successful mobile integration.
              </p>
            </div>
          </motion.div>

          {/* Product Development */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/product-development.png" alt="Product Development" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Product Development</h3>
              <p className="text-gray-700 text-sm">
                We deliver cost-effective and innovative software solutions for SMEs using modern technologies and best practices.
              </p>
            </div>
          </motion.div>

          {/* HR Payroll Management */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/hr-payroll.png" alt="HR Payroll Management" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">HR Payroll Management</h3>
              <p className="text-gray-700 text-sm">
                Our HR suite supports attendance, payroll, leave, and complete workforce automation to boost efficiency.
              </p>
            </div>
          </motion.div>

          {/* AWS */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/aws.png" alt="AWS" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">AWS</h3>
              <p className="text-gray-700 text-sm">
                We enable secure, scalable cloud solutions using AWS for hosting, analytics, infrastructure, and optimization.
              </p>
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white border rounded shadow overflow-hidden">
            <img src="/images/devops.png" alt="DevOps" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">DevOps</h3>
              <p className="text-gray-700 text-sm">
                Accelerate development with CI/CD, automation, and streamlined collaboration between development & operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="mt-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-blue-500 font-semibold tracking-wide">── TECH ENTHUSIASTS FOLLOW LATEST TRENDS ──</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800">Tools & Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg shadow p-4 text-center bg-white">
            <img src={databasesImg} alt="Databases" className="mx-auto mb-4 h-36 object-contain" />
            <p className="text-lg font-medium text-gray-800">Databases</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg shadow p-4 text-center bg-white">
            <img src={mobileImg} alt="Mobile Tech" className="mx-auto mb-4 h-36 object-contain" />
            <p className="text-lg font-medium text-gray-800">Mobile Tech</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg shadow p-4 text-center bg-white">
            <img src={blockchainImg} alt="Blockchain" className="mx-auto mb-4 h-36 object-contain" />
            <p className="text-lg font-medium text-gray-800">Blockchain</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg shadow p-4 text-center bg-white">
            <img src={emergingTechImg} alt="Emerging Tech" className="mx-auto mb-4 h-36 object-contain" />
            <p className="text-lg font-medium text-gray-800">Emerging Tech</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

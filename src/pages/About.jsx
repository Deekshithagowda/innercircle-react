import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
       className="p-6 text-gray-800 min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/abou.jpeg')" }}
    >
      <Helmet>
        <title>About Us | Innercircle Softech</title>
        <meta
          name="description"
          content="Learn more about Innercircle Softech, a leading provider of custom software and IT solutions helping clients achieve success through innovation and expertise."
        />
      </Helmet>

      <section className="mb-10 font-bold">
        <h1 className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-2">About Us</h1>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Innercircle Softech</h2>
        <p className="mb-4">
          Innercircle Softech is a global leader in software products and technology services. We specialize in delivering
          customized software solutions and IT services that empower our clients with a competitive edge. Through our disciplined
          management practices, deep domain expertise, and holistic approach, we continuously innovate to enhance value for our clients.
        </p>
        <p className="mb-4">
          Our unwavering focus on quality, coupled with effective processes and people, ensures that every project stays on track and
          delivers exceptional results. Our products are designed to merge the best pedagogical practices with cutting-edge technology,
          striving to achieve excellence and provide truly best-in-class solutions.
        </p>
        <p className="mb-4">
          Innercircle Softech is committed to proactive research and development of industry-leading IT solutions that will improve
          receivables business processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="flex items-start space-x-2">
            <span className="text-green-600">✔</span>
            <span>Imaginative user experience (UX) architects</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600">✔</span>
            <span>Industry certified software developers</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600">✔</span>
            <span>Battle hardened digital strategists</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600">✔</span>
            <span>Inescapable project managers</span>
          </div>
        </div>

        <p className="mb-4">
          Our team is composed of industry-experienced visionaries dedicated to building IT solutions that set the benchmark for
          industry standards. We foster an open environment where creativity thrives, initiatives are encouraged, and individual
          development and personal motivation are continually supported. We believe in professional and personal growth and demonstrate
          mutual respect and appreciation for one another, celebrating the contributions and achievements of every individual.
        </p>

        <p className="mb-4">
          Our team operates with clear responsibilities and guided by principles that our leaders consistently embody. We value individual
          expertise and take ownership of decisions within the framework of those policies.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Timely Delivery</h3>
        <p className="mb-4">
          By refining our project management processes over the years, we have reached optimal efficiency, with an average project
          finish faster than conventional agency timelines. We understand that quicker time to market results in faster ROI for its clients.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Knowledge and Experience</h3>
        <p className="mb-4">
          With a team of professionals, our talent pool includes one of the largest teams of developers. Seasoned project managers guide
          you through the entire process, and clever user experience (UX) architects craft intuitive flows for your visitors.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Managed Services</h3>
        <p className="mb-4">
          We don’t just launch your project and leave you to fend for yourself. We provide ongoing support to determine success,
          analyze weaknesses, and strategize for improvements. We understand it is a process, not a project, and we’re here to support
          you for the long term.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Our Work</h3>
        <p className="mb-4">
          We understand that software must work every bit as good as it looks. With excellence in mind, Innercircle Softech has worked
          with a wide range of clients to plan our custom design and development engagement. Don’t just take our word for it. We invite
          you to peruse our portfolio and get acquainted with some of our projects.
        </p>
      </section>
    </motion.div>
  );
}

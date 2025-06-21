import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Brain, LineChart } from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen py-16 bg-[#1a1a1a]">
        <motion.div
          className="container mt-5 facility-section"
          id="lab"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <div className="container mx-auto px-4 mt-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl mt-14 font-bold text-[#FFD700] mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300">
                My Services
              </h3>
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="bg-[#1f1f1f] rounded-xl p-6 shadow-md shadow-black/20 text-center w-72 flex flex-col justify-between hover:shadow-[#FFD700]/20 transition-transform hover:scale-[1.03]">
                <div>
                  <div className="mb-4 flex justify-center">
                    <Brain className="w-10 h-10 text-[#FFD700]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-gray-300 text-md">
                    Creating AI models for data-driven solutions and intelligent
                    systems.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1f1f1f] rounded-xl p-6 shadow-md shadow-black/20 text-center w-72 flex flex-col justify-between hover:shadow-[#FFD700]/20 transition-transform hover:scale-[1.03]">
                <div>
                  <div className="mb-4 flex justify-center">
                    <LineChart className="w-10 h-10 text-[#FFD700]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Data Science
                  </h3>
                  <p className="text-gray-300 text-md">
                    Analyzing and visualizing data for actionable business
                    insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

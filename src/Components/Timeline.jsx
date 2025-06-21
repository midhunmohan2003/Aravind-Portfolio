import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

function Timeline() {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      title: "BSc Computer Science",
      place: "University of Kerala",
      year: "2021 – 2024",
    },
    {
      title: "Higher Secondary Education",
      place: "Kerala State Board",
      year: "2019 – 2021",
    },
  ];

  const certifications = [
    {
      title: "Python Data Science - ML - AI - & Power BI",
      place: "Luminar Technolab",
    },
    {
      title: "Python Data Science",
      place: "NACTET",
    },
  ];

  const items = activeTab === "education" ? education : certifications;

  return (
    <div className="mt-16 w-full max-w-4xl mx-auto px-4">
      <motion.div
        className="container mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 text-lg font-semibold px-4 py-2 border-b-2 transition duration-300 ${
              activeTab === "education"
                ? "border-[#FFD700] text-[#FFD700]"
                : "border-transparent text-gray-400 hover:text-[#FFD700]"
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 text-lg font-semibold px-4 py-2 border-b-2 transition duration-300 ${
              activeTab === "certifications"
                ? "border-[#FFD700] text-[#FFD700]"
                : "border-transparent text-gray-400 hover:text-[#FFD700]"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Certifications
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600" />
          {/* Vertical Line for mobile */}
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gray-600" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
<div className="absolute left-6 top-2 w-4 h-4 bg-[#FFD700] rounded-full z-10 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 px-4 md:px-10 py-2 ${
                    index % 2 === 0
                      ? "text-left md:text-right md:pr-14"
                      : "text-left md:text-left md:pl-14 md:ml-auto"
                  } ml-10 md:ml-0`}
                >
                  <h4 className="text-white text-base md:text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.place}</p>
                  {activeTab === "education" && (
                    <div
                      className={`flex items-center mt-1 text-xs md:text-sm text-gray-500 ${
                        index % 2 === 0
                          ? "justify-start md:justify-end"
                          : "justify-start"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Timeline;

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion, useAnimation } from "framer-motion";

function Skills() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-16" style={{ background: "rgb(26, 26, 26)" }}>
        <motion.div
          className="container facility-section"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 mt-8">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
              <div className="mb-12 text-center">
                <h3 className="text-4xl mt-14 md:text-4xl font-bold text-[#FFD700] mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300">
                  My Skills
                </h3>
              </div>

              {/* Technical Skills */}
              <div className="w-full">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
                  Technical Skills
                </h2>
                <motion.div
  // className="grid grid-cols-2 md:grid-cols-3 gap-4"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { title: 'Programming Languages', skills: 'Python, SQL' },
                      { title: 'Data Analysis Tools', skills: 'Excel, Power BI, Jupyter Notebook' },
                      { title: 'Machine Learning', skills: 'Scikit-learn, NLP, Deep Learning' },
                      { title: 'Deep Learning', skills: 'PyTorch, Keras, TensorFlow, RNN' },
                      { title: 'Data Visualization', skills: 'Power BI, Matplotlib, Seaborn' },
                      { title: 'Database Management', skills: 'MySQL' },
                      { title: 'Cloud Platforms', skills: 'AWS' },
                      { title: 'Data Wrangling', skills: 'Pandas, NumPy, SQL' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-black/30 p-4 rounded-[20px] border border-[#FFD700]/20 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/20"
                      >
                        <h3 className="text-[#FFD700] font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.skills}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Soft Skills */}
              <div className="mt-16 w-full">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
                  Soft Skills
                </h2>
               <motion.div
  // className="grid grid-cols-2 md:grid-cols-3 gap-4"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Problem Solving",
                      "Critical Thinking",
                      "Team Collaboration",
                      "Communication",
                      "Creativity",
                      "Adaptability",
                      "Time Management",
                      "Leadership",
                      "Attention to Detail",
                      "Decision Making"
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="bg-black/30 p-4 text-center rounded-[20px] border border-[#FFD700]/20 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/20"
                      >
                        <p className="text-gray-300 font-medium">{skill}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;

import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Timeline from '../Components/Timeline'
import { motion } from "framer-motion";


function About() {
  return (
    <div>
        <Navbar/>
       <div className="min-h-screen py-16" style={{ background: 'rgb(26, 26, 26)'}}>
         <motion.div
        className="container mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          {/* Header */}
          <div className="mb-12 text-center">
            <h3 className="text-4xl mt-14 md:text-4xl font-bold text-[#FFD700] mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300">
              About Me
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 text-center">
            <p className="text-lg leading-relaxed">
              Hi I'm <span className="font-bold">Aravind G</span>, a detail-oriented Data Scientist from Trivandrum with a background in Computer Science and hands-on experience in data analytics, machine learning, and model deployment.
            </p>

            <p className="text-lg leading-relaxed">
              Skilled in Python, SQL, Power BI, and cloud platforms like AWS, I specialize in transforming data into insights that drive informed decisions. I completed a data science internship at Luminar Technolab, where I worked on large datasets, optimized predictive models, and created interactive dashboards.
            </p>

            <p className="text-lg leading-relaxed">
              I'm passionate about using data to solve real-world problems and continuously learning to stay ahead in this ever-evolving field.
            </p>

            {/* Quote */}
            <div className="mt-12 text-center">
              <blockquote className="text-xl italic text-[#FFD700] mb-2">
                "In God we trust. All others must bring data."
              </blockquote>
              <p className="text-gray-400">— W. Edwards Deming</p>
            </div>
          </div>

          {/* Skills Section */}
          {/* <div className="mt-16 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-6 relative block w-full text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:-translate-x-1/2 after:w-1/4 after:h-[2px] after:bg-[#FFD700]">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Programming Languages', skills: 'Python, SQL' },
                { title: 'Data Analysis Tools', skills: 'Excel, Power BI, Jupyter Notebook' },
                { title: 'Machine Learning', skills: 'Scikit-learn, NLP, Deep Learning' },
                { title: 'Data Visualization', skills: 'Power BI, Matplotlib, Seaborn' },
                { title: 'Database Management', skills: 'MySQL' },
                { title: 'Cloud Platforms', skills: 'AWS' },
                { title: 'Data Wrangling', skills: 'Pandas, NumPy, SQL' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/30 p-4 rounded-lg border border-[#FFD700]/20 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/20"
                >
                  <h3 className="text-[#FFD700] font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.skills}</p>
                </div>
              ))}
            </div>
          </div> */}
          <Timeline/>
        </div>
      </div>
      </motion.div>
    </div>
    <Footer/>
    </div>
  )
}

export default About

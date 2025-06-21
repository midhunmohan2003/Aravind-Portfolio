import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import navimed1 from "../assets/navimed1.jpg";
import navimed2 from "../assets/navimed2.jpg";
import navimed3 from "../assets/navimed3.jpg";
import bitcoinMain from "../assets/bitcoinMain.jpg";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Navi Med",
    description:
      "Academic major project designed and implemented a healthcare management platform with AI-driven self-diagnosis and patient management. Integrated machine learning algorithms for heart disease prediction, achieving 92% accuracy.",
    image:
      "https://assets.bizclikmedia.net/1200/0a36122230320003c08c4318f923f735:43a2cdcd54b25680910ae1e3db0d474b/digitization-in-healthcare-linkedin-1200x627.jpg.jpg",
    images: [navimed1, navimed2, navimed3],
    tech: ["Python", "MySQL", "Machine Learning", "Flask", "React"],
  },
  {
    title: "Bitcoin Price Prediction",
    description:
      "Developed a Bitcoin Price Prediction Web App using Streamlit to provide a user-friendly interface for forecasting Bitcoin's future prices. The application utilizes machine learning models to analyze historical market data, including open, high, low, close prices, and trading volume.",
    image:
      "https://img.freepik.com/premium-photo/bitcoin-dark-background-ethereum-bitcoin-rise-fall-price-great-value-cryptocurrency-economy-market-trading-new-opportunities-bitcoin_217333-166.jpg?size=626&ext=jpg",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    images: [bitcoinMain],
  },
  {
    title: "Sales Insights – Brick & Mortar Business",
    description:
      "Developed a comprehensive sales analytics dashboard for AtliQ Hardware, a brick-and-mortar retail business, using Power BI and SQL to uncover actionable insights from historical sales data. The project focused on visualizing key performance indicators such as revenue trends, product category performance, regional sales distribution, and monthly growth rates.",
    image:
      "https://thumbs.dreamstime.com/b/selling-data-vector-illustration-tiny-information-purchase-persons-concept-selling-data-vector-illustration-flat-tiny-information-158846377.jpg",
    tech: ["Python", "SQL", "Power BI"],
  },
  {
    title: "Flight Price Prediction",
    description:
      "Built a machine learning model to predict flight prices based on features like departure time, arrival time, airline, source, destination, and duration. Applied Linear Regression algorithm and optimized results using feature engineering and data visualization techniques.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/452/260/small_2x/3476info.jpg",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
  },
  {
    title: "HR Data Analytics",
    description:
      "Designed a Power BI dashboard to help HR teams analyze employee demographics, attrition, and performance trends. Enabled strategic decisions on hiring and retention with SQL-powered datasets and data visualizations.",
    image:
      "https://st4.depositphotos.com/37594510/41726/v/600/depositphotos_417261544-stock-illustration-data-driven-analytics-vector.jpg",
    tech: ["Python", "SQL", "Power BI"],
  },
];

function Projects() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen py-16 bg-[#1a1a1a]">
        <motion.div
          className="container mt-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 mt-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl mt-14 font-bold text-[#FFD700] mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300">
                My Projects
              </h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] w-80 h-auto flex flex-col justify-between rounded-2xl shadow-lg shadow-black/30 overflow-hidden transition-transform hover:scale-[1.03] duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <h4 className="text-xl font-bold text-[#FFD700] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;

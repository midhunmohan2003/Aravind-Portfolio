import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.warning("All fields are required.");
      return;
    }

    emailjs
      .sendForm("service_8vpoq0t", "template_fot9kof", form.current, {
        publicKey: "jHozZ6rPSfRwErBvn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          toast.success("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen mt-6 py-16 px-4 md:px-10 bg-[#1a1a1a]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-12 text-center">
            <h3 className="text-4xl mt-14 md:text-4xl font-bold text-[#FFD700] mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300">
              Contact Me
            </h3>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Section: Contact Info */}
            <div className="mt-8 w-full max-w-3xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Email Card */}
                <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg shadow-black/20 flex flex-col items-start gap-4 hover:shadow-[#FFD700]/20 transition-transform hover:scale-[1.03]">
                  <div className="text-[#FFD700] text-3xl">
                    <i className="bx bx-mail-send" />
                  </div>
                  <h4 className="text-xl font-semibold">Email</h4>
                  <span className="text-gray-400">iaravind.99o@gmail.com</span>
                  <a
                    href="mailto:iaravind.99o@gmail.com"
                    className="text-[#FFD700] font-medium hover:underline flex items-center gap-1"
                  >
                    Message me <i className="bx bx-right-arrow-alt text-lg"></i>
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-lg shadow-black/20 flex flex-col items-start gap-4 hover:shadow-[#FFD700]/20 transition-transform hover:scale-[1.03]">
                  <div className="text-[#FFD700] text-3xl">
                    <i className="bx bxl-whatsapp" />
                  </div>
                  <h4 className="text-xl font-semibold">WhatsApp</h4>
                  <span className="text-gray-400">+91 8943568391</span>
                  <a
                    href="https://wa.me/918943568391 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD700] font-medium hover:underline flex items-center gap-1"
                  >
                    Message me <i className="bx bx-right-arrow-alt text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg shadow-black/30">
              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#FFD700]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#FFD700]"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                  className="w-full p-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#FFD700]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#FFD700] text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </div>
  );
}

export default Contact;

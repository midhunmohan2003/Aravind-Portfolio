import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-[linear-gradient(270deg,#000,#222)] py-8">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* My Portfolio Section */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700]">
                My Portfolio
              </h4>
              <p className="text-gray-300">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700]">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-[#FFD700] transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">About</a></li>
                <li><a href="/skills" className="text-gray-300 hover:text-[#FFD700] transition-colors">Skills</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-[#FFD700] transition-colors">Services</a></li>
                <li><a href="/projects" className="text-gray-300 hover:text-[#FFD700] transition-colors">Projects</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700]">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: iaravind.99o@gmail.com</li>
                <li>Phone: +91 8943568391</li>
                <li>Whatsapp: 8943568391</li>
              </ul>
            </div>

            {/* Follow Me Section */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-1/2 after:h-[2px] after:bg-[#FFD700]">
                Follow Me
              </h4>
              <div className="flex flex-col space-y-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/aravind-g-99o/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/_aravind__aravind_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.6a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.25-1.45a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0zM4.8 7.5c0-1.49 1.21-2.7 2.7-2.7h9c1.49 0 2.7 1.21 2.7 2.7v9c0 1.49-1.21 2.7-2.7 2.7h-9a2.7 2.7 0 0 1-2.7-2.7v-9z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Aravind-99o" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12.005c0 4.425 2.865 8.185 6.838 9.504.5.09.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.345-3.369-1.345-.455-1.157-1.11-1.466-1.11-1.466-.909-.619.07-.607.07-.607 1.003.07 1.531 1.033 1.531 1.033.892 1.529 2.34 1.088 2.91.832.092-.647.35-1.087.636-1.337-2.22-.252-4.554-1.112-4.554-4.95 0-1.093.39-1.988 1.029-2.688-.104-.253-.446-1.273.097-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.85.004 1.705.114 2.5.336 1.91-1.296 2.75-1.026 2.75-1.026.544 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.696-4.566 4.944.359.308.678.919.678 1.854 0 1.338-.012 2.418-.012 2.746 0 .268.18.576.688.479A10.008 10.008 0 0 0 22 12.005C22 6.475 17.525 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-gray-300 mt-8">
            Made with by <span className="font-semibold">Midhun</span> | © {new Date().getFullYear()} Aravind Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

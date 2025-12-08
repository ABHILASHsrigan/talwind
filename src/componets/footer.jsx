import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b2545] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
              B
            </div>
            <span className="text-xl font-semibold text-white">Brooklyn</span>
          </div>

          {/* nav */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 uppercase tracking-widest">
            {["Home", "About", "Process", "Portfolio", "Blog", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>Copyright 2025 Picto.</p>
          <p>
            Developed with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-white font-medium">ThemeWagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

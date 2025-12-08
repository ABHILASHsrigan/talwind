import React from 'react';

const Part1 = () => {
  return (
    <div id="process" className="w-full bg-gray-100 py-54">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col justify-center relative top-50">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Work Process
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Driven by design and powered by code, I create digital interfaces 
            that feel intuitive and perform seamlessly. Every layout, animation, 
            and component is crafted with intention — merging usability with 
            visual clarity.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            I blend clean design with efficient code to build engaging, 
            user-friendly web experiences that stand out.
          </p>
        </div>

        {/* RIGHT SIDE BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative top-50">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 -top-4 relative cursor-pointer">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 
              group-hover:bg-purple-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Research</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understanding goals, users, and insights to build strong foundations.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 top-0 relative cursor-pointer">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 
              group-hover:bg-purple-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Analyze</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clean, structured planning transforming ideas into clear workflows.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 -top-2 relative cursor-pointer">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 
              group-hover:bg-purple-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M12 20h9"/>
                <path strokeWidth="2" d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting seamless and engaging digital experiences with precision.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 top-4 relative cursor-pointer">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 
              group-hover:bg-purple-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M3 4h18M3 12h18M3 20h18"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Launch</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Delivering responsive, optimized, and scalable digital products.
            </p>
          </div>
    </div> 
        </div>
      </div>
    
  );
};

export default Part1;

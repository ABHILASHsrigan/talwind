import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full h-210 bg-gradient-to-tr from-purple-200 via-white to-green-100 pt-24">

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Hello, I’m <br />
            <span>Brooklyn Gilbert</span>
          </h1>

          <p className="text-gray-600 mt-4 md:text-lg">
            I'm a Freelance <span className="font-semibold text-purple-600">UI/UX Designer</span> and
            <span className="font-semibold text-purple-600"> Developer</span> based in London.
            I create beautiful and immersive digital experiences.
          </p>

          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
            Say Hello!
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 bg-purple-100 mt-10 rounded-md overflow-hidden shadow-md">
            <div className="py-6 text-center">
              <h3 className="text-xl font-bold">15 Y.</h3>
              <p className="text-gray-500 text-xs">Experience</p>
            </div>

            <div className="py-6 text-center border-l border-r border-purple-200">
              <h3 className="text-xl font-bold">250+</h3>
              <p className="text-gray-500 text-xs">Projects</p>
            </div>

            <div className="py-6 text-center">
              <h3 className="text-xl font-bold">58</h3>
              <p className="text-gray-500 text-xs">Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center order-first md:order-last">
          <div className="bg-white p-5 rounded-3xl shadow-xl">
            <img
              src="person.png"
              className="w-[300px] md:w-[340px] rounded-2xl object-cover"
              alt="profile"
            />
          </div>
        </div>
      </div>

{/* ================= MODIFIED SECOND WHITE CARD (updated) ================= */}
<div id="about" className="w-full px-6 md:px-16 pb-20 -mt-1">
  {/* note: overflow-visible and relative so the social bar can overlap */}
  <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-visible relative flex flex-col md:flex-row hover:scale-105 transform transition duration-500">

    {/* LEFT IMAGE BLOCK */}
    <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-100 via-white to-green-100 flex justify-center items-center p-10">
      <img
        src="person.png"
        className="w-60 md:w-64 rounded-3xl shadow-xl border-4 border-white"
        alt="profile2"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
        I am a Professional <br /> User Experience Designer
      </h2>

      <p className="text-gray-600 mt-3 text-sm md:text-base">
        I design digital products that are functional and visually appealing.
        My work focuses on modern UI design and smooth interactions.
      </p>

      <p className="text-gray-600 mt-3 text-sm md:text-base">
        I specialize in websites, dashboards, and interactive experiences.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-purple-600 text-white px-5 py-2 rounded-md text-sm hover:bg-purple-700 transition duration-300">
          My Projects
        </button>

        <button className="border border-gray-300 px-5 py-2 rounded-md text-sm hover:bg-gray-100 transition duration-300">
          Download CV
        </button>
      </div>
    </div>

    {/* ---------------- SOCIAL ICONS (overlapping, centered) ---------------- */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 md:-bottom-8 z-50">
      {/* optional white rounded pill behind icons */}
      <div className="bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-3">
        {/* Icon button */}
        <a
          href="#"
          aria-label="Facebook"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-sm"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-sm"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-sm"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="#"
          aria-label="Behance"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-sm"
        >
          <i className="fab fa-behance"></i>
        </a>
      </div>
    </div>
    {/* -------------------------------------------------------------------- */}

  </div>
</div>

    </div>
  );
};

export default Hero;

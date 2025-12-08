import React from "react";

const services = [
  {
    title: "Product Strategy",
    description:
      "Research-backed roadmaps, workshops, and client journeys that turn fuzzy ideas into prioritized deliverables."
  },
  {
    title: "Experience Design",
    description:
      "UI direction, prototyping, and accessibility-focused systems that feel premium across devices."
  },
  {
    title: "Design Systems",
    description:
      "Component libraries, documentation, and tools that keep teams shipping polished updates quickly."
  },
  {
    title: "Creative Direction",
    description:
      "Art direction, motion concepts, and brand refreshes that elevate perception and storytelling."
  }
];

const Service = () => {
  return (
    <section id="services" class="w-full bg-gray-100 py-20 px-6 md:px-16">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* <!-- LEFT CONTENT --> */}
    <div>
      <h2 class="text-3xl font-bold text-gray-800">What I do?</h2>
      <p class="mt-4 text-gray-600 leading-relaxed">
        I specialize in designing user experiences, crafting engaging interfaces, and 
        building robust web applications that deliver value and usability.
      </p>
      <p class="mt-4 text-gray-600 leading-relaxed">
        My approach combines creativity and technical expertise to deliver solutions 
        that are visually appealing and highly functional for users.
      </p>

      <button class="mt-6 px-5 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
        Say Hello!
      </button>
    </div>

        {/* <!-- RIGHT CARDS --> */}
    <div class="space-y-6">

      {/* <!-- CARD 1 --> */}
      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-transparent 
                  hover:border-purple-600 hover:shadow-black/30 hover:-translate-y-1 
                  transition-all duration-300 cursor-pointer">
        <h3 class="text-lg font-semibold text-gray-800">User Experience (UX)</h3>
        <p class="mt-2 text-gray-600 text-sm">
          I design intuitive and enjoyable experiences by understanding user needs, 
          conducting research, and creating wireframes and prototypes to enhance usability.
        </p>
      </div>

      {/* <!-- CARD 2 --> */}
      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-transparent 
                  hover:border-purple-600 hover:shadow-black/30 hover:-translate-y-1 
                  transition-all duration-300 cursor-pointer">
        <h3 class="text-lg font-semibold text-gray-800">User Interface (UI)</h3>
        <p class="mt-2 text-gray-600 text-sm">
          I craft visually appealing and consistent interfaces, focusing on layout, 
          color, and typography to ensure a seamless and engaging user journey.
        </p>
      </div>

      {/* <!-- CARD 3 --> */}
      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-transparent 
                  hover:border-purple-600 hover:shadow-black/30 hover:-translate-y-1 
                  transition-all duration-300 cursor-pointer">
        <h3 class="text-lg font-semibold text-gray-800">Web Development</h3>
        <p class="mt-2 text-gray-600 text-sm">
          I build responsive and high-performance web applications using modern 
          technologies, ensuring accessibility, scalability, and maintainability.
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default Service;

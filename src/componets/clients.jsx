import React from "react";
import "../marquee.css";

const Clients = () => {
  return (
    <div className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Happy Clients</h2>

      <p className="text-gray-600 max-w-xl mx-auto mt-3">
        I've had the pleasure of working with a diverse range of companies,
        from startups to established brands.
      </p>

      {/* Slider */}
<div className="mt-30 overflow-hidden">
  <div className="max-w-7xl mx-auto px-8">

    <div className="marquee flex items-center gap-50 opacity-70 hover:opacity-100 transition">

      {/* Your logos */}
      <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/2504/2504922.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" className="h-10" />

      {/* Duplicate for infinite scroll */}
      <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/2504/2504922.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="h-10" />
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" className="h-10" />

    </div>
  </div>
</div>
    </div>

    
  );
};

export default Clients;

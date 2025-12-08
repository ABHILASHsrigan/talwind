

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-6 md:px-16 flex justify-between items-center bg-white/60 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          B
        </div>
        <h1 className="font-semibold text-lg">Brooklyn</h1>
      </div>

      {/* NAV LINKS – Desktop */}
      <ul className="hidden md:flex gap-8 text-gray-600 text-sm font-medium">
       
        {[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Process", href: "#process" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Blog", href: "#blog" },
          { label: "Services", href: "#services" },
        
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-purple-600 cursor-pointer transition-colors rounded-full px-3 py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
   
      {/* CONTACT BUTTON – Desktop */}
     

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-2xl cursor-pointer">
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

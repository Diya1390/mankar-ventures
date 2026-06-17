import React from "react";
import logo from "./assets/logo.png";

import rf1 from "./assets/roofing/rf1.jpeg";
import rf2 from "./assets/roofing/rf2.jpeg";
import rf3 from "./assets/roofing/rf3.jpeg";
import rf4 from "./assets/roofing/rf4.jpeg";
import rf5 from "./assets/roofing/rf5.jpeg";

import sccc1 from "./assets/stonecoated/sccc1.jpeg";
import scc2 from "./assets/stonecoated/scc2.jpeg";
import scc3 from "./assets/stonecoated/scc3.jpeg";
import scc4 from "./assets/stonecoated/scc4.jpeg";
import scc5 from "./assets/stonecoated/scc5.jpeg";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-10" />
            <span className="font-bold text-xl">Mankar Ventures</span>
          </div>

          <div className="flex gap-6 text-sm md:text-base">
            <a href="#home">Home</a>
            <a href="#asphalt">Asphalt</a>
            <a href="#stone">Stone Coated</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-[60vh] flex items-center justify-center bg-slate-900 text-white"
      >
        <div className="text-center px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Mankar Ventures
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Premium Roofing Solutions You Can Trust
          </p>
        </div>
      </section>

      {/* ASPHALT ROOFING */}
      <section id="asphalt" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">
            Asphalt Roofing Shingles
          </h2>

          <p className="text-gray-600 mb-6">
            High-quality asphalt shingles designed for durability, waterproofing,
            and long-lasting protection for residential and commercial buildings.
          </p>

          <div className="flex gap-4 overflow-x-auto">
            <img src={rf1} className="w-80 h-60 object-cover rounded-xl" />
            <img src={rf2} className="w-80 h-60 object-cover rounded-xl" />
            <img src={rf3} className="w-80 h-60 object-cover rounded-xl" />
            <img src={rf4} className="w-80 h-60 object-cover rounded-xl" />
            <img src={rf5} className="w-80 h-60 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* STONE COATED */}
      <section id="stone" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">
            Stone Coated Roofing Sheets
          </h2>

          <p className="text-gray-600 mb-6">
            Premium stone-coated sheets offering modern design, high strength,
            and weather resistance for premium buildings.
          </p>

          <div className="flex gap-4 overflow-x-auto">
            <img src={sccc1} className="w-80 h-60 object-cover rounded-xl" />
            <img src={scc2} className="w-80 h-60 object-cover rounded-xl" />
            <img src={scc3} className="w-80 h-60 object-cover rounded-xl" />
            <img src={scc4} className="w-80 h-60 object-cover rounded-xl" />
            <img src={scc5} className="w-80 h-60 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Our Projects
          </h2>

          <p className="text-gray-600 mb-6">
            Successfully completed roofing projects across residential,
            commercial, and industrial sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <img src={rf1} className="rounded-xl h-64 w-full object-cover" />
            <img src={scc2} className="rounded-xl h-64 w-full object-cover" />
            <img src={rf3} className="rounded-xl h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p>📞 9850684512</p>
            <p>📧 ishanfabrication.2013@gmail.com</p>
            <p>📍 Nighoje, Pune</p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const message = e.target.message.value;

              const text = `Hello, I am ${name}%0APhone: ${phone}%0AMessage: ${message}`;

              window.open(
                `https://wa.me/919850684512?text=${text}`,
                "_blank"
              );
            }}
          >
            <input
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded text-black"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded text-black"
            />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 rounded text-black"
            />

            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2025 Mankar Ventures. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
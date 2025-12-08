import React from "react";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="bg-white text-black py-24" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-purple-400">
              let&apos;s collaborate
            </p>
            <h2 className="text-4xl font-semibold mt-3">
              Ready to bring your next idea to life?
            </h2>
            <p className="mt-4 text-black-300">
              Whether you need a complete brand refresh, a new responsive website, or a
              fully-crafted design system, I&apos;m here to help. Drop the details below
              and I&apos;ll be in touch with a proposal within 24 hours.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-full bg-purple-500/20 text-black-200">
                <FaLocationDot />
              </span>
              <div>
                <p className="text-black-400 text-sm">Location</p>
                <p>Brooklyn, New York</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-full bg-purple-500/20 text-black-200">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-black-400 text-sm">Email</p>
                <p>hello@brooklynstudio.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-full bg-purple-500/20 text-black-200">
                <FaPhone />
              </span>
              <div>
                <p className="text-black-400 text-sm">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-2xl text-purple-400">
            <FaFacebookF className="hover:text-black transition" />
            <FaInstagram className="hover:text-black transition" />
            <FaXTwitter className="hover:text-black transition" />
            <FaLinkedinIn className="hover:text-black transition" />
            <FaBehance className="hover:text-black transition" />
          </div>
        </div>

        <form className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
            />
             <input
              type="loaction"
              placeholder=" location"
              className="bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
            />
          </div>
           <input
              type="text"
              placeholder="budget"
              className="bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
            />
          <input
            type="text"
            placeholder="subject"
            className="w-full bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
          />
          <textarea
            rows="4"
            placeholder="message"
            className="w-full bg-black border border-white/40 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl px-4 py-3 font-semibold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

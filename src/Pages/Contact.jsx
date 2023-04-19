import React, { useRef, useState } from "react";
import Ripple from "../components/button/Ripple";
import Footer from "../components/Footer";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  // const sectionHeight = "h-[calc(100vh-92px)]";

  return (
    <div className={`flex flex-col justify-between ${styles.pageHeight}`}>
      <section
        className={`${styles.sectionHeight} min-h-[700px] w-full flex items-center justify-center font-poppins`}
      >
        <div className="sm:max-w-2xl max-w-sm w-full px-2 sm:px-14">
          <h1 className="text-white lg:text-3xl text-2xl  uppercase font-extrabold text-center">
            Contact
            <span className="rounded-full inline-block lg:w-2 lg:h-2 md:w-[6px] md:h-[6px] w-1 h-1 ml-[-2px]   bg-slate-400 " />
          </h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col lg:gap-8 gap-5  p-5 rounded-sm"
          >
            <label className="flex flex-col">
              <span className="label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input "
              />
            </label>
            <label className="flex flex-col">
              <span className="label">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your web address"
                className="input"
              />
            </label>
            <label className="flex flex-col">
              <span className="label">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter you message"
                className="textarea"
              />
            </label>

            <Ripple
              type="submit"
              className="bg-[rgba(255,255,255,0.1)] border border-white/0 rounded-sm sm:py-3 py-2 px-6  outline-none w-fit text-gray-300 font-semibold"
            >
              {loading ? "Sending..." : "Send"}
            </Ripple>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

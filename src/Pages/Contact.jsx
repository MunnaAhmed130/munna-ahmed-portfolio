import React, { useRef, useState } from "react";
import Ripple from "../components/button/Ripple";
import Footer from "../components/Footer";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";

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
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Munna",
          from_email: form.email,
          to_email: "munnaahmed2025@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("something went wrong");
        }
      );
  };
  // const sectionHeight = "h-[calc(100vh-92px)]";

  return (
    <div className={`flex flex-col justify-between ${styles.pageHeight}`}>
      <section
        className={`${styles.sectionHeight} relative md:min-h-[700px] min-h-[500px] w-full ${styles.flexCenter} font-poppins`}
      >
        <div className="sm:max-w-2xl max-w-sm w-full px-2 sm:px-14">
          <h1 className="text-white lg:text-3xl text-2xl  uppercase font-extrabold text-center">
            Contact
            <span className="rounded-full inline-block lg:w-2 lg:h-2 md:w-[6px] md:h-[6px] w-1 h-1 ml-[-2px]  color-dot" />
          </h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col lg:gap-8 gap-5 p-5 rounded-sm"
          >
            <label className="flex flex-col">
              <span className="label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="label">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your web address"
                className="input"
                required
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
                required
              />
            </label>

            <Ripple
              type="submit"
              className="form-btn sm:py-3 py-2 px-6 w-fit tracking-widest sm:text-base text-sm "
            >
              {loading ? "Sending..." : "Send"}
            </Ripple>
          </form>
        </div>
      </section>
      <div
        className={`absolute  inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] w-full h-full z-[-1] bg-no-repeat bg-cover  bg-center opacity-60 transition-all duration-300 `}
      />
      <Footer />
    </div>
  );
};

export default Contact;

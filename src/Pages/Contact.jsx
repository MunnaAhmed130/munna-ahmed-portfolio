import React, { useRef, useState } from "react";
import Ripple from "../components/button/Ripple";
import Footer from "../components/shared/Footer";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import Dot from "../components/shared/Dot";
import { Tilt } from "react-tilt";

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

  const formOptions = {
    reverse: false,
    max: 5,
    perspective: 1000,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.1,1,.1,.99)",
  };

  // const sectionHeight = "h-[calc(100vh-92px)]";
  // ${styles.flexCenter}
  // flex flex-col   justify-between

  return (
    <div className={` relative overflow-hidden ${styles.pageHeight}`}>
      <section
        className={`${styles.sectionHeight}  md:min-h-[700px] min-h-[500px]  font-poppins flex flex-col  justify-evenly items-center max-w-7xl w-full mx-auto overflow-hidden`}
      >
        <div className="2xl:max-w-2xl lg:max-w-[40rem] md:max-w-xl sm:max-w-lg max-w-sm w-full px-2 sm:px-14">
          {/* <Tilt options={formOptions}> */}
          <h3 className="sub-title">Get in touch</h3>
          <h1 className="text-white lg:text-3xl text-2xl  uppercase font-extrabold text-center ">
            Contact
            <Dot className="ml-[-2px] " />
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
          {/* </Tilt> */}
        </div>
      </section>

      <Footer />
      {/* <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] w-full h-auto z-[-1] bg-no-repeat 2xl:bg-[center_left_300px] xl:bg-[center_left_200px]  lg:bg-[center_left_150px]  sm:bg-[left_100px_center] xl:scale-125 lg:scale-150 sm:scale-150 scale-[2] sm:bg-cover bg-contain bg-[center_top_50%] sm:opacity-100 opacity-60 transition-all duration-300 `}
      /> */}
      <div
        className={`absolute  inset-0 bg-[url('https://i.ibb.co/Qdmz74y/laptop-half-closed-tiny.jpg')] w-full h-full z-[-1] bg-no-repeat bg-cover   bg-center opacity-40 transition-all duration-300 `}
      />
    </div>
  );
};

export default Contact;

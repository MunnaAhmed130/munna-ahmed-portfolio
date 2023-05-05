import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Ripple from "../components/button/Ripple";
import Footer from "../components/shared/Footer";
import { styles } from "../styles";
import Dot from "../components/shared/Dot";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  // const [error, setError] = useState({
  //   nameError: "",
  //   emailError: "",
  //   messageError: "",
  // });

  console.log(error);
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
    // console.log(formRef);
    // if (form.name) {
    //   console.log(form.name);
    // }

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

  // variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 0 },
    },
  };

  const buttonVariants = {
    hidden: { rotate: -20, y: 10, opacity: 0 },
    visible: {
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: {
        // stiffness: 1000,
        // duration: 0.15,
        delay: 0.6,
      },
    },
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  return (
    <div className={` relative overflow-hidden ${styles.pageHeight}`}>
      <section
        className={`${styles.sectionHeight}  md:min-h-[700px] min-h-[500px]  font-poppins flex flex-col  justify-evenly items-center max-w-7xl w-full mx-auto overflow-hidden`}
      >
        <div className="2xl:max-w-2xl lg:max-w-[40rem] md:max-w-xl sm:max-w-lg max-w-sm w-full px-2 sm:px-14">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: -25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", duration: 0.5 }}
          >
            <h3 className="sub-title">Get in touch</h3>

            <h1 className="text-white lg:text-3xl text-2xl  uppercase font-extrabold text-center ">
              Contact
              <Dot className="ml-[-3px] " />
            </h1>
          </motion.div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col lg:gap-8 gap-5 p-5 rounded-sm"
          >
            <motion.label
              initial={{ rotate: 10, y: 50, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              // variants={inputVariants}
              // initial="hidden"
              // animate="visible"
              className="flex flex-col"
            >
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
            </motion.label>
            <motion.label
              initial={{ rotate: -20, y: 50, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              // variants={inputVariants}
              // initial="hidden"
              // animate="visible"
              className="flex flex-col"
            >
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
            </motion.label>
            <motion.label
              initial={{ rotate: 10, y: 50, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              // variants={inputVariants}
              className="flex flex-col"
            >
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
            </motion.label>
            <motion.span variants={buttonVariants} className="inline-block">
              <Ripple
                type="submit"
                className="form-btn sm:py-3 py-2 px-6 w-fit tracking-widest sm:text-base text-sm "
              >
                {loading ? "Sending..." : "Send"}
              </Ripple>
            </motion.span>
          </motion.form>
        </div>
      </section>
      <Footer />
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 z-[-1] font-poppins  ${styles.pageHeight} `}
      >
        <div
          className={`absolute  inset-0 bg-[url('https://i.ibb.co/Qdmz74y/laptop-half-closed-tiny.jpg')] w-full h-full z-[-1] bg-no-repeat bg-cover   bg-center opacity-40 transition-all duration-300 `}
        />
      </motion.div>
    </div>
  );
};

export default Contact;

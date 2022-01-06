import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "./Contact.css"
import Footer from '../Footer/Footer';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const { name, subject, message, email } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send('service_vbn8xrp', 'template_7ywgh0l', templateParams, 'user_TQOZfpaOEzhRwWYzHRoeb');

            reset();
        } catch (e) {
            console.log(e)
        }
    };
    return (
        <div id="contact">
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your name" required="required" /> <br />
                <input {...register("email")} placeholder="Your email" required="required" /> <br />
                <input {...register("subject")} placeholder="Subject" required="required" /> <br />
                <textarea {...register("message")} placeholder="Write your message" style={{ height: '100px' }} required="required" /> <br />
                <Button type="submit" className="py-2 px-4">Send</Button>
            </form>
            <Footer />
        </div>
    );
};

export default Contact;
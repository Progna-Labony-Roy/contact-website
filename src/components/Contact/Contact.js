import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // e.reset();

    emailjs
      .sendForm(
        "service_h8blw8w",
        "template_mka0hfl",
        form.current,
        "AtXX8i6MtucT3D9P1"
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result.text){
            toast.success("Email has sent successfully");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="contact-div px-20 my-36 flex">
      <div className="w-1/2 ">
        <section className="py-5">
          <div className="flex py-1">
            <i className="fa-solid fa-phone pr-2 pt-1"></i>
            <p className="font-bold">Call us</p>
          </div>
          <p className="text-xs">+919354566860</p>
        </section>
        <section className="py-5">
          <div className="flex py-1">
            <i className="fa-solid fa-location-dot pr-2 pt-1"></i>
            <p className="font-bold">Location</p>
          </div>
          <p className="text-xs">Chaziabad, Uttar Pradesh</p>
        </section>
        <section className="py-5">
          <div className="flex py-1">
            <i className="fa-solid fa-globe pr-2 pt-1"></i>
            <p className="font-bold">Mail us</p>
          </div>
          <p className="text-xs">info@markall.in</p>
        </section>
      </div>

      
      <div className="container">
	<div className="card">	
  <h2 className="font-semibold text-2xl pl-4 mt-3">
				Contact Now
			</h2>
      <p className="pl-4 text-sm mb-3">Contact us for more detais</p>
		<form className="card-form"  ref={form} onSubmit={sendEmail}>
			<div className="input">
				<input type="text" name="user_name" className="input-field" required/>
				<label className="input-label">Name</label>
			</div>
						<div className="input">
				<input type="text" name="user_email" className="input-field" required/>
				<label className="input-label">Email</label>
			</div>
						<div className="input">
				<input type="text" className="input-field" required/>
				<label className="input-label">Phone</label>
			</div>
						<div className="input">
				<input type="text" className="input-field" />
				<label className="input-label">Message</label>
			</div>
			<div className="action">

        <input type="submit" value="Send" className="action-button mb-5"/>
			</div>
		</form>
		
	</div>
</div>
      </div>
  );
};

export default Contact;

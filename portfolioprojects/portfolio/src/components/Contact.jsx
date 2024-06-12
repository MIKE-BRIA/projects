import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  //   const [status, setStatus] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setStatus("Sending...");
  //     emailjs
  //       .send(
  //         "DkzzbNKR1rh-BjReE", // Replace with your EmailJS service ID
  //         "template_h8ulcgm", // Replace with your EmailJS template ID
  //         formData,
  //         "DkzzbNKR1rh-BjReE" + "_" + "5xQyeaEHKaXI_qWJZoCCb" // Replace with your EmailJS user ID
  //       )
  //       .then((response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         setStatus("Message sent successfully!");
  //         setFormData({ name: "", email: "", message: "" });
  //       })
  //       .catch((err) => {
  //         console.error("FAILED...", err);
  //         setStatus("Failed to send message. Please try again.");
  //       });
  //   };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xgr69r7", "template_h8ulcgm", form.current, {
        publicKey: "dru-xhVKQUuMZ3_G7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main
      id="contact"
      className="bg-blue-100 p-8 max-w-large m-auto flex flex-col items-center "
    >
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="w-full md:w-6/12">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            disabled
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            disabled
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="5"
            disabled
            required
          />
        </div>
      </form>
      <a href="mailto:michaelbrian466@gmail.com">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
          Click here to send message
        </button>
      </a>
    </main>
  );
};

export default Contact;

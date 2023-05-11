import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    user_email: "",
    tel: "",
    message: "",
  });
  //modal state
  const [modalOpen, setModalOpen] = useState(false);

  //modal text
  const [modalText, setModalText] = useState("");

  //toggle modal
  const close = () => setModalOpen(false);
  //handleChage function
  const handleChange = (e) => {
    setFormValues((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // modal logic
    // if sends valid values
    if (formValues.firstName && formValues.message) {
      setModalOpen(!modalOpen);
      setModalText("Message sent successfully!");
      setFormValues({ firstName: "", user_email: "", message: "" });
      // if user user sends empty input values or invalid credentials
    } else {
      setModalOpen(true);
      setModalText("Please enter valid values!");
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details how to use our product? Let us know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              onChange={handleChange}
              value={formValues.user_email}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="firstName"
              onChange={handleChange}
              value={formValues.firstName}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              onChange={handleChange}
              value={formValues.message}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-blue-900"
          >
            Send message
          </button>
        </form>
      </div>
      {/* Modal component conditional rendering*/}
      {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={close} text={modalText} />
      )}
    </section>
  );
};

export default Contact;

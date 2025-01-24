import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("https://portfolio-api-bice.vercel.app/", {
        method: "POST",
        body: JSON.stringify({ name, email, phoneNo, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json(); // Parse the response JSON
      localStorage.setItem("user", JSON.stringify(result));
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setPhoneNo("");
      setMessage("");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send the message.");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form className="bg-slate-200 w-96 px-8 py-6 rounded-xl" onSubmit={collectData}>
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">Mobile Number</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNo"
              type="text"
              placeholder="Enter your Mobile Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your Query"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

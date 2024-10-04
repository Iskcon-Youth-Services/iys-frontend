import { useState } from "react";
import { SVGGraphic } from "./Svg_.jsx";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Here you can add the logic to send the data
    console.log("Data submitted:", { name, email, subject, message });

    // Reset form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="relative p-[1px] rounded-lg bg-primary-gradient mb-8 w-80 h-auto mr-2">
      <div className="absolute -top-2 left-0 right-0">
        <SVGGraphic />
      </div>
      <form onSubmit={handleSubmit} className="bg-customColor p-4 rounded-lg">
        <div className="mb-6">
          <label className="text-start text-[#BCA47F] font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-start text-[#BCA47F] font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-start text-[#BCA47F] font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-start text-[#BCA47F] font-bold mb-2">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={!name || !email || !subject || !message}
          className={`w-full bg-primary-gradient text-white py-2 rounded-lg font-semibold mb-4 ${!name || !email || !subject || !message ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Send
        </button>
      </form>
      <div className="absolute -bottom-2 left-0 right-0">
        <SVGGraphic />
      </div>
    </div>
  );
}

export default ContactUs;

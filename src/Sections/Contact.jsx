import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert.jsx";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tg0ygug",
        "template_pa1ixy3",
        {
          from_name: form.name,
          to_name: "Yonas Esubalew",
          from_email: form.email,
          to_email: "yonasatwork999@gmail.com",
          message: form.message,
        },
        "VyCV1LQxsBjL42s6d"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen object-cover"
        />
        <div className="contact-container relative z-10 p-5 sm:p-10 bg-opacity-50 rounded-lg shadow-lg">
          <h3 className="head-text text-center">Let's Talk</h3>
          <p className="text-lg text-center text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full pl-10 py-2 pr-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white placeholder-gray-400 transition-all duration-200"
                placeholder="e.g, Alan Turing"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full pl-10 py-2 pr-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white placeholder-gray-400 transition-all duration-200"
                placeholder="e.g, alan2123@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full pl-10 py-2 pr-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white placeholder-gray-400 resize-none transition-all duration-200"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-all duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

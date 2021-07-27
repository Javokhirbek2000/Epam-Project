import React, { useEffect, useState } from "react";
import { send as sendEmail } from "emailjs-com";
import { useAuth0 } from "@auth0/auth0-react";
import "./RecommendButton.scss";

export default function RecommendButton({ id, className }) {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnState, setBtnState] = useState({ type: "primary", text: "Send" });
  const [email, setEmail] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!isAuthenticated) {
      return alert("Login to continue!")
    } else {
      setLoading(true);
      try {
        const response = await sendEmail("service_jdbp8wt", "template_mlzmdfz", {
          to_email: email,
          message: `Follow the link below ${window.location.origin}/movie/${id}`,
          from_name: user.given_name,
        });
        console.log(response.status);
        setBtnState({ type: "success", text: "Sent" });
      } catch (error) {
        setBtnState({ type: "danger", text: "Error" });
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    setBtnState({ type: "primary", text: "Send" });
  }, [email]);

  return (
    <div className={`${className} recommend-button-wrapper`}>
      <button className={`btn btn-light `} onClick={() => setIsOpen(!isOpen)}>
        <i className="bi text-waning bi-share"></i>
      </button>
      <form
        onSubmit={handleSubmit}
        className={`send-email-form m-sm-6 ${isOpen ? "active" : ""}`}>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-describedby="send-btn"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <button
            className={`btn btn-${btnState.type} input-group-append`}
            type="submit"
            disabled={btnState.type !== "primary" || loading}
            id="send-btn">
            {loading ? "Sending..." : btnState.text}
          </button>
        </div>
      </form>
    </div>
  );
}

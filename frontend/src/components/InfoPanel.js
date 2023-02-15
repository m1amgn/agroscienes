import { useState } from "react";
import "./InfoPanel.css";

const InfoPanel = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="InfoPanel">
      <p>
        {title}
        <button className="InfoPanel-btn" onClick={() => setOpen((v) => !v)}>{open ? "-" : "+"}</button>
      </p>
      <div
        className={`InfoPanel-details ${
          open ? "" : "InfoPanel-details-closed"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default InfoPanel;

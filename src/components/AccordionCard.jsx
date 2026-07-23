import { useState } from "react";

export default function AccordionCard({
  title,
  icon,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="accordion-card">
      <button
        className="accordion-header"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <div className="accordion-title">
          <span>{icon}</span>
          <span>{title}</span>
        </div>

        <span className="accordion-arrow">
          {open ? "⌄" : "›"}
        </span>
      </button>

      {open && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </section>
  );
}
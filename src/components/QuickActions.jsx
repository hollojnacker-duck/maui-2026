export default function QuickActions({ actions = [] }) {
  return (
    <section className="quick-actions">
      <h3 className="section-title">Today's Essentials</h3>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <button
            key={action.label}
            className="quick-action"
            type="button"
          >
            <div className="quick-action-icon">
              {action.icon}
            </div>

            <div className="quick-action-label">
              {action.label}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
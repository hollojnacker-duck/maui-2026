export default function ResourceCard({ resource }) {
  return (
    <div className="resource-card">
      <div className="resource-header">
        <span className="resource-icon">
          {resource.icon}
        </span>

        <h3>{resource.title}</h3>
      </div>

      <div className="resource-actions">
        {resource.actions.map((action) => {
          if (action.url) {
            return (
              <a
                key={action.label}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-action"
              >
                <span>{action.icon}</span>
                {action.label}
              </a>
            );
          }

          return (
            <div
              key={action.label}
              className="resource-action"
            >
              <span>{action.icon}</span>
              {action.label}: {action.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
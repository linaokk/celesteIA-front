import "./cards.css";

const Card = ({ data }) => {
  return (
    <div className="card flex-fill glass-card p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div
          className="bg-secondary bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}
        >
          <i className={`bi ${data.icon} text-white fs-4`}></i>
        </div>
        <span className={`badge ${data.badgeColor} bg-opacity-25 ${data.badgeTextColor} fw-semibold px-2 py-1 fs-6 rounded-pill`}>
          {data.percentage}
        </span>
      </div>
      <div>
        <h6 className="text-uppercase text-secondary fw-semibold mb-1">
          {data.title}
        </h6>
        <h2 className="fw-bold text-white mb-0">{data.value}</h2>
        <small className="text-secondary">{data.description}</small>
      </div>
    </div>
  );
};

export default Card;
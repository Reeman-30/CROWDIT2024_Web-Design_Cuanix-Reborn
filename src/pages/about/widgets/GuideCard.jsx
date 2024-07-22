const GuideCard = ({ image, name, Instructor }) => {
  return (
    <div className="col-md-3 mb-4">
      <div
        className="card h-100 border-0 shadow-sm"
        style={{ overflow: "hidden", transition: "transform 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ transition: "transform 0.2s " }}
        />
        <div className="card-body text-center">
          <div className="d-flex justify-content-center mb-3"></div>
          <h5 className="card-title mb-0">{name}</h5>
          <p className="text-muted">{Instructor}</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;

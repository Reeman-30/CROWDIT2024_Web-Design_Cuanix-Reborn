import React from "react";
import { testimonials } from "../../../data/Dummy";

const Testimonials = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center">
        Apa kata mereka tentang{" "}
        <span className="text-primary fw-bold">Cuanix Learning</span>?
      </h1>
      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            class="card my-3"
            style={{ width: "20rem" }}
          >
            <div class="card-body">
              <h3 class="card-title text-center">{testimonial.name}</h3>
              <p className="fw-bold text-muted text-center">
                {testimonial.role}
              </p>
              <p className="text-warning text-center">
                Rating: {testimonial.rating} / 5
              </p>
              <p className="text-center">"{testimonial.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

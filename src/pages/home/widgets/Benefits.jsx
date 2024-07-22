import React from "react";
import { benefits } from "../../../data/Dummy";

const Benefits = () => {
  return (
    <div className="container">
      <div className="row grid gap-3 justify-content-center py-5">
        <h2 className="text-center text-uppercase">Our Benefits</h2>
        {benefits.map((value, index) => (
          <div className="col-12 col-lg-3 col-md-4 col-sm-5 border rounded-3">
            <div key={index} className="p-3 text">
              <h5 className="text-capitalize">{value.title}</h5>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

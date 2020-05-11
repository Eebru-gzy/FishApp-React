import React from "react";

export default function Cards({ data }) {
  console.log(data);

  return (
    <div className="container">
      <div className="card-columns mt-4 ">
        {data.map((item) => (
          <div key={item.id} className="card border-success">
            <div className="card-header">
              <div>
                <h5 className="text-center">Name: {item.name}</h5>
              </div>
            </div>
            <div className="card-body">
              <img className="card-img-top fluid " src={item.image_url} alt="" />

              <h5 className="card-title pt-3">
                Scientific Name:{" "}
                <span style={{fontSize: "16px"}}>
                  <i>{item.type}</i>
                </span>
              </h5>
              <a
                className="btn btn-outline-success dropdown-toggle"
                href="#0"
                data-toggle="dropdown"
              >
                Read More
              </a>
              <div className=" dropdown-menu" id={item.id} style={{border: "1px solid black"}}>
                <p className="p-3">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

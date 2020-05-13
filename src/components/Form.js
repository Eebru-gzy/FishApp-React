import React from "react";
import axios from "axios";

export default function Form({ history }) {
  return (
    <>
      <div className="container join-container">
        <h3 className="mb-5">Add to Fishes</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fishName = e.target.name.value,
              type = e.target.sci_name.value,
              url = e.target.image_url.value,
              description = e.target.description.value;

            axios
              .post("http://localhost:2900/fishes", {
                name: fishName,
                type: type,
                image_url: url,
                description,
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.log(error);
              });
            history.push("/home");
          }}
        >
          <div className="form-group">
            <label>Enter Name</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter Fish Scientific Name</label>
            <input type="text" name="sci_name" className="form-control" />
          </div>
          <div className="form-group">
            <label>Fish Image Url</label>
            <input type="text" name="image_url" className="form-control" />
          </div>
          <div className="form-group">
            <label>Fish Description</label>
            <input type="text" name="description" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-success btn-block" />
          </div>
        </form>
      </div>
    </>
  );
}

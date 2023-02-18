import React, { useState } from "react";
import axios from "axios";
import { getCarsList } from "./datas/cars";

const SeachImage = () => {
  let [image, setImage] = useState("");
  let [result, setResult] = useState("");
  let [carlist, setCarList] = useState([]);

  function uploadImage(e) {
    e.preventDefault();
    setImage(e.target.files[0]);
  }
  async function handleSearch() {
    const binaryData = new FormData();
    binaryData.append("image", image);

    const apiKey = "replace this with your api key";
    const endpoint = "replace this with your api endpoint here";

    const headers = {
      "Content-Type": "application/octet-stream",
      "Prediction-Key": apiKey,
    };
    try {
      const res = await axios.post(endpoint, binaryData, { headers });
      const make = res.data.predictions[0].tagName;
      setResult(make);
      console.log(make);
      setCarList(getCarsList(make));
    } catch (ex) {
      console.error("error: ", ex);
    }
  }
  return (
    <div>
      <div className="conatiner searchdiv display-flex py-5 bg-gray-100">
        <h1>Search</h1>
        <div className="row d-flex">
          <p className="text-center mb-2">Let our AI do the search for you.</p>
          <div className="col display-flex">
            <input
              className="form-control me-2"
              type="file"
              name="file"
              placeholder="Search...."
              title=""
              onChange={uploadImage}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {result !== "" && (
            <p className="col display-result m-5">It's a {result}.</p>
          )}
        </div>
        <div className="row display-cars" style={{ top: "70%" }}>
          {carlist.map((c) => (
            <div
              key={c.id}
              className="card m-4"
              style={{ width: "18rem", padding: "0px" }}
            >
              <img src={c.img} className="card-img-top" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeachImage;

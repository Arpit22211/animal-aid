import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "./axios";
import image1 from "../images/story3.jpg";
import "../Style/Story.css";

function AdoptParticular() {
  const [adoptName, setAdoptName] = useState("");
  const [adoptDescription, setAdoptDescription] = useState("");
  const { adoptId } = useParams();
  const [adopts, setAdopts] = useState([]);
  useEffect(() => {
    if (adoptId) {
      axios
        .get(`/howToHelp/adopt/${adoptId}`)
        .then((response) => {
          console.log(response);
          setAdoptName(response.data.name);
          setAdoptDescription(response.data.details);
        })
        .catch(() => console.log("Promise rejected"));
    }
  }, [adoptId]);

  useEffect(() => {
    axios
      .get("/adoptForm/sync")
      .then((response) => {
        console.log(response);
        setAdopts(response.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);

  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className=" bg-primary h1 text-white p-3 text-center rounded story d-flex align-items-center justify-content-center">
          {adoptName}
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0 detail2">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; success-stories
        </div>
        Adopt {adoptName}
      </div>
      <div className="detail">
        <h1>{adoptName}</h1>
        {adopts.map((adopt) => (
          <div>
            {adopt._id === adoptId ? (
              <img
                className="center__image"
                src={process.env.PUBLIC_URL + `/uploads/${adopt.imgName}`}
              />
            ) : (
              <div></div>
            )}
          </div>
        ))}
        <p>{adoptDescription}</p>
      </div>
      <Link className="linkButton linkButtonDetails" to="/howToHelp/adopt">
        Back to adopt page
      </Link>
    </div>
  );
}

export default AdoptParticular;

import React from "react";
import { Link } from "react-router-dom";
import image3 from "../images/whatWeDo8.jpg";
import image4 from "../images/Rescue1.jpg";
import image5 from "../images/Rescue2.jpg";
import image6 from "../images/Rescue3.jpg";
import image7 from "../images/Rescue4.jpg";
import "../Style/Rescue.css";
import "../Style/AboutUs.css";

function Rescue() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          RESCUE
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; <Link to="/whatWeDo">What We Do</Link>{" "}
          &gt; Rescue
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Rescue
            </div>
            <div className="large-title mb-4 text-left">
              A lifeline for ownerless animals.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Since 2002 we have shared our helpline number throughout Udaipur
              city, resulting in the rescue of thousands of animals each year
              and an incredible increase in community awareness..
            </p>
          </div>
        </div>
      </div>
      <div
        className="rescue__top"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="rescue__top__text">
          <h1 className="text-center">A call to save a life</h1>
          <br />
          <p className="text-justify">
            When someone in Udaipur spots an injured or ill animal, they can
            call our Emergency Helpline to report the condition. The number of
            caring people contacting us to help an animal has grown
            continuously, with an average of 70 animals reported to us each day,
            and spikes of up to 100 calls.
          </p>
        </div>
      </div>
      <div className="jumbotron p-0 m-0 bg-white">
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image5})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Help is on the way
            </h1>
            <p>
              Whether a dog has been hit by a car, or a calf has fallen in a
              ditch, we are here to help the ownerless animals. From early
              morning until past midnight, whenever we receive a report, our
              helpline team assesses the condition of the animal via video, and
              dispatches our rescue teams so that animals with the most
              life-threatening problems are given greatest priority.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
        </div>
        <div className="row m-0">
          <div
            className="d-lg-none col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image6})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Our rescue teams
            </h1>
            <p>
              We have up to four ambulances on the road from 7AM to midnight, 7
              days a week, with one on-call for serious emergencies during the
              night. We also have special teams dispatched daily to treat
              animals right on the street to avoid unnecessary hospitalization.
              Whether coaxing a frightened puppy or scaling down a deep well,
              our rescuers are highly skilled, gentle and determined to help in
              all situations. We cover the entire Udaipur city and several
              outlying villages.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image6})` }}
          />
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image7})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              20 new admissions each day
            </h1>
            <p>
              Our rescue teams respond to approximately 70 calls each day, out
              of which around 20 animals require treatment in our hospital.
              These are animals who require antibiotics for infected wounds,
              splints for fractures, surgery or intensive care for severely ill
              or injured animals. Length of stay ranges from just a few days to
              sometimes many months, such as for dogs with spinal injury. When
              fully healed, animals are returned to their neighborhoods where
              their care-takers can keep a careful eye on them.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
        </div>
      </div>
      <div className="rescue__vedio">
        <div className="rescue__vedio__detail">
          <h1>Watch our team in action.</h1>
          <br />
          <p>
            The animals in this video were all in desperate need of help. Local
            people who heard their cries called our helpline to make sure these
            animals were saved.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/DK4uItLz140"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Rescue;

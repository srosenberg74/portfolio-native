import React from "react";
import "../App.css";
import CardVideo from "../Gifs/Video/Card.webm";
import DecidrVideo from "../Gifs/Video/Decidr.webm";
import HauntedHouse from "../Gifs/Video/HauntedHouse.webm";
import Ashe from "../Gifs/Video/Ashe.webm";
import Marvel from "../Gifs/Video/Marvel.webm";
import Guitarists from "../Gifs/Video/Guitarists.webm";
import DragonBattle from "../Gifs/Video/DragonBattle.webm";
import DragonBodyguard from "../Gifs/Video/DragonBodyguard.webm";
import Sisters from "../Gifs/Video/Sisters.webm";

function Portfolio() {
  return (
    <div>
      {/* <div className="w-75 mx-auto mt-5 mb-0 pb-0">
        <div
          id="carouselExampleControls"
          className="carousel slide w-50 mx-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video width="180" height="270" autoPlay muted loop>
                <source src={CardVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={DecidrVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={HauntedHouse} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={Marvel} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={Guitarists} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={Ashe} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={Sisters} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={DragonBodyguard} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="180" height="270" autoPlay muted loop>
                <source src={DragonBattle} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div> */}
      <h1
        className="mb-2 mt-4 text-center portfolio-header"
        style={{ color: "#082c45a8", fontFamily: "PT Serif", fontSize: "60px" }}
      >
        Portfolio
      </h1>
      <div className="row mx-auto text-center">
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 2;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={CardVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://srosenberg74.github.io/ecard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Holiday Greeting eCard
                </a>
              </strong>
              <br />A Reshareable Greeting eCard
              <a
                href="https://github.com/srosenberg74/ecard"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-github fa-lg icon"
                  style={{ color: "#082c45" }}
                ></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 2;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={DecidrVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://srosenberg74.github.io/decidr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Decidr App
                </a>
              </strong>
              <br />
              An app that helps you make decisions!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 1.5;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={HauntedHouse} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://luceroweb.github.io/haunted-house-game/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Haunted House Game
                </a>
              </strong>
              <br />
              Our Apprentice Group created a fun and interactive Halloween App
              (Group Project)
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 2;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={Marvel} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://eyobel7k.github.io/team-black-panther/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Marvel Space
                </a>
              </strong>
              <br />
              Our Apprentice Group created a social networking site for
              superheroes (Group Project)
              <a
                className=""
                style={{ color: "#082c45" }}
                href="https://expo.dev/@eyobel7k/team-black-panther"
                target="_blank"
                rel="noreferrer"
              >
                {/* <em>link to qr code for expo version for mobile</em> */}
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 1.2;
                event.target.currentTime = 1;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={Guitarists} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://www.bridgegood.com/dragonpanda/portfolio/11586"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guitarists Website
                </a>
              </strong>
              <br />A simple website dedicated to guitarists
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 1;
                event.target.currentTime = 1;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
              loop
            >
              <source src={Ashe} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://www.bridgegood.com/dragonpanda/portfolio/11601"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ashe Card
                </a>
              </strong>
              <br />
              An animated playing card for Ashe from Overwatch
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 1;
                event.target.currentTime = 1.08;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={DragonBattle} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://www.youtube.com/watch?v=k7Zs0l9G9hw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dragon Battle Over Riverwood
                </a>
              </strong>
              <br />
              Skyrim mod creating an epic Dragon Battle over Riverwood!
            </p>
          </div>
        </div>

        <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-3 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = 1;
                event.target.currentTime = 0.9;
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={Sisters} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
              style={{
                lineHeight: "1.4",
                color: "#082c45d7",
                fontFamily: "raleway",
                boxShadow: "5px 5px 8px 2px grey",
                minHeight: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href="https://www.bridgegood.com/dragonpanda/portfolio/11592"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sisters of the Apocalypse
                </a>
              </strong>
              <br />
              Just a quick fun assignment from Unreal Engine while learning
              about assigning animations and using sockets.
            </p>
          </div>
        </div>
        <div className="last portfolio-piece mx-auto my-3 px-3">
          <video
            width="180"
            height="105"
            onMouseOver={(event) => {
              event.target.play();
              event.target.playbackRate = 1;
              event.target.currentTime = 1;
            }}
            onMouseOut={(event) => event.target.pause()}
            muted
          >
            <source src={DragonBodyguard} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p
            className="fs-5 fw-bold card-text"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
              boxShadow: "5px 5px 8px 2px grey",
              minHeight: "150px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className=""
                style={{ color: "#082c45" }}
                href="https://www.youtube.com/watch?v=ZKSU_HjPpXE"
                target="_blank"
                rel="noreferrer"
              >
                Dragon Bodyguard
              </a>
            </strong>
            <br />
            Skyrim mod creating a Dragon Bodyguard
          </p>
        </div>
        <p
          className="fs-5 fw-bold mt-3 pt-3 touchable"
          style={{
            lineHeight: "1.4",
            color: "#082c45d7",
            fontFamily: "raleway",
            minHeight: "150px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <strong className="fw-bolder fs-1" style={{ color: "#082c45" }}>
            <a
              className=""
              style={{ color: "#082c45" }}
              href="https://github.com/srosenberg74"
              target="_blank"
              rel="noreferrer"
            >
              My Github
              <i className="fab fa-github fa-2x icon"></i>
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;

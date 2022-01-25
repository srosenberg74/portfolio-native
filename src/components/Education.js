import React from "react";

function Education() {
  return (
    <div className="content">
      <h2
        className="my-3 fs-1"
        style={{ color: "#082c45a8", fontFamily: "PT Serif" }}
        id="Education"
      >
        Education
      </h2>
      <p
        className="fs-5 fw-bold"
        style={{
          lineHeight: "1.4",
          color: "#082c45d7",
          fontFamily: "raleway",
        }}
      >
        <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
          Pursuing Associate's Degree in Web Design | Clovis Community College |
          August 2020-current{" "}
        </strong>
        <br />I am 3 units away from completing my A.S. Degree in Web Design.
        Going back to school to study the things I am passionate about has been
        an amazingly rewarding experience. I am eager to use all of the
        incredible skills I have been gathering.
      </p>
      <p
        className="fs-5 fw-bold"
        style={{
          lineHeight: "1.4",
          color: "#082c45d7",
          fontFamily: "raleway",
        }}
      >
        <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
          Bachelor's Degree in English | UC Santa Barbara | 1993-1998{" "}
        </strong>
        <br />I have a Bachelor of Arts Degree in English from the University of
        California, Santa Barbara
      </p>
    </div>
  );
}

export default Education;

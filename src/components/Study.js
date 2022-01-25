import React from "react";

function Study() {
  return (
    <div className="content">
      <h2
        className="my-3 fs-1"
        style={{ color: "#082c45a8", fontFamily: "PT Serif" }}
      >
        Areas of Study
      </h2>
      <p
        className="fs-5 fw-bold"
        style={{ lineHeight: "1.4", color: "#082c45d7", fontFamily: "Raleway" }}
      >
        <strong className="fw-bolder fs-5" style={{ color: "#082c45" }}>
          Web Development -
        </strong>
        <br />
        React, React-Native, JavaScript, HTML, CSS, Bootstrap
      </p>
      <hr />
      <p
        className="fs-5 fw-bold"
        style={{ lineHeight: "1.4", color: "#082c45d7", fontFamily: "Raleway" }}
      >
        <strong className="fw-bolder fs-5" style={{ color: "#082c45" }}>
          Design -
        </strong>
        <br />
        Photoshop, Figma, Blender, Lunacy, Clip Studio Paint
      </p>
      <hr />
      <p
        className="fs-5 fw-bold"
        style={{ lineHeight: "1.4", color: "#082c45d7", fontFamily: "Raleway" }}
      >
        <strong className="fw-bolder fs-5" style={{ color: "#082c45" }}>
          Additional Software Experience -
        </strong>
        <br />
        Unreal Engine, Unity, Ableton Live, Adobe Audition
      </p>
      <hr />
      <p
        className="fs-5 fw-bold mb-4"
        style={{ lineHeight: "1.4", color: "#082c45d7", fontFamily: "Raleway" }}
      >
        <strong className="fw-bolder fs-5" style={{ color: "#082c45" }}>
          Additional Programming Languages Studied -
        </strong>
        <br />
        C++, Python, C#
      </p>
    </div>
  );
}

export default Study;

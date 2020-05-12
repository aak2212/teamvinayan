import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 class="font-weight-light">About</h1>
            <p>
              Vinayan is an online platform which helps aspiring JEE students to prepare for the JEE exams.
              It was started by 8 IIT-Kanpur under-graduate students.
            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

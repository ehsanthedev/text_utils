import React from "react";
import "./about.css";

const About = (props) => {
  return (
    <>
      <div className="container">
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  props.mode === "dark" ? "bg-color text-color" : " "
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Empower Your Text with Smart Utilities</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse show ${
                props.mode === "dark" ? "bg-color text-color" : " "
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Experience the next level of text management with our advanced
                text utility tools. Transform your text with ease—convert to
                lowercase, uppercase, or capitalized form in just a click. Our
                intuitive interface ensures that you can modify your text
                effortlessly, making your writing process smoother and more
                efficient.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  props.mode === "dark" ? "bg-color text-color" : " "
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Enhance Your Workflow with Interactive Features</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${
                props.mode === "dark" ? "bg-color text-color" : " "
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our website isn’t just about text conversion; it’s about
                enhancing your entire workflow. With features like a real-time
                word and character counter, and an estimated reading time
                calculator, you can stay on top of your content creation. Need a
                break from typing? Use our 'Speak' button to hear your text read
                aloud, or clear everything with a single click using the 'Clear'
                button.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  props.mode === "dark" ? "bg-color text-color" : " "
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Simplify and Streamline Your Writing Process</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${
                  props.mode === "dark" ? "bg-color text-color" : " "
                }`}
              >
                Designed with both functionality and user experience in mind,
                our text utility tools are here to simplify your writing
                process. Whether you’re drafting a quick email or composing a
                detailed article, our tools provide the flexibility and
                precision you need. Stay productive and efficient with tools
                that adapt to your needs, making your text management
                hassle-free.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

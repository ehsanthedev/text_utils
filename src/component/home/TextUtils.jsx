import React, { useState } from "react";
import "./textUtils.css";
import { toast } from "react-toastify";

const TextUtils = (props) => {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const uppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    toast("Changed to Uppercase");
  };
  const lowercase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    toast("Changed to Lowercase");
  };
  const capitalized = () => {
    const capitalizedText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
      .join(" ");
    setText(capitalizedText);
    toast("Changed to Capitalized");
  };
  const speak = () => {
    const speakMsg = new SpeechSynthesisUtterance();
    speakMsg.text = text;
    window.speechSynthesis.speak(speakMsg);
    toast("AI Speaking Now");
  };
  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Copy to Clipboard");
      })
      .catch((err) => {
        toast(`Failed to Copy ${err}`);
      });
  };
  const clear = () => {
    setText("");
    toast("Text box is Cleared");
  };

  const reading = 0.008 * text.split(" ").length;
  const preciseTime = reading.toPrecision(4);
  const result = parseFloat(preciseTime);

  return (
    <>
      <div className="container">
        <div className="mt-3 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>{props.label}</h3>
          </label>
          <textarea
            className={` form-control text-${
              props.mode === "light" ? "black" : "light bg-color"
            }`}
            id="textBox"
            rows="5"
            value={text}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button
          onClick={uppercase}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Convert to Uppercase
        </button>
        <button
          onClick={lowercase}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Convert to Lowercase
        </button>
        <button
          onClick={capitalized}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Convert to Capitalized
        </button>
        <button
          onClick={speak}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Speak
        </button>
        <button
          onClick={copyText}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Copy
        </button>

        <button
          onClick={clear}
          disabled={text.length === 0}
          type="button"
          className={`btn btn-width mx-1 my-1 border-1 border-dark btn-${
            props.mode === "light" ? "light" : "color text-color"
          }`}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h3>Results</h3>
        <table className=" p-2">
          <tbody>
            <tr className="">
              <td className=" p-2">Words Count :</td>
              <td className=" p-2">
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </td>
            </tr>
            <tr className="">
              <td className=" p-2">Chracters Count :</td>
              <td className=" p-2">{text.length}</td>
            </tr>
            <tr className="">
              <td className=" p-2">Reading time :</td>
              <td className=" p-2">{result}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TextUtils;

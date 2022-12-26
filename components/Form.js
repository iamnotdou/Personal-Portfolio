import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form_container">
      <div className="form_container_title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>
        Contact
      </div>
      <div className="form_container_description">
        If you have any questions, feel free to contact me.
      </div>
      <form action="" onSubmit={submitHandler}>
        <div className="checkbox_container">
          <input id="question" type="checkbox" />
          <label htmlFor="question">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Chatbox</title>
              <path
                d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="23"
              />
            </svg>
            Question
          </label>
          <input id="job" type="checkbox" />
          <label htmlFor="job">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <rect
                x="32"
                y="128"
                width="448"
                height="320"
                rx="48"
                ry="48"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="23"
              />
              <path
                d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="23"
              />
            </svg>
            Job Offer
          </label>
          <input id="another" type="checkbox" />
          <label htmlFor="another">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="23"
              />
              <path
                d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="23"
              />
              <path
                d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="23"
              />
              <path
                d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="23"
              />
            </svg>
            Another
          </label>
        </div>
        <div className="input_row">
          <div className="input_container">
            <input
              val={name}
              type="text"
              onChange={() => {
                setName(event.target.value);
              }}
            />
            <label className="input_text">Name</label>
          </div>
          <div className="input_container">
            <input
              val={email}
              type="email"
              onChange={() => {
                setEmail(event.target.value);
              }}
            />
            <label className="input_text">Email</label>
          </div>
        </div>

        <div className="input_container">
          <textarea
            val={message}
            type="text"
            onChange={() => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <label className="input_text">Message</label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;

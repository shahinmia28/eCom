import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

const Form = () => {
  const [state, handleSubmit] = useForm("xpznrwgj");
  const [confirm, setConfirm] = useState("");

  console.log(state);
  if (state.succeeded) {
  }
  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="test-form"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Massage here..."
            cols="50"
            rows="10"
            className="test-form"
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 40px 0;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .test-form {
      width: 500px;
    }
    button {
      width: 200px;
      padding: 10px 20px;
      margin: auto;
    }
  }
`;

export default Form;

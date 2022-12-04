import styled from "styled-components";

const AddToCardAmount = ({ amount, setDecrement, setIncrement }) => {
  return (
    <Wrapper>
      <button className="decrement" onClick={() => setDecrement()}>
        -
      </button>
      <p>{amount}</p>

      <button className="increment" onClick={() => setIncrement()}>
        +
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 1rem 0rem;
  display: flex;
  font-size: 3rem;
  font-weight: 900;
  p {
    font-size: 2.5rem;
    font-weight: 500;
    padding: 0 1rem;
    margin: 0 1rem;
  }
  button {
    border: none;
    background: #e9e9e9;
    padding: 0 0.8rem;
    border-radius: 50%;
    font-size: 2.5rem;
    font-weight: 500;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export default AddToCardAmount;

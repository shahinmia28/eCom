import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <div key={index} className="star-style">
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon-outline icon" />
        )}
      </div>
    );
  });
  return (
    <Wrapper>
      <span>
        {rating}
        <p>({reviews} customer reviews)</p>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    display: flex;
    padding: 0.5rem 0;
    .star-style {
      color: #ffbb00;
      .icon {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
      .icon-outline {
        width: 2.3rem;
        height: 2.3rem;
      }
    }
    p {
      margin-left: 0.5rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;

export default Star;

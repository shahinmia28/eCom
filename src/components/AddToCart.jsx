import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import Amount from "./Amount";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          colors:
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ background: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <GiCheckMark className="check" /> : null}
            </button>
          ))}
        </p>
      </div>
      {/* product amount */}
      <div className="amount">
        <Amount
          amount={amount}
          setDecrement={setDecrement}
          setIncrement={setIncrement}
        />
      </div>
      <div className="add-to-card-btn">
        <NavLink
          to="/cart"
          onClick={() => addToCart(id, color, amount, product)}
        >
          <Button>Add To Cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    display: flex;
    align-items: center;

    .btnStyle {
      border: none;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin: 0 0.3rem;
      opacity: 0.5;
      color: #fff;

      &:hover {
        opacity: 1;
      }
      .check {
        padding: 2px;
      }
    }
    .active {
      opacity: 1;
    }
  }
`;
export default AddToCart;

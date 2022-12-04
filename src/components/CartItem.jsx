import FormatPrice from "../helper/FormatPrice";
import Amount from "./Amount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, color, amount, price, max, image }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ background: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* Quantity */}
      <div>
        <Amount
          amount={amount}
          setDecrement={() => setDecrement(id)}
          setIncrement={() => setIncrement(id)}
        />
      </div>
      {/* Sub-total */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/* remove */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;

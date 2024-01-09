import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
// import from 'app.css';

// export const images =[
//     {image: "../images/image-product-1-thumbnail.jpg"},
//     {image: "../images/image-product-2-thumbnail.jpg"},
//     {image: "../images/image-product-3-thumbnail.jpg"},
//     {image: "../images/image-product-4-thumbnail.jpg"}
// ]
// console.log(images);

let initailImage = "../images/image-product-1.jpg";
export default function Body({
  count,
  setCount,
  setAddCart,
  orderCount,
  setOrderCount,
  setStore,
}) {
  const [display, setDisplayImage] = useState(initailImage);

  const changeImage = (url) => {
    setDisplayImage(url);
  }
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    // returns higher value between count and 0
    // if count is greater than 0 then it returns count
    // if count - 1 = 10 , 10 is greater than 0 so newCount becomes 10
    // but if count - 1 is smaller than 0, then 0 is greater so it will return 0
    // 0 enters newCount
    let newCount = Math.max(count - 1, 0);
    // setCount to new Count
    setCount(newCount);
  }
  const addToCart = () => {
    // setOrderCount(parseInt(count));
    setStore((prev) => [...prev, count]);
    setAddCart(parseInt(count));
    setOrderCount(parseInt(orderCount + 1));

   

    
  }

  return (
    <div>
      <div className="bodyExternalBorder">
        <div className="bodyInternalBorder">
          <div className="imageBox">
            <div>
              <div>
                <img className="image" src={display} alt="" />
              </div>
              <div className="imageButtons">
                <button
                  onClick={() => changeImage("../images/image-product-1.jpg")}
                  className="button"
                >
                  <img
                    className="imageButton"
                    src="../images/image-product-1.jpg"
                    alt=""
                  />
                </button>
                <button
                  onClick={() => changeImage("../images/image-product-2.jpg")}
                  className="button"
                >
                  <img
                    className="imageButton"
                    src="../images/image-product-2.jpg"
                    alt=""
                  />
                </button>
                <button
                  onClick={() => changeImage("../images/image-product-3.jpg")}
                  className="button"
                >
                  <img
                    className="imageButton"
                    src="../images/image-product-3.jpg"
                    alt=""
                  />
                </button>
                <button
                  onClick={() => changeImage("../images/image-product-4.jpg")}
                  className="button"
                >
                  <img
                    className="imageButton"
                    src="../images/image-product-4.jpg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bodyContent">
            <p className="sneakerCompany">SNEAKER COMPANY</p>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>
              These low-profile snaekers are your perfect casual wear companion.
              Featuringg a durable rubber outer sole, they'll withsatnd
              everything the weather can offer.
            </p>
            <div>
              <h3>$125.</h3>
              <span>50%</span>
            </div>
            <p className="discountedPrize">$250.00</p>
            <div>
              <button onClick={decrement} className="decrementButton btns">
                -
              </button>
              <button className="btns">{count}</button>
              <button onClick={increment} className="incrementButton btns">
                +
              </button>
              <button onClick={addToCart} className="addToCart">
                <span>
                  <BsCart2 />
                </span>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

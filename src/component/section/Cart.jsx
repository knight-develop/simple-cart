import React, { useContext } from 'react'
import { ProductContext } from '../Context';
import '../css/Detail.css'
import { Link } from 'react-router-dom';
function Cart() {
  const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth, addCart, cart, setCart] = useContext(ProductContext);
  return (
    <>
      <div id="product">
        {
          cart.map(cart => {
            return (
              <div className="card" key={cart.id}>
                <img src={cart.image} />
                <div className="content">
                  <h3>
                    {cart.name}
                  </h3>

                  <span>${cart.price}</span>
                  <p>{cart.Description}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default Cart;

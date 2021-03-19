import axios from 'axios';
import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [cateID, setCateID] = useState(-1);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(-1);
  const [auth, setAuth] = useState(false);
  const [cart, setCart] = useState([]);
  // get Category
  useEffect(() => {
    const url = `https://603c5222f4333a0017b67665.mockapi.io/Categories`;
    axios.get(url)
      .then((response) => {
        const { data } = response;
        setCategories(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  //get Cart
  useEffect(() => {
    const url = "https://603c5222f4333a0017b67665.mockapi.io/carts";
    axios.get(url)
      .then((res) => {
        const { data } = res;
        setCart(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  useEffect(() => {
    if (cateID === -1) {
      setProducts([]);
    } else {
      const url = `https://603c5222f4333a0017b67665.mockapi.io/Categories/${cateID}/Products`
      axios.get(url)
        .then((response) => {
          const { data } = response;
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [cateID])
  //handle search products

  const onHandleSearch = (newFilter) => {
    setSearch(newFilter.search);
  }
  const addCart = (val) => {
    const url = `https://603c5222f4333a0017b67665.mockapi.io/carts`;
    axios({
      url: url,
      method: "POST",
      data: val
    })
  }
  return (
    <ProductContext.Provider value={[categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth, addCart, cart, setCart]}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;

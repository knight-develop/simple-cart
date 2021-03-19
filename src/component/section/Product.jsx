import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Product.css';
function Product(props) {
  const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth, addCart] = useContext(ProductContext);
  const typingTimeoutRef = useRef(null);
  //setCateID
  const danhMucOnChange = (e) => {

    if (e.target.value == '-- Chọn danh mục --') {
      setCateID(-1)
    } else {
      setCateID(e.target.value)
    }

  }
  // sử dụng debounce: giúp gửi ít request data nhất

  const onChangeHandleSearch = (e) => {
    const { value } = e.target;
    if (!onHandleSearch) return;
    //Nếu vẫn nhập trước 300s thì sẽ clear thời gian đếm trước đó và set lại là 300s
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    //sau khi gõ đợi 300s thì mới submit giá trị nhập 
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        search: value
      }
      onHandleSearch(formValue)
    }, 50)

  }
  const onClickHandle = (val) => {
    if (!addCart) return;
    addCart(val)
  }
  return (
    <div id="product">
      <div className="option">
        <label >Danh mục</label>
        <select
          onChange={danhMucOnChange}
          name="category_id">
          <option>-- Chọn danh mục --</option>
          {
            categories.map(function (val, idx) {
              return (
                <option key={idx} value={val.id}>
                  { val.name}
                </option>
              );
            })
          }
        </select>
      </div>
      <form className="form-search">
        {/* <label>Tìm kiếm</label> */}
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={onChangeHandleSearch}
        />
      </form>
      <div id="product">
        {
          products.map(product => {
            return (
              <div className="card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} />
                </Link>
                <div className="content">
                  <h3>
                    <Link to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  <span>${product.price}</span>
                  <p>{product.Description}</p>
                  <button onClick={() => { onClickHandle(product) }}>Add to card</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div >
  );
}

export default Product;
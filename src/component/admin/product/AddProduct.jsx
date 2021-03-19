import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
  Form, FormGroup,
  Label, Input, Button
} from 'reactstrap'
import { Link } from 'react-router-dom';
import { ProductContext } from 'E:/reactjs/manager/src/component/Context';
import axios from 'axios';
import useImage from './useImage';
AddProduct.propTypes = {

}
function AddProduct(props) {
  const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts] = useContext(ProductContext);
  const [formData, setFormData] = useState({ name: '', image: '', price: '', description: '' });
  const image = useImage();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const url = `https://603c5222f4333a0017b67665.mockapi.io/Categories/${cateID}/Products`
    axios({
      url: url,
      method: 'POST',
      data: formData
    })
      .then((res) => {
        const { data } = res;
        setProducts([
          ...products,
          data
        ])
      })
      .catch(error => {
        console.log(error);
      })
  }
  const danhMucOnChange = (e) => {
    if (e.target.value == '-- Chọn danh mục --') {
      setCateID(-1)
    } else {
      setCateID(e.target.value)
    }
  }
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      image: image
    })
  }
  return (
    <div>
      <label style={{ marginLeft: "550px", marginTop: "10px" }}>Danh mục</label>
      <select
        onChange={danhMucOnChange}
      >
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
      <Form onSubmit={onSubmitHandle}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={onChangeHandle}
          />
          <Label>Price</Label>
          <Input
            type="text"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={onChangeHandle}
          />
          <Label>Description</Label>
          <Input
            type="text"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={onChangeHandle}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}



export default AddProduct;


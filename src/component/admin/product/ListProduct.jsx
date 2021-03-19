import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, NavItem, NavbarBrand, Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { ProductContext } from 'E:/reactjs/manager/src/component/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
function CRUDProduct(props) {
  const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked] = useContext(ProductContext);

  const danhMucOnChange = (e) => {
    if (e.target.value == '-- Chọn danh mục --') {
      setCateID(-1)
    } else {
      setCateID(e.target.value)
    }
    console.log(e.target.value)
  }
  const onHandleDelete = (e, index) => {
    const id = products[index].id;
    const url = `https://603c5222f4333a0017b67665.mockapi.io/Categories/${cateID}/Products/${id}`
    axios({
      url: url,
      method: 'DELETE',
    }).then((response) => {
      console.log('response', response);
      if (response.status == 200) {
        setProducts((oldState) => {
          const newState = oldState.filter((val, idx) => {
            return idx == index ? false : true;
          });
          return newState;
        });
      }
    }).catch((error) => {
      console.log('error', error, error.response);
    });
  }
  const handleClicked = (e, index) => {
    setClicked(index)
  }
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">Product</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/add">Add Product</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <label style={{ marginLeft: "550px", marginTop: "10px" }}>Danh mục</label>
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
      <ListGroup className="mt-4">
        {products.map((product, index) => {
          return (
            <ListGroupItem className="d-flex" key={product.id}>
              <strong>{product.name}</strong>

              <div style={{ marginLeft: "auto" }}>
                <strong style={{ marginRight: "600px" }}>{product.price}</strong>
                <Link className="btn btn-warning mr-1" to={`/edit/${product.id}`} onClick={(e) => { handleClicked(e, index) }}>Edit</Link>
                <Button
                  color="danger"
                  onClick={(e) => { onHandleDelete(e, index) }}
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  )
}
CRUDProduct.propTypes = {

}

export default CRUDProduct;


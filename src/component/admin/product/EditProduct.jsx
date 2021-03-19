import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Form, FormGroup,
    Label, Input, Button
} from 'reactstrap'
import { ProductContext } from '../../Context';
import axios from 'axios';
function EditProduct(props) {
    const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked] = useContext(ProductContext);
    const [formData, setFormData] = useState({ name: '', price: '', description: '' });
    const id = props.match.params.id;
    const onSubmitHandle = (e) => {
        e.preventDefault();
        const url = `https://603c5222f4333a0017b67665.mockapi.io/Categories/${cateID}/Products/${products[clicked].id}`;
        axios({
            url: url,
            method: 'PUT',
            data: formData
        })
            .then((response) => {
                const { data } = response;
                setProducts((oldState) => {
                    return oldState.map((val, idx) => {
                        return idx == clicked ? data : val;
                    });
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
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
            <Button type="submit">Edit</Button>
            <Button type="submit">Cancel</Button>
        </Form>
    )
}

EditProduct.propTypes = {

}

export default EditProduct


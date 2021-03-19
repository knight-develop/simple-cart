import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Detail.css'
Details.propTypes = {

};

function Details(props) {
    const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts] = useContext(ProductContext);
    const [detail, setDetail] = useState([]);
    const index = props.match.params.id;
    useEffect(() => {

        if (index) {
            const res = products;
            const data = res.filter(item => {
                return item.id === index;
            })
            setDetail(data);
        }
    }, [])
    console.log(detail)
    return (
        <>
            {detail.map(item => {
                return (
                    <div className="details" key={item.id}>
                        <img src={item.image} />
                        <div className="detail-box">
                            <div className="row">
                                <h2>{item.name}</h2>
                                <span>{item.price}</span>
                            </div>
                            <p>{item.Description}</p>
                            <Link to="/cart" className="cart">Add to Cart</Link>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Details;
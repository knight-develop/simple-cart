import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import Product from './component/section/Product'
import Details from './component/section/Details'
import Home from './component/Home';
import AddProduct from './component/admin/product/AddProduct';
import EditProduct from './component/admin/product/EditProduct';
import CRUDProduct from './component/admin/product/ListProduct';
import PrivateRouter from './component/PrivateRouter';
import Cart from './component/section/Cart';
import { ProductContext } from './component/Context';


const Section = props => {
    const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth, addCart, cart, setCart] = useContext(ProductContext);
    return (
        <section>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={Product} />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <PrivateRouter path="/add" component={AddProduct} />
                <PrivateRouter path="/edit/:id" component={EditProduct} />
                <PrivateRouter path="/crud-product" component={CRUDProduct} auth={auth} />
            </Switch>
        </section>
    );
};

Section.propTypes = {

};

export default Section;
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { ProductContext } from './Context';

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => auth ?
                    (<Component {...props} />)
                    : (<Redirect to={{ pathname: "/" }} />)
            }
        >
        </Route>
    );
};


export default PrivateRouter;
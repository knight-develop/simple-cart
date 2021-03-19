import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => {
    const [auth, setAuth] = useState(false);
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
import React, {useContext} from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <>
            <Routes>
                {isAuth ? (
                    privateRoutes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                        />
                    ))
                ) : (
                    publicRoutes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                        />
                    ))
                )}
            </Routes>
            {isAuth ? <Navigate to="/posts"/> : <Navigate to="/login"/>}
        </>
    );
};

export default AppRouter;
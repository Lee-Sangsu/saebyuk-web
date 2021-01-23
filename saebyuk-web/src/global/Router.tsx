import React from 'react';
import {BrowserRouter,  Route, Switch } from "react-router-dom";
import SignUp from 'components/SignUp';
import Home from 'components/Home';
import RegisterNewBook from 'components/RegisterNewBook';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            <Route path="/book/register/new">
                <RegisterNewBook />
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;
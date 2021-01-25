import React from 'react';
import {BrowserRouter,  Route, Switch } from "react-router-dom";
import SignUp from 'components/SignUp';
import RegisterNewBook from 'components/RegisterNewBook';
import Main from 'pages/Main';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Main />
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
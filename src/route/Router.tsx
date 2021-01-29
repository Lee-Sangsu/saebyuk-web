import React from 'react';
import {BrowserRouter,  Route, Switch } from "react-router-dom";
import SignUp from 'pages/SignUp';
import SearchNewBook from 'pages/RegisterBook/SearchNewBook';
import Main from 'pages/Main';
import SelectGenreOfNewBook from 'pages/RegisterBook/SelectGenreOfNewBook';
import InputKeywords from 'pages/RegisterBook/InputKeywords';
import { MustTypedInfos } from 'pages/RegisterBook/MustTypedInfos';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
            <Route exact path="/book/register/new">
                <SearchNewBook />
            </Route>
            <Route exact path="/book/register/keyword/">
                <InputKeywords />
            </Route>
            <Route exact path="/book/register/etc-infos/">
                <MustTypedInfos />
            </Route>
            <Route path="/book/register/:item?">
                <SelectGenreOfNewBook />
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;
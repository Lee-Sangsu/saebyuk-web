import React from 'react';
import {BrowserRouter,  Route, Switch } from "react-router-dom";
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';
import SelectGenreOfNewBook from 'pages/RegisterBook/SelectGenreOfNewBook';
import InputKeywords from 'pages/RegisterBook/InputKeywords';
import { MustTypedInfos } from 'pages/RegisterBook/MustTypedInfos';
import ReqOrRegBook from 'pages/ReqOrRegBook';
import Navigator from './Navigator';
import { BookInfo } from 'pages/BookInfo';
import { ReturnBook } from 'pages/ReturnBook';
import { MyLibrary } from 'pages/MyLibrary';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navigator />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/my-library">
                    <MyLibrary />
                </Route>
                <Route exact path="/book/info/:item?">
                    <BookInfo />
                </Route>
                <Route exact path="/book/request-or-faq">
                    <ReqOrRegBook />
                </Route>
                <Route exact path="/book/return">
                    <ReturnBook />
                </Route>
                <Route exact path="/book/register/keyword/">
                    <InputKeywords />
                </Route>
                <Route exact path="/book/register/etc-infos/">
                    <MustTypedInfos />
                </Route>
                <Route exact path="/book/register/:item?">
                    <SelectGenreOfNewBook />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;
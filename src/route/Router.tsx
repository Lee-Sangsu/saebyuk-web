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
import { Admin } from 'pages/Admin';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navigator />
            <Switch>
                <Route exact path="/saebyuk-web">
                    <Main />
                </Route>
                <Route exact path="/saebyuk-web/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/saebyuk-web/my-library">
                    <MyLibrary />
                </Route>
                <Route exact path="/saebyuk-web/book/info/:item?">
                    <BookInfo />
                </Route>
                <Route exact path="/saebyuk-web/book/request-or-faq">
                    <ReqOrRegBook />
                </Route>
                <Route exact path="/saebyuk-web/book/return">
                    <ReturnBook />
                </Route>
                <Route exact path="/saebyuk-web/book/register/keyword/">
                    <InputKeywords />
                </Route> 
                <Route exact path="/saebyuk-web/admin">
                    <Admin />
                </Route>
                <Route exact path="/saebyuk-web/book/register/etc-infos/">
                    <MustTypedInfos />
                </Route>
                <Route exact path="/saebyuk-web/book/register/:item?">
                    <SelectGenreOfNewBook />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;
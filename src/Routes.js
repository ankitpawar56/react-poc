import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "./views/Login/Login";
import registerComponent from "./views/Register/Register";
import BookFlight from "./views/BookFlight/BookFlight"
import Result from "./Components/Result/Result"
import MyBookings from "./views/MyBookings/MyBookings"
//import HomePage from "./views/HomePage";

const MyRoutes = [
    {
        path: "/login",
        component: LoginComponent
    },
    {
        path: "/register",
        component: registerComponent
    },
    {
         path: "/book",
         component: BookFlight
    },
    {
        path: "/result",
        component: Result
    },
    {
        path: "/myBookings",
        component: MyBookings
    },
]

const Routes = () => {
    const MyRoute = MyRoutes.map((curr, i) => (
        <Route key = {i} path = {curr.path} component = {curr.component} />
    ));

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from = "/" to = "/login" />
                {MyRoute}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
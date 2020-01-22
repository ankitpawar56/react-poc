import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "./views/Login/Login";
import registerComponent from "./views/Register/Register";
import BookFlight from "./views/BookFlight/BookFlight"
import Result from "./Components/Result/Result"
import MyBookings from "./views/MyBookings/MyBookings"
import withAuth from './Components/WithAuth/WithAuth';

const MyRoutes = [
    {
        path: "/login",
        component: LoginComponent
    },
    {
        path: "/register",
        component: registerComponent
    }
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
                <Route path="/book" component={withAuth(BookFlight)} />
                <Route path="/result" component={withAuth(Result)} />
                <Route path="/myBookings" component={withAuth(MyBookings)} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;
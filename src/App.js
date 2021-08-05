import "./App.css";
import Menu from "./components/MenuComponent";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import { connect } from "react-redux";
import MenuDetail from "./components/MenuDetails";
import Thanks from "./components/Thanks";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments,
  };
};

function App(props) {
  const DishWithId = ({ match }) => {
    return (
      <MenuDetail
        dish={
          props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comment={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/menu">
          <Menu data={props.dishes} />{" "}
        </Route>{" "}
        <Route path="/contact">
          <Contact />
        </Route>{" "}
        <Route path="/home">
          <Home
            dish={props.dishes.filter((dish) => dish.featured)[0]}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
          />{" "}
        </Route>{" "}
        <Route path="/about">
          <AboutUs leader={props.leaders} />{" "}
        </Route>{" "}
        <Route path="/thanks">
          <Thanks />
        </Route>{" "}
        <Route path="/test/:dishId" component={DishWithId} />{" "}
        <Route path="/">
          <Home
            dish={props.dishes.filter((dish) => dish.featured)[0]}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
          />{" "}
        </Route>{" "}
      </Switch>{" "}
      <Footer />
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, null)(App);


/*eslint-disable*/
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import PageFade from '../components/PageFade';
import Login from '../views/login';
import FoodList from '../views/foodList';
import Vegetables from '../views/vegetables';
import Meat from '../views/meat';
import Fruits from '../views/fruits';


const App = ({ location }) => (
      <PageFade locationKey={location.pathname}>
        <Switch location={location}>
          <Route exact path="/" component={Login} />
          <Route path="/foodlist" component={FoodList} />
          <Route path="/vegetables" component={Vegetables} />
          <Route path="/meat" component={Meat} />
          <Route path="/fruits" component={Fruits} />
        </Switch>
      </PageFade>
  );

export default App;
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Beef = () => (
  <div>
    <h2>牛肉</h2>
  </div>
);

const Pork = () => (
  <div>
    <h2>猪肉</h2>
  </div>
);

const Fish = ({ match }) => (
  <div>
    <h3>{match.params.kind}</h3>
  </div>
);
Fish.propTypes = {
  match: PropTypes.object.isRequired,
};

const Fishes = ({ match }) => (
  <div>
    <h4>你们要的、好吃的鱼肉</h4>
    <ul>
      <li>
        <Link to={`${match.url}/shark`}>
          鲨鱼
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/lacoste`}>
        鳄鱼
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/goldfish`}>
          金鱼
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:kind`} component={Fish} />
  </div>
);

Fishes.propTypes = {
  match: PropTypes.object.isRequired,
};

class Meat extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/meat/beef">牛肉</Link></li>
          <li><Link to="/meat/pork">猪肉</Link></li>
          <li><Link to="/meat/fishes">鱼摆摆</Link></li>
        </ul>
        <Route exact path="/meat/beef" component={Beef} />
        <Route path="/meat/pork" component={Pork} />
        <Route path="/meat/fishes" component={Fishes} />
      </div>
    );
  }
}

export default Meat;
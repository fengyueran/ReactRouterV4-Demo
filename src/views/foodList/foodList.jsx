import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FoodList extends Component {
  render() {
    return (
      <section>
        <span>This is super market</span>
        <nav>
          <ul>
            <li>
              <Link to="/vegetables">Vegetables</Link>
            </li>
            <li>
              <Link to="/meat">Meat</Link>
            </li>
            <li>
              <Link to="/fruits">Fruits</Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default FoodList;
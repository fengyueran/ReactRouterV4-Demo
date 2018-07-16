import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
);

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
Topic.propTypes = {
  match: PropTypes.object.isRequired,
};

const Topics = ({ match }) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用 React 渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>请选择一个主题。</h3>
      )}
    />
  </div>
);

Topics.propTypes = {
  match: PropTypes.object.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/main/home">首页</Link></li>
          <li><Link to="/main/about">关于</Link></li>
          <li><Link to="/main/topics">主题</Link></li>
        </ul>
        <Route exact path="/main/home" component={Home} />
        <Route path="/main/about" component={About} />
        <Route path="/main/topics" component={Topics} />
      </div>
    );
  }
}

export default Main;

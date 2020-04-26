'use strict';

// import React from 'react';
// import largeNumber from 'large-number-x';
// import logo from './images/logo.jpg';
// import './search.less';

const React = require('react');
const largeNumber = require('large-number-x');
const logo = require('./images/logo.jpg');
const s = require('./search.less');

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        搜索文字we
        {addResult}
        <img src={logo} onClick={this.loadComponent.bind(this)}></img>
      </div>
    );
  }
}

module.exports = <Search />;

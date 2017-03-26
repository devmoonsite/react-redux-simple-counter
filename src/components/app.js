import React, { Component } from 'react';
import { connect } from 'react-redux';
import Btn from './Btn';
import { updateCounter } from '../actions';
class App extends Component {

  clickBtn(type) {
    this.props.updateCounter(type);
  }

  render() {
    return (
      <div className="app">
          <div className='wrapper' >
            <Btn text="+" click={ this.clickBtn.bind(this) }/>
            <h1>{ this.props.counter ? this.props.counter.counter : '0' }</h1>
            <Btn text="-" click={ this.clickBtn.bind(this) }/>
          </div>          
      </div>
    );
  }
}


function mapStateToProp(state) {
  return {
    counter : state.Counter
  }
}

export default connect(mapStateToProp, { updateCounter })(App);
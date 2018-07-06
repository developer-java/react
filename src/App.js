import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <MyBlocks name="Magzhan" country="Kazakhstan" link="http://www.magjan.info"/>
        <MyBlocks name="Fake Name1" country="Fake Country1" link="#fake_link1"/>
        <MyBlocks name="Fake Name2" country="Fake Country2" link="#fake_link2"/>
      </div>
    );
  }
}

function MyBlocks(props) {
    return(
        <div className="myBlock">
            <a href={props.link} target="_blank">
                <p>My name is {props.name}, i'm from {props.country}</p>
            </a>
        </div>
    )
}

export default App;

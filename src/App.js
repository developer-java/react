import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

const url = process.env.PUBLIC_URL + '/img/bg.png';

const StyledHeader = styled.header`
    width:100%;
    height: 49px;
    background-color: #242424
    opacity: 0.8;
`

const StyledMenu = styled.div`
    height: 89px;
    padding-top: 20px;
`

const StyledMain = styled.main`
    height: 600px;
    padding-top:130px;
    background: url(${url}) no-repeat;
    background-size: cover;
`


class App extends Component {
  render() {
    return (
      <div className="App">
          <StyledHeader>
              <Grid>
                  <Header/>
              </Grid>
          </StyledHeader>

          <StyledMenu>
              <Grid>
                  <Menu/>
              </Grid>
          </StyledMenu>

          <StyledMain>
              <Grid>
                  <Main/>
              </Grid>
          </StyledMain>
      </div>
    );
  }
}

export default App;

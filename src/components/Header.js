import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Link from './Link'

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height:49px;
`

class Header extends React.Component{
    render() {
        return (
           <Row>
               <Col lg={12}>
                   <nav>
                       <StyledUl>
                           <Link link="#1" text="LINK 1"/>
                           <Link link="#2" text="LINK 2"/>
                           <Link link="#3" text="LINK 3"/>
                           <Link link="#4" text="LINK 4"/>
                           <Link link="#5" text="LINK 5"/>
                           <Link link="#6" text="LINK 6"/>
                           <Link link="#7" text="LINK 7"/>
                       </StyledUl>
                   </nav>
               </Col>
           </Row>
        )
    }
}

export default Header;
import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider'
const Repair = styled.div`
    color: #fff;
    font-weight: 700;
    line-height: 50px;
    font-size: 40px;
    
    span {
        display: block;
        line-height: 30px;
        font-size: 24px;
    }
`

const LigthText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight:300;
    line-height:28px;
    margin-top:54px;
    
`
const CallBtn= styled.button`
    width: 247px;
    height:67px;
    background-color:#ffa14b;
    border-radius: 30px;
    color:#fff;
    font-size:18px;
    font-weight: bold;
    margin-top:32px;
`
class Main extends React.Component{
    render(){
        return(
            <Row>
                <Col lg={5}>
                    <Repair>
                        Repair text is big
                        <span>
                            Repair text is small
                        </span>
                    </Repair>
                    <LigthText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad earum esse id incidunt maxime quo sunt? Earum modi nemo non similique sint? Dolore eos error iste laboriosam nostrum obcaecati. Deserunt dignissimos ratione reprehenderit tenetur.
                    </LigthText>
                    <CallBtn>Call Now</CallBtn>
                </Col>

                <Col lg={6} lgOffset={1}>
                    <Slider/>
                </Col>
            </Row>
        )
    }
}
export default Main;
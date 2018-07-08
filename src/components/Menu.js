import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #464646;
    font-size:18px;
    font-weight: 300;
    line-height: 22px;
`

const WorkTime = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;
    
    span{
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight:700;
    }
`

const Call = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;
    
    span{
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight:700;
    }
`


const CallButton = styled.button`
   width: 176px;
   height: 48px;
   background-color: #3fc7db;
   border-radius: 36px;
   color: #fff;
   font-size: 14px;
   font-weight:400;
`
class Address extends React.Component{
    render(){
        return(
            <span>
                {this.props.address}
            </span>
        )
    }
}
class Phone extends React.Component{
    render(){
        return(
            <span>
                {this.props.phone}
            </span>
        )
    }
}

 class Menu extends React.Component{
     render(){
         return(
             <Row>
                 <Col lg={3}>
                    <Repair>
                        This is Repair text
                    </Repair>
                 </Col>

                 <Col lg={3} lgOffset={1}>
                     <WorkTime>
                         Sun, Mon, Tru, Fri: to 09:00 form 00:00
                         <span>
                             <Address address="Astana, str 188, 11/4"/>
                         </span>
                     </WorkTime>
                 </Col>

                 <Col lg={3}>
                    <Call>
                        Call Center
                        <Phone phone="+7 777-777-7777"/>
                    </Call>
                 </Col>

                 <Col lg={2}>
                    <CallButton>
                        Call
                    </CallButton>
                 </Col>

             </Row>
         )
     }
 }
 export default Menu;
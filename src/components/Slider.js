import React, { Component } from 'react';

import Slide1 from '../img/slide1.jpeg'
import Slide2 from '../img/slide2.jpeg'
import Slide3 from '../img/slide3.jpeg'
import Slide4 from '../img/slide4.jpeg'

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slides: [
                {
                    eachSlide:`url(${Slide1})`
                },
                {
                    eachSlide:`url(${Slide2})`
                },
                {
                    eachSlide:`url(${Slide3})`
                },
                {
                    eachSlide:`url(${Slide4})`
                }
            ],
            autoplay: false,
            active: 0,
            max: 0
        };
        this.state.max = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
        this.toggleAutoPLay = this.toggleAutoPLay.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(()=>this.intervalBetweenSlides(), 3000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    intervalBetweenSlides() {
        if (this.state.autoplay === true) {
            if (this.state.active === this.state.max - 1) {
                this.state.active = 0;
            } else {
                this.state.active++;
            }
            this.setState({
                active: this.state.active
            })
        }
    }
    toggleAutoPLay(){
        this.setState({
            autoplay: !this.state.autoplay
        })
    }

    next(){
        (this.state.active < this.state.max - 1) ?
            this.setState({
                active: this.state.active + 1
            }) :
            this.setState({
                active: 0
            })
    }

    prev(){
        (this.state.active>0)?
            this.setState({
                active: this.state.active - 1
            }) :
            this.setState({
                active: this.state.max - 1
            })
    }
    dost(index, event){
        this.setState({
            active: index
        })
    }
    isActive(value){
        if(this.state.active === value){
            return 'active';
        }
    }
    setSliderStyles(){
        const transition = this.state.active * - 100/this.state.slides.length;
        return{
            width: (this.state.slides.length * 100)+'%',
            transform: `translateX(${transition}%)`
        }
    }

    renderSlides(){
        const transition = 100/this.state.slides.length +'%';
        return this.state.slides.map((item, index)=>(
            <div className="each-slide" key={index} style={{backgroundImage: item.eachSlide, width: transition}}></div>
        ))
    }

    renderDots(){
        return this.state.slides.map((item, index) => (
            <li className={this.isActive(index) + ' dots'} key={index} ref="dots" onClick={this.dost.bind(this, index)}>
                <a>&#9679;</a>
            </li>
        ))
    }

    renderPlayStop(){
        let playStop;
        if(this.state.autoplay){
            playStop =
                <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                </svg>;
        }else{
            playStop =
                <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                </svg>;
        }

        return playStop;
    }

    renderArrows(){
        return(
            <div>
                <button type="button" className="arrows prev" onClick={this.prev}>
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>

                <button type="button" className="arrows next" onClick={this.next}>
                    <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        )
    }

    render(){
        return(
            <div className="slider">
                <div className="wrapper" style={this.setSliderStyles()}>
                    {this.renderSlides()}
                </div>
                {this.renderArrows()}
                <ul className="dots-container">
                    {this.renderDots()}
                </ul>
                <a className="toggle-play" onClick={this.toggleAutoPLay}>
                    {this.renderPlayStop()}
                </a>
            </div>
        )
    }
}

export default Slider;
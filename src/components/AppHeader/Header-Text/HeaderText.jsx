import React from 'react';
import img2 from '../../../img/11.jpg';
import './header-text.css';


export default class HeaderText extends React.Component{
    constructor(props) {
        super(props);
        this.getPages();
    }

    getPages() {
        return this.props.pages.map((obj, i) => {
            return (
                <a href="#" className="nav-link" key={i}>
                    {obj.name}
                </a>
            );
        });
    }

    render() {
        return (
            <div className="main">
                <div className="main-welcome">
                    <img src={img2} className="main-img"/>
                    <div className="carousel-text">
                        <p className="p">Добро пожаловать на мою страничку!</p>
                        <p className="p">Здесь вы можете поближе познакомиться с моими творениями из кожи и выбрать лучшее для себя.</p>
                    </div>
                </div>
            </div>
        );
    }
}
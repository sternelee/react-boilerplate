import React from 'react';

class Home extends React.PureComponent{
    render(){
        return (
            <div className="home">
                <h3></h3>
                <div className="header">
                    <p>MONDAY, JUNE 5</p>
                    <p style={{ overflow: 'hidden' }}> 
                        <b style={{ float: 'left' }}>Today</b>
                        <img className="header-ico" src="http://lorempixel.com/100/100/fashion" alt=""/>
                    </p>
                </div>
                <ul>
                    <li>
                        <img className="home-item-image" src="http://lorempixel.com/336/412/city" alt=""/>
                        <h3>Handmade Soft Chair</h3>
                        <p>synthesize Path secondary synthesize Path secondary </p>
                    </li>
                    <li>
                        <img className="home-item-image" src="http://lorempixel.com/336/412/city" alt=""/>
                        <h3>Handmade Soft Chair</h3>
                        <p>synthesize Path secondary synthesize Path secondary </p>
                    </li>
                    <li>
                        <img className="home-item-image" src="http://lorempixel.com/336/412/city" alt=""/>
                        <h3>Handmade Soft Chair</h3>
                        <p>synthesize Path secondary synthesize Path secondary </p>
                    </li>
                    <li>
                        <img className="home-item-image" src="http://lorempixel.com/336/412/city" alt=""/>
                        <h3>Handmade Soft Chair</h3>
                        <p>synthesize Path secondary synthesize Path secondary </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
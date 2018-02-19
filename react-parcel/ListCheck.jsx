import React, { Component } from 'react';

const Nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'e', 'f'];

const Number = ({number, on, onClick}) => <span onClick={onClick} className={on ? 'on' : ''} style={{display:'inline-block', width: '30px'}}>{number}</span>;



class ListCheck extends Component {
    onNumberClick(i, e) {
        console.log(i, e)
    }
    render() {
        const SpansMap = Nums.map((v, i) => {
            return (
                <Number number={v} key={i} on={true} onClick={this.onNumberClick.bind(this, v)} />
            )
        })
        
        // const DivsMap = Nums.map((v, i) => {
        //     return (
        //         <SpansMap />
        //     )
        // })
        return (
            <div>
                List ListCheck <br />
                {
                    SpansMap
                }
            </div>
        )
    }
}

export default ListCheck;
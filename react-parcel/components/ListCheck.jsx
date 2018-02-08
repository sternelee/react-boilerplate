import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

const Nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let NumsList = [];
for(let i = 0; i < Nums.length; i++) {
    for(let j = 0; j < Nums.length; j++) {
        NumsList.push(Nums[i]+Nums[j])
    }
}

class Store {
    @observable checkBoxs = new Array(256).fill(false)
    @observable checkList = new Array(16).fill(false)

    @computed get checkedBoxs(){
        let checkedboxs = [];
        this.checkBoxs.forEach((v, i) => {
            if(v) checkedboxs.push(NumsList[i])
        })
        for(let i = 0; i < this.checkList.length; i++) {
            if(this.checkList[i]) {
                let index = checkedboxs.indexOf(Nums[i]+'0')
                checkedboxs = checkedboxs.filter((v, j) => j < index).concat(Nums[i]).concat(checkedboxs.filter((v, j) => j >= index + 16))
            }
        }
        return checkedboxs.reduce((total, v) => total + ',' + v, '').slice(1)
    }
    @action
    updateCheck(index){
        this.checkBoxs[index] = !this.checkBoxs[index]
    }
    updateChecks(index, bol){
        for(let i = 0; i < Nums.length; i++) {
            this.checkBoxs[i+index*16] = bol
        }
        this.checkList[index] = bol
    }
}

const store = new Store;

const NumberSpan = ({number, on, onNumberClick}) => <span onClick={onNumberClick} className={on ? 'on' : ''} style={{display:'inline-block', width: 30, textAlign: 'center', cursor: 'pointer', background: on ? '#ccc' : '', userSelect: 'none'}}>{number}</span>;

@observer
class ListCheck extends Component {
    onNumberClick(i) {
        const index = NumsList.indexOf(i);
        store.updateCheck(index);
    }
    onSelectAll(i, e) {
        store.updateChecks(i, e.target.checked)
    }
    render() {
        const SpansMap = NumsList.map((v, i) => {
            return (
                <NumberSpan number={v} key={i} on={store.checkBoxs[i]} onNumberClick={this.onNumberClick.bind(this, v)} />
            )
        })

        const SelectAllMap = Nums.map((v, i) => <Checkbox key={i} size={'large'} onChange={this.onSelectAll.bind(this, i)} />);

        return (
            <div>
                List ListCheck <br />
                
                <div style={{overflow: 'hidden'}}>
                    <div style={{width: 480, float:'left'}}>
                    {
                        SpansMap
                    }
                    </div>
                    <div style={{width: 30, float: 'left'}}>
                        {
                            SelectAllMap
                        }
                    </div>
                </div>
                <div style={{width: 480, marginTop: '40px'}}>{store.checkedBoxs}</div>
            </div>
        )
    }
}

export default ListCheck;
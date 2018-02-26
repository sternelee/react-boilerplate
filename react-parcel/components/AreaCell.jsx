import React, { Component } from 'react';
import _ from 'lodash';
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
    // 通道组件
    @observable areaBoxs = new Array(256).fill(false)
    @observable areaList = new Array(16).fill(false)

    @computed get checkedAreas() {
        let checkedboxs = []
        this.areaBoxs.forEach((v, i) => {
            if(v) checkedboxs.push(NumsList[i])
        })
        for(let i = 0; i < this.areaList.length; i++) {
            if(this.areaList[i]) {
                // let index = checkedboxs.indexOf(Nums[i]+'0')
                // checkedboxs = checkedboxs.filter((v, j) => j < index).concat(Nums[i]).concat(checkedboxs.filter((v, j) => j >= index + 16))
                checkedboxs = checkedboxs.filter((v, j) => _.last(v) != Nums[i]).concat(Nums[i])
            }
        }
        return checkedboxs.reduce((total, v) => total + ',' + v, '').slice(1)
    }
    @action
    initAreaBoxs() {
        this.areaBoxs = new Array(256).fill(false)
        this.areaList = new Array(16).fill(false)
    }
    updateArea(index) {
        this.areaBoxs[index] = !this.areaBoxs[index]
        let idx = parseInt(index % 16);
        if(this.areaList[idx] && !this.areaBoxs[index]) {
            this.areaList[idx] = false
        }
        if(this.areaBoxs[index]) {
            let rowTrue = true;
            for(let i = 0; i < 16; i++) {
                if(!this.areaBoxs[i*16+idx]) {
                    rowTrue = false
                    break
                }
            }
            if(rowTrue) this.areaList[idx] = true
        }
    }
    updateAreaRow(index, bol) {
        for(let i = 0; i < Nums.length; i++) {
            this.areaBoxs[i*16+index] = bol
        }
        this.areaList[index] = bol
    }
    initAreas(initArea) {
        this.initAreaBoxs();
        let initAreas = initArea.split(',');
        for(let i = 0 ; i < initAreas.length; i++) {
            if(initAreas[i].length == 1) {
                let idx = Nums.indexOf(initAreas[i]);
                this.updateAreaRow(idx, true)
            }else{
                let idx = NumsList.indexOf(initAreas[i]);
                this.updateArea(idx)
            }
        }
    }
}

const store = new Store;

const SpanWidth = 24;

const NumberSpan = ({number, on, onNumberClick}) => <span onClick={onNumberClick} className={on ? 'on' : ''} style={{display: 'inline-block', width: SpanWidth, textAlign: 'center', cursor: 'pointer', background: on ? '#108ee9' : '', userSelect: 'none'}}>{number}</span>;

@observer
class AreaCells extends Component {
    onNumberClick(i) {
        const { onChange } = this.props;
        const index = NumsList.indexOf(i);
        store.updateArea(index);
        onChange(store.checkedAreas);
    }
    onSelectAll(i, e) {
        const { onChange } = this.props;
        store.updateAreaRow(i, e.target.checked);
        onChange(store.checkedAreas);
    }
    componentWillMount() {
        const { val } = this.props;
        store.initAreas(val);
    }
    render() {
        // 表格头部
        const RowHead = Nums.map((v, i) => <span key={i} style={{display: 'inline-block', width: SpanWidth, textAlign: 'center'}}>{v}</span>)

        // 256个格子
        const SpansMap = NumsList.map((v, i) => <NumberSpan number={v} key={i} on={store.areaBoxs[i]} onNumberClick={this.onNumberClick.bind(this, v)} />)
        // 底部select组件
        const SelectAllMap = Nums.map((v, i) => <span key={i} style={{display: 'inline-block', width: SpanWidth, textAlign: 'center'}}><Checkbox checked={store.areaList[i]} onChange={this.onSelectAll.bind(this, i)} /></span>)


        return (
            <div style={{lineHeight: `${SpanWidth}px`}}>
                <p style={{width: SpanWidth*17, background: '#ccc', margin: 0}}><span style={{display: 'inline-block', width: SpanWidth, textAlign: 'center'}}>X</span>{RowHead}</p>
                <div style={{overflow: 'hidden'}}>
                    <p style={{width: SpanWidth, float: 'left', background: '#ccc', margin: 0}}>{RowHead}</p>
                    <div style={{width: SpanWidth*16, float: 'left'}}>
                    {
                        SpansMap
                    }
                    </div>
                </div>
                <div style={{marginLeft: SpanWidth}}>
                    {
                        SelectAllMap
                    }
                </div>
                <div style={{width: 360, marginTop: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', padding: '4px 7px', minHeight: '64px', wordWrap: 'break-word'}}>{store.checkedAreas}</div>
            </div>
        )
    }
}

export default AreaCells;
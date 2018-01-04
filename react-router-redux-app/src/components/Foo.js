import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Foo(props) {
  return <div>
      I am Foo! 
      <button onClick={props.add}> 加1 </button>
      后得到  <b> {props.counter} </b> <br /> <Link to="/">回来首页吧</Link> </div>
}

const mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    add: () => dispatch({type: 'ADD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foo)

import React from 'react'
import {Link} from 'react-router-dom'
export default function Result() {
  var x = localStorage.getItem('total')
  var y = localStorage.getItem('totalvalue')
  var d = localStorage.getItem('totaldetractors')
  var p = localStorage.getItem('totalpromoters')
  var nps = (p-d)/x

  

  return (
    <div>
        <h1>Result for {x} people.</h1>
        <h1>Average: {y/x}</h1>
        <h1>NPS : {nps*100}</h1>
        <Link to="/">Home</Link>
    </div>
  )
}

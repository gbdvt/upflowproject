import './Result.css'
import React from 'react'
import {Link} from 'react-router-dom'
export default function Result() {
  var x = localStorage.getItem('total')
  var y = localStorage.getItem('totalvalue')
  var d = localStorage.getItem('totaldetractors')
  var p = localStorage.getItem('totalpromoters')
  var average = (y/x).toFixed(2);
  var nps = (((p-d)/x)*100).toFixed(2);

  

  return (
    <div>
      <Link to="/"><button className='button'>Home</button></Link>
        <h1 className='h1'>Result for <span className='nPeople'>{x}</span> people:</h1>
        <div className='data'>
          <div className='av'>
            <h2 className='h2'>Average: {average}</h2>
          </div>
          <div className='nps'>
            <h2 className='h2'>NPS : {nps}</h2>
          </div>
        </div>
    </div>
  )
}

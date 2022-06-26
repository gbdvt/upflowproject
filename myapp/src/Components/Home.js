import './Home.css'
import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {  

  /*   localStorage.setItem("total","0");
    localStorage.setItem("totalvalue","0");  */

  // Total Clicks
  const nClicks = Number(localStorage.getItem('total'));
  localStorage.setItem('total', nClicks)

  // Total Values
  const nTotal = Number(localStorage.getItem('totalvalue'));  
  localStorage.setItem('totalvalue', nTotal)

  // Total Promoters
  const nPromoters = Number(localStorage.getItem('totalpromoters'));
  localStorage.setItem('totalpromoters', nPromoters)

  // Total Detractors
  const nDetractors = Number(localStorage.getItem('totaldetractors'));
  localStorage.setItem('totaldetractors', nDetractors)

  function increaseCount(number, type) {
    localStorage.setItem('total', nClicks+1)
    localStorage.setItem('totalvalue', nTotal+number)
    if (type==="d") {
      localStorage.setItem('totaldetractors', nDetractors+1)
    }
    if (type==="p") {
      localStorage.setItem('totalpromoters', nPromoters+1)
    }
  }

  return (
    <div >
      <h1 className='h1-type' >On a scale from 1 (never) to 10 (absolutely), how would you recommend Upflow to a friend?</h1>
      <div class="buttons">
        
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(1, "d")}>1</button></Link>  
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(2, "d")}>2</button></Link>
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(3, "d")}>3</button></Link>
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(4, "d")}>4</button></Link>
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(5, "d")}>5</button></Link>
        <Link to="/result"><button className="button-r" onClick={() => increaseCount(6, "d")}>6</button></Link>
        <Link to="/result"><button className="button-y" onClick={() => increaseCount(7, "ps")}>7</button></Link>
        <Link to="/result"><button className="button-y" onClick={() => increaseCount(8, "ps")}>8</button></Link>
        <Link to="/result"><button className="button-g" onClick={() => increaseCount(9, "p")}>9</button></Link>
        <Link to="/result"><button className="button-g" onClick={() => increaseCount(10, "p")}>10</button></Link>
        <br></br>
        </div>
    </div>
  )
}

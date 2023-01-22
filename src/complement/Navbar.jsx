import { React, Component } from 'react'
import './Navbar.css'
const Vector = require('../img/Vector (1).png')
const Vector2 = require('../img/Vector (2).png')
const price = require("../img/17k.png")
const shoes = require("../img/usama-akram-kP6knT7tjn4-unsplash-removebg 1.png")
const small = require("../img/Ellipse 11.png")
const smashoes = require("../img/Ellipse 12.png")



class Navbar extends Component {
  render() {
    return (
      <>

        <div className="section">
          <div className="container">
            <div className="row sm-d-none">
              <div className="col-3">
                <img src={Vector} alt="" />
              </div>
              <div className="col-5">
                <ul className="list">
                  <li className="item1">Home</li>
                  <li className="item">Product</li>
                  <li className="item">About</li>
                  <li className="item">Review</li>
                </ul>
              </div>
              <div className="col-2 mr-4">
                <button className='bon'>Shop now</button>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="hiw d-flex">
                  <h4 className='bring'>Bring power to your steps.<img src={Vector2} alt="" /></h4>
                </div>
                <h1 className='walk'>Walk the line.</h1>
                <p className='now'>Now that you have a ready strategy to move forward, <br /> it’s time to come up with some ideas. </p>
                <p className='now'>Now that you have a <span>ready strategy</span> to move forward, </p>
                <div className="des d-flex">
                  <h3 className='pos'>Price : $125 </h3>
                  <del className='pos'>  $169 </del>
                </div>
                <div className="hey">
                  <button className='bon1'>Shop now</button>
                  <button className='bon2'>Shop now</button>
                </div>
                <img src={price} alt="" />
                <img className="follow" src={price} alt="" />
              </div>
              <div className="col-5">
                <img className='soya' src={shoes} alt="" />
             <div className="bozimg d-flex">
             <div className="dis1">
                  <img src={small} alt="" />
                </div>
                <div className="dis">
                  <img src={smashoes} alt="" />
                </div>
                <div className="dis">
                  <img src={small} alt="" />
                </div>
             </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Navbar;
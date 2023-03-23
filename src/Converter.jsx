import React from 'react'
import './css/Converter.css'

export default function Converter() {
  return (
    <section id='converter'>
        <div className="converter-container">
            <div className="converter-left">
                <div className="converter-left-container">
                    <h1>International<br />Money<br />Transfer</h1>
                    <p>
                        Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. <span>Sapiente</span> amet magni, iure, minima soluta quam distinctio impedit vero cupiditate tempora <span>necessitatibus</span> expedita sequi odit <span>corporis</span> alias unde adipisci enim. Autem?
                    </p>
                    <p>
                        FCA Regulated
                    </p>
                    <a href="">Learn more</a>
                </div>
            </div>
            <div className="converter-right">
                <div className="converter-right-container">
                    <div className='input-amount-div'>
                        <label htmlFor="input-amount">You send exactly</label>

                        <div>
                            <input type="text" name="" id="input-amount" />
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-minus"></i><div><p>4.28 GBP</p><p>Low cost transfer fee</p></div></li>
                        <li><i class="fa-solid fa-equals"></i><div><p>4.28 GBP</p><p>Low cost transfer fee</p></div></li>
                        <li><i class="fa-solid fa-xmark"></i><div><p>4.28 GBP</p><p>Low cost transfer fee</p></div></li>
                    </ul>
                    <div className='amount-get-div'>
                        <label htmlFor="amount-gets">You send exactly</label>
                        <div>
                            <input type="text" name="" id="amount-gets" />
                            <select name="cars" id="cars">
                                <option value="volvo"><a href="https://wise.com/public-resources/assets/logos/wise-personal/logo_inverse.svg"></a>Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='save-upto'>
                        <p>You could save up to <span>36 GBP</span>.</p>
                    </div>
                    <div className="converter-btns">
                        <a href="">Compare Price</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

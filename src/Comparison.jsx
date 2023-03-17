import React from 'react'
import './css/Comparison.css'

export default function Comparison() {
  return (
    <section id="comparison">
        <div className="comparison-container">
            <div className="comparison-upper">
                <h1>Find out how much it costs to<br />send money abroad</h1>
            </div>
            <div className="comparison-lower">
                <table>
                    <tr>
                        <th><p>Sending 1,000.00 GBP with</p></th>
                        <th><p>Recipient gets</p><span>(Total after fees)</span></th>
                        <th><p>Transfer fee</p></th>
                        <th><p>Exchange rate</p><span>(1 GBP → EUR)</span></th>
                    </tr>
                    <tr className='tr-to-lit'>
                        <td className='table-logo'><img src="https://studentambassadors.microsoft.com/Assets/Badge/LevelAlpha160x143.png" alt="" /></td>
                        <td className='price-bold' ><p>1,125.23 EUR</p><span>Save up to 49.02 EUR</span></td>
                        <td><p>4.28 GBP</p></td>
                        <td><p>1.13007</p><span>Mid-market rate</span></td>
                    </tr>
                    <tr className='tr-to-not-lit'>
                        <td className='table-logo'><img src="https://studentambassadors.microsoft.com/Assets/Badge/LevelAlpha160x143.png" alt="" /></td>
                        <td className='price-bold'><p>1,125.23 EUR</p><span><i class="fa-solid fa-caret-down"></i> -0.02 EUR</span></td>
                        <td><p>4.28 GBP</p></td>
                        <td><p>1.13007</p><span>Mid-market rate</span></td>
                    </tr>
                    <tr className='tr-to-not-lit'>
                        <td className='table-logo'><img src="https://studentambassadors.microsoft.com/Assets/Badge/LevelAlpha160x143.png" alt="" /></td>
                        <td className='price-bold'><p>1,125.23 EUR</p><span><i class="fa-solid fa-caret-down"></i> -0.02 EUR</span></td>
                        <td><p>4.28 GBP</p></td>
                        <td><p>1.13007</p><span>Mid-market rate</span></td>
                    </tr>
                </table>
            </div>


        </div>
    </section>
  )
}

import React, { useState } from 'react'
import './App2.css';
const AddSec = () => {
  const[button,setId]=useState('')
  const createFrame=()=>{
   document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function(event) {
            setId(event.target.id)
      });
  });
      if(button==='equityA'){  
                let iframe = document.createElement('iframe');
                iframe.id='myFrame';
                iframe.src = 'about:blank';
                iframe.width = '600';
                iframe.height = '700';
                iframe.style.border = 'none';
                document.body.appendChild(iframe);
                let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(`
                <html>
                    <body>
                      <h2>Equity Security</h2>
                      <form action="submit.js" method="post">
                        <label for="name">Security Name:</label>
                        <input type="text" id="name" name="name" class="right-align"/><br/><br/>
                        <label for="text">Security Description:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Has Position:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Is Active:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Round Lot Size:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Unique Name:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">CUSIP:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">ISIN:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">SEDOL:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Ticker:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Unique ID:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Global ID:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Ticker and Exchange:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Is ADR:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">ADR Underlying Ticker:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">ADR Underlying Currency:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Shares Per ADR:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">IPO Date:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Price Currency:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Settle Days:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Shares Outstanding:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Voting Rights Per Share:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">20 Day Average Volume:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Beta:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Short Interest:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">YTD Return:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">90 Day Price Volatility:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Asset Class:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Country:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Credit Rating:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Currency:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Instrument:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Liquidity Profile:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Maturity:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF NAICS Code:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Region:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Sector:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Form PF Sub Asset Class:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Issue Country:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Exchange:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Issuer:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Issue Currency:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Trading Currency:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Industry Sub Group:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Industry Group:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Bloomberg Industry Sector:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Country of Incorporation:</label>
                        <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                        <label for="text">Risk Currency:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Open Price:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Close Price:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Volume:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Last Price:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Ask Price:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Bid Price:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">PE Ratio:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Declared Date:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Ex Date:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Record Date:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Pay Date:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Amount:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Frequency:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <label for="text">Dividend Type:</label>
                        <input type="text" id="text" name="text"/><br/><br/>
                        <button>Submit</button>
                        <button id="closeButton">Close</button>
                      </form>
                    </body>
                    </html>
                  `)
                  iframeDocument.close()
      }else if(button==='bondA'){
              var iframe = document.createElement('iframe');
              iframe.id='myFrame';
              iframe.src = 'about:blank';
              iframe.width = '600';
              iframe.height = '700';
              iframe.style.border = 'none';
              document.body.appendChild(iframe);
              var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
              iframeDocument.open();
              iframeDocument.write(`
              <html>
                  <body>
                    <h2>Bond Security</h2>
                    <form action="submit.js" method="post">
                      <label for="name">Security Name:</label>
                      <input type="text" id="name" name="name" class="right-align"/><br/><br/>
                      <label for="text">Security Description:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Has Position:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Is Active:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Round Lot Size:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Unique Name:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">CUSIP:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">ISIN:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">SEDOL:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Ticker:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Unique ID:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Global ID:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Ticker and Exchange:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Is ADR:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">ADR Underlying Ticker:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">ADR Underlying Currency:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Shares Per ADR:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">IPO Date:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Price Currency:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Settle Days:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Shares Outstanding:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Voting Rights Per Share:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">20 Day Average Volume:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Beta:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Short Interest:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">YTD Return:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">90 Day Price Volatility:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Asset Class:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Country:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Credit Rating:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Currency:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Instrument:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Liquidity Profile:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Maturity:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF NAICS Code:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Region:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Sector:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Form PF Sub Asset Class:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Issue Country:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Exchange:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Issuer:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Issue Currency:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Trading Currency:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Industry Sub Group:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Industry Group:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Bloomberg Industry Sector:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Country of Incorporation:</label>
                      <input type="text" id="text" name="text" class="right-align"/><br/><br/>
                      <label for="text">Risk Currency:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Open Price:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Close Price:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Volume:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Last Price:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Ask Price:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Bid Price:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">PE Ratio:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Declared Date:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Ex Date:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Record Date:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Pay Date:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Amount:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Frequency:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <label for="text">Dividend Type:</label>
                      <input type="text" id="text" name="text"/><br/><br/>
                      <button>Submit</button>
                      <button id="closeButton">Close</button>
                    </form>
                  </body>
                  </html>
                `)
                iframeDocument.close()
    }
    }
  return (
    <div className="container">
        {/* <h1 className="h1-headings">Welcome to Sec Master</h1> */}
        <h2>Which security to Add?</h2>
        <button type="button" className="btn btn-primary" onClick={createFrame} id="equityA">Equity</button>
        <br/><br/>
        <button type="button" className="btn btn-primary" onClick={createFrame} id="bondA">Bond</button><br/><br/>
        <h2> Which security to Edit?</h2>
        <button type="button" className="btn btn-primary" >Equity</button>
        <br/><br/>
        <button type="button" className="btn btn-primary">Bond</button><br/><br/>
    </div>
  )
}

export default AddSec

import React,{useEffect, useState} from 'react'
import "./App2.css"
import infom from './Info.json'
const EditEquityForm = () => {
   const[data,setData]=useState(''); 
   const keys = Object.keys(infom); 
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        field11: '',
        field12: '',
        field13: '',
        field14: '',
        field15: '',
        field16: '',
        field17: '',
        field18: '',
        field19: '',
        field20: '',
        field21: '',
        field22: '',
        field23: '',
        field24: '',
        field25: '',
        field26: '',
        field27: '',
        field28: '',
        field29: '',
        field30: '',
        field31: '',
        field32: '',
        field33: '',
        field34: '',
        field35: '',
        field36: '',
        field37: '',
        field38: '',
        field39: '',
        field40: '',
        field41: '',
        field42: '',
        field43: '',
        field44: '',
        field45: '',
        field46: '',
        field47: '',
        field48: '',
        field49: '',
        field50: '',
        field51: '',
        field52: '',
        field53: '',
        field54: '',
        field55: '',
        field56: '',
        field57: '',
        field58: '',
        field59: '',
        field60: '',
        field61: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
    const handleEditSubmit=(e)=>{
        e.preventDefault()
        alert(data);
       setFormData({
        field1: infom["Security Name"],
        field2: infom['Security Description'],    
        field3: infom['Has Position'],
        field4: infom["Is Active Security"],
        field5: infom['Lot Size'],
        field6: infom["BBG Unique Name"],
        field7: infom[ "CUSIP"],
        field8: infom['ISIN'],
        field9: infom["SEDOL"],
        field10: infom['Bloomberg Ticker'],
        field11: infom['Bloomberg Unique ID'],
        field12: infom['BBG Global ID'],
        field13: infom['Ticker and Exchange'],
        field14: infom['Is ADR Flag'],
        field15: infom['ADR Underlying Ticker'],
        field16: infom['ADR Underlying Currency"'],
        field17: infom['Shares Per ADR'],
        field18: infom['IPO Date'],
        field19: infom['Pricing Currency'],
        field20: infom['Settle Days'],
        field21: infom['Total Shares Outstanding'],
        field22: infom['Voting Rights Per Share'],
        field23: infom['Average Volume - 20D'],
        field24: infom['Beta'],
        field25: infom['Return - YTD'],
        field26: infom['Volatility - 90D'],
        field27: infom['PF Asset Class'],
        field28: infom['PF Country'],
        field29: infom['PF Credit Rating'],
        field30: infom['PF Currency'],
        field31: infom['PF Instrument'],
        field32: infom['PF Liquidity Profile'],
        field34: infom['PF Maturity'],
        field35: infom['PF NAICS Code'],
        field36: infom['PF Region'],
        field37: infom["PF Region"],
        field38: infom[ "PF Sector"],
        field39: infom[  "PF Sub Asset Class"],
        field40: infom["Country of Issuance"],
        field41: infom["Exchange"],
        field42: infom["Issue Currency"],
        field43: infom["Trading Currency"],
        field44: infom["BBG Industry Sub Group"],
        field45: infom["Bloomberg Industry Group"],
        field46: infom["Bloomberg Sector"],
        field47: infom["Country of Incorporation"],
        field48: infom["Risk Currency"],
        field49: infom["Open Price"],
        field50: infom[ "Close Price"],
        field51: infom["Volume"],
        field52: infom["Last Price"],
        field53: infom["Ask Price"],
        field54: infom[ "Bid Price"],
        field55: infom["PE Ratio"],
        field56: infom["Dividend Ex Date"],
        field57: infom["Dividend Record Date"],
        field58: infom[ "Dividend Pay Date"],
        field59: infom["Dividend Amount"],
        field60: infom["Frequency"],
        field61: infom['Dividend Type'],
       })
        console.log(formData)
    }

    
    // useEffect(() => {
        
    //     axios.get('/Info.json')
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data)
    //         const selectedItem = data.find(item => item.id ===location.state.info);
    //         console.log(location.state.info)
    //         console.log(selectedItem)
    //       })
    //       .catch(error => console.error('Error fetching data:', error));
    //   }); 
  return (
    <div>   
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Name of Equity" aria-label="Search" value={data} onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-primary" type="submit" onClick={handleEditSubmit}>Edit</button>
      </form><br/><br/>
                     <h1 className="centered-heading">Equity Security</h1>
                    <div className="form-container">
                      <form  onSubmit={handleSubmit} className="form-group">
                        <label>Security Name:</label>
                        <input type="text" id="text" name="field1" class="right-align" value={formData.field1} onChange={handleInputChange}/><br/><br/>
                        <label >Security Description:</label>
                        <input type="text" id="text" name="field2" class="right-align" value={formData.field2} onChange={handleInputChange}/><br/><br/>
                        <label>Has Position:</label>
                        <input type="text" id="text" name="field3" class="right-align" value={formData.field3} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Is Active:</label>
                        <input type="text" id="text" name="field4" class="right-align" value={formData.field4} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Round Lot Size:</label>
                        <input type="text" id="text" name="field5" class="right-align" value={formData.field5} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Unique Name:</label>
                        <input type="text" id="text" name="field6" class="right-align" value={formData.field6} onChange={handleInputChange}/><br/><br/>
                        <label for="text">CUSIP:</label>
                        <input type="text" id="text" name="field7" class="right-align" value={formData.field7} onChange={handleInputChange}/><br/><br/>
                        <label for="text">ISIN:</label>
                        <input type="text" id="text" name="field8" class="right-align" value={formData.field8} onChange={handleInputChange}/><br/><br/>
                        <label for="text">SEDOL:</label>
                        <input type="text" id="text" name="field9" class="right-align" value={formData.field9} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Ticker:</label>
                        <input type="text" id="text" name="field10" class="right-align" value={formData.field10} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Unique ID:</label>
                        <input type="text" id="text" name="field11" class="right-align" value={formData.field11} onChange={handleInputChange}/><br/><br/>
                        <label >Bloomberg Global ID:</label>
                        <input type="text" id="text" name="field12" class="right-align" value={formData.field12} onChange={handleInputChange}/><br/><br/>
                        <label >Bloomberg Ticker and Exchange:</label>
                        <input type="text" id="text" name="field13" class="right-align" value={formData.field13} onChange={handleInputChange}/><br/><br/>
                        <label >Is ADR:</label>
                        <input type="text" id="text" name="field14" class="right-align" value={formData.field14} onChange={handleInputChange}/><br/><br/>
                        <label>ADR Underlying Ticker:</label>
                        <input type="text" id="text" name="field15" class="right-align" value={formData.field15} onChange={handleInputChange}/><br/><br/>
                        <label>ADR Underlying Currency:</label>
                        <input type="text" id="text" name="field16" class="right-align" value={formData.field16} onChange={handleInputChange}/><br/><br/>
                        <label >Shares Per ADR:</label>
                        <input type="text" id="text" name="field17" class="right-align" value={formData.field17} onChange={handleInputChange}/><br/><br/>
                        <label>IPO Date:</label>
                        <input type="date" id="date" name="field18" class="right-align" value={formData.field18} onChange={handleInputChange}/><br/><br/>
                        <label >Price Currency:</label>
                        <input type="text" id="text" name="field19" class="right-align" value={formData.field19} onChange={handleInputChange}/><br/><br/>
                        <label >Settle Days:</label>
                        <input type="text" id="text" name="field20" class="right-align" value={formData.field20} onChange={handleInputChange}/><br/><br/>
                        <label>Shares Outstanding:</label>
                        <input type="text" id="text" name="field21" class="right-align" value={formData.field21} onChange={handleInputChange}/><br/><br/>
                        <label>Voting Rights Per Share:</label>
                        <input type="text" id="text" name="field22" class="right-align" value={formData.field22} onChange={handleInputChange}/><br/><br/>
                        <label>20 Day Average Volume:</label>
                        <input type="text" id="text" name="field23" class="right-align" value={formData.field23} onChange={handleInputChange}/><br/><br/>
                        <label>Beta:</label>
                        <input type="text" id="text" name="field24" class="right-align" value={formData.field24} onChange={handleInputChange}/><br/><br/>
                        <label>Short Interest:</label>
                        <input type="text" id="text" name="field25" class="right-align" value={formData.field25} onChange={handleInputChange}/><br/><br/>
                        <label>YTD Return:</label>
                        <input type="text" id="text" name="field26" class="right-align" value={formData.field26} onChange={handleInputChange}/><br/><br/>
                        <label>90 Day Price Volatility:</label>
                        <input type="text" id="text" name="field27" class="right-align" value={formData.field27} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Asset Class:</label>
                        <input type="text" id="text" name="field28" class="right-align" value={formData.field28} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Country:</label>
                        <input type="text" id="text" name="field29" class="right-align" value={formData.field29} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Credit Rating:</label>
                        <input type="text" id="text" name="field30" class="right-align" value={formData.field30} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Currency:</label>
                        <input type="text" id="text" name="field31" class="right-align" value={formData.field31} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Instrument:</label>
                        <input type="text" id="text" name="field32" class="right-align" value={formData.field32} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Liquidity Profile:</label>
                        <input type="text" id="text" name="field33" class="right-align" value={formData.field33} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Maturity:</label>
                        <input type="text" id="text" name="field34" class="right-align" value={formData.field34} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF NAICS Code:</label>
                        <input type="text" id="text" name="field35" class="right-align" value={formData.field35} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Region:</label>
                        <input type="text" id="text" name="field36" class="right-align" value={formData.field36} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Sector:</label>
                        <input type="text" id="text" name="field37" class="right-align" value={formData.field37} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Sub Asset Class:</label>
                        <input type="text" id="text" name="field38" class="right-align" value={formData.field38} onChange={handleInputChange}/><br/><br/>
                        <label>Issue Country:</label>
                        <input type="text" id="text" name="field39" class="right-align" value={formData.field39} onChange={handleInputChange}/><br/><br/>
                        <label >Exchange:</label>
                        <input type="text" id="text" name="field40" class="right-align" value={formData.field40} onChange={handleInputChange}/><br/><br/>
                        <label >Issuer:</label>
                        <input type="text" id="text" name="field41" class="right-align" value={formData.field41} onChange={handleInputChange}/><br/><br/>
              
                        <label>Trading Currency:</label>
                        <input type="text" id="text" name="field42" class="right-align" value={formData.field42} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Sub Group:</label>
                        <input type="text" id="text" name="field43" class="right-align" value={formData.field43} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Group:</label>
                        <input type="text" id="text" name="field44" class="right-align" value={formData.field44} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Sector:</label>
                        <input type="text" id="text" name="field45" class="right-align" value={formData.field45} onChange={handleInputChange}/><br/><br/>
                        <label>Country of Incorporation:</label>
                        <input type="text" id="text" name="field46" class="right-align" value={formData.field46} onChange={handleInputChange}/><br/><br/>
                        <label>Risk Currency:</label>
                        <input type="text" id="text" name="field47" value={formData.field47} onChange={handleInputChange}/><br/><br/>
                        <label>Open Price:</label>
                        <input type="text" id="text" name="field48" value={formData.field48} onChange={handleInputChange}/><br/><br/>
                        <label >Close Price:</label>
                        <input type="text" id="text" name="field49" value={formData.field49} onChange={handleInputChange}/><br/><br/>
                        <label>Volume:</label>
                        <input type="text" id="text" name="field50" value={formData.field50} onChange={handleInputChange}/><br/><br/>
                        <label>Last Price:</label>
                        <input type="text" id="text" name="field51" value={formData.field51} onChange={handleInputChange}/><br/><br/>
                        <label>Ask Price:</label>
                        <input type="text" id="text" name="field52" value={formData.field52} onChange={handleInputChange}/><br/><br/>
                        <label>Bid Price:</label>
                        <input type="text" id="text" name="field53" value={formData.field53} onChange={handleInputChange}/><br/><br/>
                        <label>PE Ratio:</label>
                        <input type="text" id="text" name="field54" value={formData.field54} onChange={handleInputChange}/><br/><br/>
                        <label>Declared Date:</label>
                        <input type="date" id="datetime" name="field55" value={formData.field55} onChange={handleInputChange}/><br/><br/>
                        <label>Ex Date:</label>
                        <input type="date" id="datetime" name="field56" value={formData.field56} onChange={handleInputChange}/><br/><br/>
                        <label>Record Date:</label>
                        <input type="date" id="datetime" name="field57" value={formData.field57} onChange={handleInputChange}/><br/><br/>
                        <label>Pay Date:</label>
                        <input type="date" id="datetime" name="field58" value={formData.field58} onChange={handleInputChange}/><br/><br/>
                        <label >Amount:</label>
                        <input type="text" id="text" name="field59" value={formData.field59} onChange={handleInputChange}/><br/><br/>
                        <label>Frequency:</label>
                        <input type="text" id="text" name="field60" value={formData.field60} onChange={handleInputChange}/><br/><br/>
                        <label>Dividend Type:</label>
                        <input type="text" id="text" name="field61" value={formData.field61} onChange={handleInputChange}/><br/><br/>
                        <button className="form-btn">Submit</button><br/><br/>
                        <button className="form-btn">Close</button>
                      </form>
                      </div>
    </div>
  )
}

export default EditEquityForm

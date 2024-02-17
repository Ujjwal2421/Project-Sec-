import React,{useState} from 'react'

const FetchBond = () => {
    const[data,setData]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
    <div>
        <h3>Want to fetch all the data related to bond.</h3>
      <button type="button" className="btn btn-success">Click Here</button><br/><br/>
      <h3>Want to fetch specific bond data.</h3>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Name of Bond" aria-label="Search" value={data} onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}

export default FetchBond

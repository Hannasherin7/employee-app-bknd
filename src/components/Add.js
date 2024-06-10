import React, { useState } from 'react'
import { Nav } from './Nav'

export const Add = () => {
    const [data,setData]=useState(
        {
          "empname":"",
          "id":"",
          "salary":"",
          "department":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
      }
  return (
    <div>
        <h1><center>ADD EMPLOYEE</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">emp Name</label>
                        <input type="text" className="form-control"name='empname' value={data.empname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">emp id</label>
                    <input type="text" className="form-control"name='id' value={data.id}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">salary</label>
                    <input type="text" className="form-control" name='salary' value={data.salary}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">department</label>
                    <input type="text" className="form-control" name='department'value={data.department}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-success">ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

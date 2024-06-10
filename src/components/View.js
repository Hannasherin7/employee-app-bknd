import React, { useState } from 'react'
import { Nav } from './Nav'

export const View = () => {
    const [data,changeData]=useState([
        {
            "empname":"qwwe",
            "id":123,
            "salary":2000,
            "department":"asd"
        }
    ])
  return (
    <div>
        <h1><center>View All EMPLOYEE Details</center></h1>
       <Nav></Nav>
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">employee name</th>
                       <th scope="col">employee id</th>
                       <th scope="col">salary</th>
                       <th scope="col">department</th>
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value.empname}</td>
                                 <td>{value.id}</td>
                                 <td>{value.salary}</td>
                                 <td>{value.department}</td>
                               </tr>
                              
                           }
                   )}
                    </tbody>
                 </table>
           </div>
       </div>
   </div>
    </div>
  )
}

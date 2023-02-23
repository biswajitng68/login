import '../App.css';
import {Outlet, Link,useNavigate } from "react-router-dom";
import React, {useState} from 'react';

function Main() {
  var textcolor={
    color:"#dbf3c1"
  };
    return(
        <>
        {(localStorage.getItem("token"))?
        <div className=' my-4 row mx-4'>
        <div className='col-md-8'>
            <h3 style={textcolor}>Add your today's expense</h3>
       <div className="row g-2 ">
       <div className="col-md">
         <div className="form-floating">
           <input type="number" className="form-control" id="floatingInputGrid"  />
           <label for="floatingInputGrid">Expense value</label>
         </div>
       </div>
       <div className="col-md">
         <div className="form-floating">
           <select className="form-select" id="floatingSelectGrid">
             <option selected>General expense</option>
             <option value="1">Food expense</option>
             <option value="2">Clothes expense</option>
             <option value="3">Travel expense</option>
           </select>
           <label for="floatingSelectGrid">Expense type</label>
         </div>
       </div>
     </div>
     <div className="form-floating my-3">
           <input type="text" className="form-control" id="floatingInputGrid"  />
           <label for="floatingInputGrid">Expense details</label>
         </div>
     <div class="d-grid col-6 mx-auto my-3">
     
  <button class="btn btn-info" type="button">Add</button>
</div>
<h3 style={textcolor}> Today's expense sheet</h3>
     <div className='my-4 table tabl '>
     <table >
        <tr>
        <th>Expense type</th>
        <th>Expense details</th>
        <th>Expense</th>
        </tr>
        {(() => {
        let rows = [];
        for (let i = 0; i < 5; i++) {
          rows.push(<tr key={i}>
        <td>Travel expense</td>
        <td>The insurance industry is expanding quickly alongside the digital transformation in banking and business.The insurance industry is expanding quickly alongside the digital transformation in banking and business.</td>
        <td>120</td>
        </tr>
            );
        }
        return rows;
      })()}
        
        <tr>
        <th>Total expense</th>
        <th>400</th>
        </tr>
        </table>
     </div>
     </div>
     <div className='col-md-4 col-6 '>
        <div className='mainf'>
        <Link to="/year"> <div className='circstat'><h5>10215</h5><h4>Expense of year</h4></div></Link>
        <Link to="/month"><div className='circstat'><h5>10215</h5><h4>Expense of month</h4></div></Link>
        <div className='circstat'><h5>10215</h5><h4>Expense of day</h4></div>
        </div>
     </div>
     </div>
       :
       <div>sorry you have to login first</div>
       }
<Outlet/>
        </>
    );
    }

export default Main;
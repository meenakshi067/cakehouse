import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import  './Dash.css';
import {Link} from "react-router-dom"



function DashBoard() {  
  const [allCakes, setCakes] = useState([]);
  // let [sortcake , setsortcake]= useState([]);

  useEffect(() => {
    
    axios({
      method: "get",
      url:"https://apifromashu.herokuapp.com/api/allcakes"
    }).then((response) => {
      
     console.log(response.data);
    //  setsortcake(response.data.data)
      setCakes(response.data.data)
      // cake()

},
    (error) => {
        console.log(error);
     }
    
)
  }, [])

  // function cake() {
  //   allCakes.sort((a,b) => {
  //     console.log(a.price - b.price);
  //    })
  // }
  // let onbuton = () => {
  //   let bun = allCakes.sort((a, b) => {
  //          return (a.price-b.price)
  //   })
  //   console.log(bun);
  //  }
  
  


  return (

      <div>
      <Sidebar />
      
      <div >
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 fixed-top" style={{top:"50px",backgroundColor:"#fff",zIndex:10 }}>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <Link to="/Addcake"><button class="btn btn-sm btn-outline-secondary" style={{margin:"30px"}}>Add cake</button></Link>
                    <div class="btn-group mr-2">
                   
                        {/* <button class="btn btn-sm btn-outline-secondary">Sort</button> */}
                        {/* <button class="btn btn-sm btn-outline-secondary dropdown-toggle">Filter</button> */}
                    </div>
                    {/* <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button> */}
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    </table>
                </div>
                </main>


        {         
          allCakes.map((each, index) => {
              return (<div>
                  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{top:"200px"}}>
                        <div class="table-responsive" style={{alignItems:"center"}}>
                            <table class="table table-striped table-sm">
                            <tbody style={{padding:"10px"}}>
                                <tr >
                                <td style={{width:"50px"}}>{index+1}</td>
                                <td style={{width:"100px"}}><img src={each.image} style={{height:"50px",width:"50px"}}></img></td>
                                <td style={{width:"150px"}}>{each.name}</td>
                                <td style={{width:"100px"}}>{each.price}</td>
                                <td style={{width:"150px"}}>
                                    <div class="btn-group" role="group" aria-label="Basic example" style={{cursor:"pointer"}}>
                                       <Link to="Plus"><button type="button" class="btn btn-secondary">+</button></Link>
                                        {/* <button type="button" class="btn btn-secondary">-</button> */}
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </main>


                  </div>) 
              })
             }
       </div>
    </div>
  );
}

export default DashBoard;


import react from "react";
import { Component } from "react";
import Details from "./Details";
// import Cake from "./Cake";
import {axios} from 'axios';
import { useState, useEffect } from "react";
import {queryString} from "querystring"




function CakeDetails(props){

    var [cakeresult, setCakes] = useState({});

    var [Loading ,setLoading]=useState(true)

    console.log("ca",cakeresult,setCakes);
    // var query = queryString.parse(props.location.cakes);
    // console.log( props.match.params.id);
    let qq= props.match.params.id;
    // alert("hii")


    useEffect(() => {
        // alert("hii")
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;
        // console.log("apiii",apiurl)
        let temp = []
        fetch(apiurl)
        .then(res => res.json())
        .then(
          (response) => {
            console.log('respoo',response)
           
       
            setCakes(response.data);
            setLoading(false);
            console.log("dddddddddddddddddddddd",cakeresult)
          })

      }, [props.match.params.id]);
     
     
  
        return( 
        <div>
        {Loading && <div>
          <div class="d-flex justify-content-center" style={{margin:"100px 100px"}}>
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
          </div>
          </div></div>}
        
          {!Loading && <div className="row">
            <Details cakedata={cakeresult} />
          </div>}
          </div>         
        
            
            ) 
        
        
    }
// import { format } from "path";

export default CakeDetails;
import { render } from "@testing-library/react";
import {Component} from "react"
import cakes from "./Data";
import Cake from "./Cake"
import queryString from  "query-string"
import axios from "axios";
import { useState, useEffect } from "react";



function Search(props) {
  var [cakeresult, setCakes] = useState([]);
  var [isloading,setloading] = useState(false);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
    setloading(true)
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data)
        setloading(false);
      },
      (error) => {
        console.log("error",error);
      }
    );
  }, [query.q]); //jo humari query hogi search se se usko data nikal ke de dega 

  var img="https://thumbs.dreamstime.com/b/emoticon-searching-mascot-vector-cartoon-illustration-emoticon-searching-mascot-vector-cartoon-illustration-original-113901025.jpg"
  return (
    
    <div className="row">
      {isloading && <div>
        <div class = "d-flex justify-content-center" style={{margin:"100px 30px"}}>
          <div class="spinner-border" role="status">
            <span class = "sr-only">Loading...</span>
          </div>
        </div>
        </div>}


      {!isloading && cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {!isloading && cakeresult.length<=0 && <div>
        <div class="card mb-3 border-0 " style={{maxWidth: "1200px"}}>
  <div class="row no-gutters ">
    <div class="col-md-4">
      <img src={img} style={{marginLeft:'9rem',height:'300px',marginTop:'9em'}}alt="..." />
    </div>
    <div class="col-md-8" style={{marginTop:'12em'}} >
      <div class="card-body">
        <b class="card-title">Oop!</b>
        <p class="card-text">Sorry, no results found!</p>
        <h4>Please check the spelling or try searching for something else</h4>
      </div>    
  </div>
            </div>
            </div> 
      </div>}
    </div>
  );
}

export default Search;
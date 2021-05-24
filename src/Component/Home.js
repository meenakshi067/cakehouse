import { render } from "@testing-library/react";
import Carousel from './Carousel'
import Cake from './Cake'
import {Component} from "react"
import cakes from './Data'
import axios from "axios";
import Loader from "react-loader-spinner";

class Home extends Component{
  constructor(){
    super()
    this.state={
     cakes:[],
     loading:false
    }
  }

  //get data from backend

  componentDidMount(){
    let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"
    this.setState({loading:true})
    axios({
      url : apiurl,
      method: 'get'
    }).then((response)=>{
      console.log("response all cakes api",response.data);
      this.setState({
        cakes:response.data.data,
        loading:false
      })
    },(error)=>{
      console.log("error from all cakes api",error);
    })
  }

  render() 
  {
    const {loading}=this.state
    return (
        <div>
          
          {loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20em" }}>
                        <Loader type="TailSpin" color="#00BFFF" height={80} width={100} />                        
                    </div>}
                    {!loading&& <Carousel />}
                    {!loading&&<div className="row">
                        {
                            this.state.cakes.map((each, index) => {
                                return <Cake key={index} cakedata={each} />
                            })
                        }
                    </div>}
        </div>
    )
              }
}
export default Home;


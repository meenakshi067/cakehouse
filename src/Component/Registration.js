import {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
class Registration  extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    userDetail = {}

    getname =(event)=> {
        console.log(event.target.value);
       this.userDetail.name= event.target.value;
    }

    getemail = (event) =>{
        console.log(event.target.value);
       this.userDetail.email= event.target.value;
    } 

    

    getpassword =(event)=> {
        console.log(event.target.value);
       this.userDetail.password= event.target.value;
    }

      register = (event) => {
          event.preventDefault()
         console.log(this.userDetail);     
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/register",
            data:this.userDetail
        }).then((res)=>{
            
            console.log("response",res);
        },(err)=>{
            console.log("error",err);
        })
    }


    render()
    {
        return(
            <div>
                <form style={{padding:"10em 27em", backgroundColor:"lightgrey"}}>
                <div class="form-group">
                <label for="Full Name">Full Name</label>
    <input type="text" onChange={this.getname} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
    
    <label for="exampleInputEmail1">Email address</label>

    <input type="email" onChange={this.getemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Password1">Password</label>
    <input type="password" onChange={this. getpassword}class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.register}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration;


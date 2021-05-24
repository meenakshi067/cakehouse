import {Component} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
class ForgotPass extends Component{
    constructor(){
        super()
        this.state={
        }
    }

     userDetail={}
    getemail = (event) =>{
      console.log(event.target.value);
     this.userDetail.email= event.target.value;
  } 

  Getnewpassword = (e) => {
    e.preventDefault() 
    console.log(this.userDetail);      
    axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/recoverpassword",
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
          <form style={{padding:"10em 27em", backgroundColor:"#D3D3D3"}}>
  <div class="form-group">
    <label for="exampleInputEmail1" style={{fontWeight:'bold',fontSize:'20px',color:'purple'}}>Email address</label>
    <input type="email" onChange={this.getemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
 <Link to="/Registration"> <button type="submit" class="btn btn-primary">Registration</button></Link>
  {/* <button type="submit" class="btn btn-primary" onClick={this.Getnewpassword}>Get new password</button> */}

 



</form>
</div>
        )
    }



}

export default ForgotPass;


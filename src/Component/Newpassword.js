import {Component} from "react"
import {Link} from "react-router-dom"
class Newpassword  extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render()
    {
        return(
            <div>
                <p style={{fontWeight:"bold", fontSize:"20px"}}>Set a new password</p>
 <form style={{padding:"10em 27em", backgroundColor:"lightpink"}}>
                <div class="form-group">
                <label for="new password">new password</label>
    <input type="password" onChange={this.getnewpassword} class="form-control" id="new pass" aria-describedby="emailHelp" placeholder="Enter new password"></input>
    
    <label for="confirmNewPassword">Confirm new password</label>

    <input type="password" onChange={this.getPassword} class="form-control" id="newpasswordconfirm" aria-describedby="emailHelp" placeholder="confirm new password"></input>
    
  </div>
  
  <button type="submit" class="btn btn-primary mb-4">Change password</button>
                <div class="d-flex justify-content-between align-items-center mb-2">

<Link to="/Login"><u><a href="#">Back to Log In</a></u></Link>

<Link to="Registration"><u><a href="#">Register</a></u></Link>

</div> 
                </form>

 </div>
                
       )
     }
  }
 export default Newpassword;




  
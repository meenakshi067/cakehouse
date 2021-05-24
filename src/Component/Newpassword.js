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




  {/* <p>Set a new password</p>

  <form action="#!">

    <div class="md-form md-outline">
      <input type="password" id="newPass" class="form-control">
      <label data-error="wrong" data-success="right" for="newPass">New password</label>
    </div>

    <div class="md-form md-outline">
      <input type="password" id="newPassConfirm" class="form-control">
      <label data-error="wrong" data-success="right" for="newPassConfirm">Confirm password</label>
    </div>

    <button type="submit" class="btn btn-primary mb-4">Change password</button>

  </form>

  <div class="d-flex justify-content-between align-items-center mb-2">

    <u><a href="https://mdbootstrap.com/docs/jquery/admin/auth/login/">Back to Log In</a></u>

    <u><a href="https://mdbootstrap.com/docs/jquery/admin/auth/register/">Register</a></u>

  </div> */}
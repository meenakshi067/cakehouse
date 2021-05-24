import { render } from "@testing-library/react";
import {Component} from "react"
class Carousel extends Component{
  constructor(){
    super()
    this.state={

    }
  }

 img="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
 img1="https://www.tastytweets.in/BackEndImage/ProductImages/regular-cakes-black-forest-tasty-tweets.jpg"
 img2="https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-cute-hearts-special-vanilla-cake-1kg--124833-m.jpg"
render()
{
     return(
    <div>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={this.img} style={{height:"500px"}} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.img1} style={{height:"500px"}} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.img2} style={{height:"500px"}} alt="Third slide"></img>
    </div>
  </div>
</div>
</div>
    )
}
}
export default Carousel;

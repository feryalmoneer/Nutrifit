
import { Link } from "react-router-dom";
import './GetProdut.css'

export default function GetProduct() {


  return (
    <> 
    <br/> <br/><br/>

  <div className="main-wrapper">
  <div className="container">
    <div className="product-div">
      <div className="product-div-left">
        <div className="img-container im">
        <img src="7.jpeg" alt="" />
        </div>
     
      </div>
      <div className="product-div-right">
      <h1 className='text-3xl font-bold'>

     بسكويت جولن بالشوفان 



      </h1>

        <span className="product-price"> Price :$20</span>
        <p className="product-description">
        شوفان 240 جرام
        <br/>
        التوفر:متوفر في المخزون
          </p>
        <div className="btn-groups bn">
            <button
                   
      to="/cart"> Add to cart
                    </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="main-wrapper">
        <div className="container">
        <h1 className='text-3xl font-bold'>Reviews</h1>

          <div className="card">
          <Link to="#">
          <button className="btn btn-outline-success">Add Review  </button>


            </Link>


</div></div></div> 
    </>
  );
}
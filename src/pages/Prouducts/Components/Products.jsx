import "./Products.css";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div className="products">
      <div className="card" style={{ width: "18rem" }}>
        <img src="2.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text  tt">بسكويت جولن بالشوفان </p>
          <Link to={`/GetProduct`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="7.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text  tt"> معمول التمر</p>
          <Link to={`/Pro2`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="11.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text tt">شوفان</p>
          <Link to={`/GetProduct`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="12.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text  tt"> حليب البرو باللوز</p>
          <Link to={`/GetProduct`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="13.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text  tt">بذور الكتان</p>
          <Link to={`/GetProduct`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="14.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text  tt">كورن فليكس</p>
          <Link to={`/GetProduct`}>
            <a href="#" className=" bn  btn btn-primary">
              show more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

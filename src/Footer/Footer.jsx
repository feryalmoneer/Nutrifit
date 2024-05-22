import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className=" h text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
            <h3 className="lobster-regular">
              {" "}
              <span>Nutri Fit</span> Store
            </h3>
        
  
            <p>A website that provides delivery to all parts of Palestine</p>
      
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 FeryaLMoneer
      </div>
    </footer>
  );
}

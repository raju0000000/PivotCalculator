
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Step1 = () => {
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h1 className="card-title text-primary">Hi, Welcome!</h1>
          <form>
            {/* Step 1 of form */}
            <div className="form-group">
              <label htmlFor="numberInput" className="text-secondary">
                Please create a number:
              </label>
              <br />
              <Link to="/addNumber">
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  style={{ padding: "10px 20px" }}
                >
                  +
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;





// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

// const Step1 = () => {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center text-primary">Hi, Welcome!</h1>
//       <form className="text-center">
//         {/* Step 1 of form */}
//         <div className="form-group">
//           <label htmlFor="numberInput">
//             <b className="text-secondary">Please create a number:</b>
//           </label>
//           <br />
//           <Link to="/addNumber">
//             <button
//               type="button"
//               className="btn btn-primary mt-3"
//               style={{ padding: "10px 20px" }}
//             >
//               +
//             </button>
//           </Link>
//         </div>
       
//       </form>
//     </div>
//   );
// };

// export default Step1;


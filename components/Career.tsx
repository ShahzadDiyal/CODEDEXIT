import Link from "next/link";
import Image from "next/image";

const Career = () => {
  return (
    <div className="section">
      <div className="container mt-5">
        <span className="d-block h5 lh-1 fw-semibold clr-base text-center mb-4 mt-1" style={{ border: "1px solid", padding: "10px", borderRadius: "10px", width: "20%", justifySelf: "center" }}>
          {" "}
          Our Career{" "}
        </span>
        <p className="text-center mx-auto t-short-para mb-4" >
          {" "}
          Digital Transformation for the Microfinance and Banking Sector is becoming inevitable to effectively meet customer needs.{" "}
        </p>
        <img src="/images/growth.jpg" alt="" style={{width:"100%" , height:"600px"}}/>

      </div>
      
    </div>
  );
};
export default Career;

// import Link from "next/link";
// import { useState, useEffect } from "react";

// const Careers = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTheme(isDark ? "dark" : "light");
//   }, []);

//   return (
//     <div className={`section ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}  >
//       <div className="container mx-auto p-5" style={{}}>
//         <div className="mt-10 text-center">
//         <span className="d-block h5 lh-1 fw-semibold clr-base text-center mb-2 mt-1" style={{ border: "1px solid", padding: "10px", borderRadius: "10px", width: "20%", justifySelf: "center" }}>
//           {" "}
//          Our Career{" "}
//         </span>
//         <p className="text-center mx-auto t-short-para mb-2" >
//           {" "}
//           Digital Transformation for the Microfinance and Banking Sector is becoming inevitable to effectively meet customer needs.{" "}
//         </p>
//           <div className="flex justify-center">
//             <div>
//               <img src="/images/ourcareer.jpg" alt="Life at MFSYS" className="rounded-lg shadow-md" style={{width:"100%"}}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Careers;
import Link from "next/link";
import { useState, useEffect } from "react";

const Careers = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  return (
    <div className={`section ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`} style={{backgroundColor:"#ececec",paddingTop:"0px"}} >
      <div className="container mx-auto p-5" style={{}}>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-primary">Our Careers</h2>
          <p className="mt-2 mb-6 text-black">Be a part of a dynamic team where we Design, Develop, and Deploy Innovative Solutions that Transform Businesses.</p>
          <div className="flex justify-center">
            <div>
              <img src="https://mfsys.ca/wp-content/uploads/2019/06/career-img.jpg" alt="Life at MFSYS" className="rounded-lg shadow-md" style={{width:"100%"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Careers;
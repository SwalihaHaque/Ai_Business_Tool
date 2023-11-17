import React from "react";
import './App.css';
import Login from "./component/Login";
import "./css/style.css";
import ContactTable from "./component/ReactDataTable/ContactTable";
import { RouterProvider } from "react-router-dom";
import router from "./router";
//import ContactForm from "./component/ReactDataTable/ContactForm";
//import Sidebar from "./component/ReactDataTable/Sidebar";


function App() {
  return (


    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>

    //     <div className={"signin-wrapper"}>
    //       <div className={"h-screen flex"}>
    //         <div className="signin-left md:w-6/12">
    //           <img className={'w-full h-full'} src={loginLeftImage} alt="left side image" />
    //         </div>
    //         <div className="signin-right w-full md:w-6/12 flex flex-col m-auto ml-12">
    //           <div className="logo">
    //             <img className={"h-['900px']"} src={dsLogoImage} alt="logo" />
    //           </div>
    //           <div className="signin-description">
    //             <h3 className={'font-bold text-2xl my-6'}>Sign in</h3>
    //             <p className={'text-gray-500 mb-6'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //               Amet consequuntur earum facere laudantium libero magni nam nulla quam, similique totam!</p>
    //             <p className={'text-gray-500 mb-8'}>Sign in to continue access.</p>
    //           </div>
    //           <div className="signin-form w-8/12">
    //             <form action="">
    //               <div className="mb-6">
    //                 <label htmlFor="email" className={'block text-gray-500 font-bold mb-2'}>Email</label>
    //                 <input type="email"
    //                   className={'w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'}
    //                   placeholder={'Enter your email'} />
    //               </div>
    //               <div className="mb-6">
    //                 <label htmlFor="password"
    //                   className={'block text-gray-500 font-bold mb-2'}>Password</label>
    //                 <input type="password"
    //                   className={'w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'}
    //                   placeholder={'Enter your password'} />
    //                 <small className={"flex justify-end text-gray-500 font-bold"}>Forgot password?</small>
    //               </div>
    //               <div className="mb-6">
    //                 <button className={"w-full bg-[#253C89] text-white font-bold py-2 px-4 rounded-md"}>
    //                   Sign in
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );

}

export default App;

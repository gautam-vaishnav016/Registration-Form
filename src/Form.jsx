import React, { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  
  const [inputData, setIndputData] = useState(data);
  const [flag, setFlag] = useState(false);

  // const getData = () =>{
  // let items = localStorage.getItem("inputData")

  // if(items){
  //   return JSON.parse(items)
  // }
  // else{
  //   return data
  // }
  // }
    
  

  // useEffect(() => {
  //   localStorage.setItem("inputData", JSON.stringify(inputData));
  // }, [inputData]);


  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleData = (e) => {
    setIndputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !inputData.name || !inputData.email || !inputData.password
      ? alert("All fields are Mandatory")
      : setFlag(true);
  };

  return (
    <>
      <p>
        {flag == true ? (
          <h2 className="font-bold bg-yellow-200 text-center">
            Hello {inputData.name} You've Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </p>
      <div className="flex justify-center mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-[50%]"
        >
          <div className=" text-white md:text-4xl font-bold mb-2 border rounded-md p-2 px-9  pb-4 bg-blue-950">
            Registration Form
          </div>
          <div>
            <input
              onChange={handleData}
              value={inputData.name}
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Name"
              name="name"
            />
          </div>
          <div>
            <input
              onChange={handleData}
              value={inputData.email}
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          <div>
            <input
              onChange={handleData}
              value={inputData.password}
              className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Password"
              name="password"
            />
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

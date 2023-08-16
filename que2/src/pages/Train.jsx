import React from "react";

const Train = (props) => {
    // console.log(props.minutes);
   const min= props.minutes<10?"0"+props.minutes:props.minutes
//    console.log(parseInt(min));
  return (
    <div className=" border-slate-300 border-2 pb-8 px-4 pt-2 mx-6 my-6 ">
      <div className="flex justify-between  font-bold text-lg">
        <div>Train no: {props.no}</div>
        <div>Train : {props.name}</div>
        <div>{props.hours}:{min}</div>
      </div>
      <div className="mt-6 flex gap-6">
        <div className=" w-52 border-slate-300  p-4 shadow-md">
          <div className="flex justify-between font-semibold">
            <div>SL</div>
            <div>₹ {props.slPrice}</div>
          </div>
          <div className="mt-1 text-green-500 font-semibold">Available {props.slAvl}</div>
        </div>
        <div className=" w-52  border-slate-300 p-4 shadow-lg">
          <div className="flex justify-between font-semibold">
            <div>AC</div>
            <div>₹ {props.acPrice}</div>
          </div>
          <div className="mt-1 text-green-500 font-semibold">Available {props.acAvl}</div>
        </div>
      </div>
    </div>
  );
};

export default Train;

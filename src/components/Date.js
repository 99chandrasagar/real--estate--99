

import React, { useState } from 'react';
//import {  RiArrowDownSLine} from 'react-icons/ri';
function Datepick(){
  const [date,setDate]=useState();
  console.log("Date",date);
  return(
    <>
   <div className='text-[15px] font-medium leading-tight '>
    <input type="date" onChange={e=>setDate(e.target.value)}/>
    <div>---------------</div>
    <div className='size'>Select your date</div>
     {}
    </div>
    </>
  );
}
export default Datepick;

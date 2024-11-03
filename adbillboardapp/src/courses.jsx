import React from 'react'; 
import './index.css'
import './Course.css'
function Course({ course1 }) 
{ 
const { id,Coursename, Price, type, img} = course1;
console.log(Coursename,type);
 return  ( 
 <> 
 
       <div className='Coursecontentbox'>
        
       <img src={img} width={100} height={100}></img>
        <h2>Coursname:{Coursename}</h2>
        <h2>Type:{type}</h2>
        <h2>Price:{Price}</h2>
        <h3>Click on the card and review it nowe</h3>
       </div>

     
</>
 
);
 }
 
 
 
 
 
 export default Course;
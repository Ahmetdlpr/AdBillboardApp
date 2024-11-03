import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Header'
import { courses } from './data'
import Course from './courses'
import './Course.css'


function App() {
  

  return (
    <>
      <div className="Appcontainer">
        <Header/>
       <div className='course-main'>

      
       {
            courses.map((courseitem)=>(
             <Course key={courseitem.id} course1={courseitem}/>
            ))
        }
 


       </div>
        
      </div>
    </>
  )
}

export default App

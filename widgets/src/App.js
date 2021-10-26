import './App.css';
import React, { useEffect, useState } from "react";
import TicketMaster from './components/TicketMaster';
import Nasa from './components/Nasa';

const App = ()=>{
  return(
    <div>
      <Nasa/>
      <TicketMaster/>
    </div>
  ) 
}
 



export default App;
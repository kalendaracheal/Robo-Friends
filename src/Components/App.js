import React, {useState, useEffect} from 'react'
import "./App.css";
import Footer from './Footer';
import Design from './Design';
import List from './List'
import data from './data';


function App() {
const [people,setPeople]= useState (data);

  return (
    <div >
     
      <Design/>
      <main>
  <section className="container">
    <h3>{people.length} Birthdays Today</h3> 
    <List people={people}/>
    <button onClick={()=>setPeople([])}>CLEAR ALL</button>
  </section>
</main>;
      <Footer/>

    </div>
  );
}

export default App;

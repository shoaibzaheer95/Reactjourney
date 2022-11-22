import React from 'react';
import Header from './Header';
import Card from './Card'
import data from "./Travel"

import './style.css'

function App() {

  const carditem = data.map(item=>{
    //console.log(item)
      // img={item.thumbnailImg} 
      // title={item.title} 
      // location={item.location}
      // link={item.maplink}
      // start_date = {item.start_date}
      // end_date = {item.end_date}
      // description= {item.description}

    return (
      <Card  
      key={item.id}
      {...item}
      />
  )

  })

  return (
    <div className="App">
      <div className='container'>
          <Header/>
          {carditem}
      </div>
    </div>
  )
}

export default App;

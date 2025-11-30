import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section1/section2/section2.jsx'
const App = () => {

const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil unde quam. Expedita, architecto.",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil unde quam. Expedita, architecto.",
    tag: "Underserved"
  },
  {
    img: "https://images.unsplash.com/photo-1618488220787-aaee29f8871f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil unde quam. Expedita, architecto.",
    tag: "Underbanked"
    
  },
  {
    img:"https://images.unsplash.com/photo-1580998510397-f5643998fc69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil unde quam. Expedita, architecto.",
    tag:"honest"
  }
];


  return (
    <div>
     <Section1 users={users}/>
     <Section2/>
    </div>
  )
}

export default App

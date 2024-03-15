import React from 'react'

const Footer = ({ length }) => {
    const today = new Date();
    console.log(today);
  return (
    <footer className='footer'>
        {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
        
        <p>{length} List {length > 1? "items" : "item"}</p>
        
    </footer>
  )
}

export default Footer
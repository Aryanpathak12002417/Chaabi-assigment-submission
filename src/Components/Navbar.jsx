import React,{useState,useEffect} from 'react'
import './Style/navbar.css'
import keyImg from './Images/keyboard.png'

const letter='Typing'

export default function Navbar() {
  const [typedText, setTypedText] = useState('');
  const text = 'Typing';
  const typingSpeed = 500; 

  useEffect(() => {
    let timeoutId;

    const animateTyping = (currentIndex, direction) => {
      timeoutId = setTimeout(() => {
        if (direction === 'forward') {
          setTypedText((prevText) => prevText + text[currentIndex]);
          if (currentIndex < text.length - 1) {
            animateTyping(currentIndex + 1, 'forward');
          } else {
            animateTyping(currentIndex, 'backward');
          }
        } else if (direction === 'backward') {
          setTypedText((prevText) => prevText.slice(0, -1));
          if (currentIndex === 0) {
            animateTyping(currentIndex, 'forward');
          } else {
            animateTyping(currentIndex - 1, 'backward');
          }
        }
      }, typingSpeed);
    };

    animateTyping(0, 'forward');

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
        <nav className='navbar'>
            <div className="brand-logo">
                <img  style={{maxWidth:'50px',marginTop:'13px',marginRight:'10px'}}src={keyImg} alt="keyimg" />
                <h1 style={{color:'white',marginTop:'13px'}}>Touch Typing</h1>
            </div>
            <div className="left-details">
            
            </div>
        </nav>
    </>
  )
}

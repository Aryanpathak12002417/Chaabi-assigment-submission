import React,{useEffect} from 'react'
import './Style/keybord.css'
export default function Keybord() {

    useEffect(() => {
        const keys = document.querySelectorAll('.keys');
        const spaceKey = document.querySelector('.space_key');
    
        for (let i = 0; i < keys.length; i++) {
          keys[i].setAttribute('keyname', keys[i].innerText);
          keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
        }
    
        const handleKeyDown = (e) => {
          for (let i = 0; i < keys.length; i++) {
            if (
              e.key === keys[i].getAttribute('keyname') ||
              e.key === keys[i].getAttribute('lowerCaseName')
            ) {
              keys[i].classList.add('active');
            }
            if (e.code === 'Space') {
              spaceKey.classList.add('active');
            }
          }
        };
    
        const handleKeyUp = (e) => {
          for (let i = 0; i < keys.length; i++) {
            if (
              e.key === keys[i].getAttribute('keyname') ||
              e.key === keys[i].getAttribute('lowerCaseName')
            ) {
              keys[i].classList.remove('active');
              keys[i].classList.add('remove');
            }
            if (e.code === 'Space') {
              spaceKey.classList.remove('active');
              spaceKey.classList.add('remove');
            }
            setTimeout(() => {
              keys[i].classList.remove('remove');
            }, 200);
          }
        };
    
    
        
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
          
        }
    })


  return (
    <>
            <div class="container">
        <div class="change_light_color">
            <div class="colors">
            </div>
        </div>
        <div class="keyboard_wrapp">
            <div class="keyboard_lights"></div>
            <div class="keyboard_keys">
                
                <div class="row">
                    <div class="keys">A</div>
                    <div class="keys">S</div>
                    <div class="keys">D</div>
                    <div class="keys">F</div>
                    <div class="keys">J</div>
                    <div class="keys">K</div>
                    <div class="keys">L</div>
                </div>
                
                <div class="row specical">
                    <div class="keys space_key">Space</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

import React,{useState,useEffect, useRef} from 'react'
import getWords from '../randomWord'
import randomWord from '../randomWord';
import './Style/typing.css'
import Stats from './Stats';

import audio from './Audio/audio1.mp3'
import Keybord from './Keybord';

const characterSet=['a','s','d','f','j','k','l','Backspace',' ']

export default function Typing() {

    const [words,setWords]=useState("");
    const [currentInput,setCurrentInput]=useState("")
    const [ind,setInd]=useState(0)
    const [count,setCount]=useState(0)
    const inputbox=useRef(null)
    const [title,setTitle]=useState('Touch Typing');
    const [keyPressed,SetKeyPressed]=useState(0);
    const [errorMade,setErrorMade]=useState(0);
    const [stats,setStats]=useState(false);
    const [chartdata,setChartData]=useState({});
    const [timmer,setTimer]=useState(0);
    const [countWords,setCountWords]=useState(0);

    useEffect(()=>{
        
        const arr=randomWord();
        setWords(arr);

    },[])


    useEffect(()=>{
        if(currentInput==words && currentInput!=""){
            setCurrentInput('')
            setCount(0)
            setInd(0)
            setWords(randomWord())
            document.querySelector('.input').classList.remove('red-color-text')

            //Rendering the Status Box
            setChartData(()=>{
                return {
                    error:errorMade,
                    keys:keyPressed/timmer*60*5,
                    words:countWords/timmer*60
                }
            })
            console.log(countWords)
            setStats(true);
            setErrorMade(0)
            SetKeyPressed(0)
            setTimer(0)
            setCountWords(0)
        }
    },[currentInput,ind])


    useEffect(()=>{
        let c;
        if(timmer){
            c=setInterval(()=>{
                setTimer(timmer+1);
            },1000)
        }

        return ()=>{
            clearInterval(c);
        }

    },[timmer])


     function handleKeyPress(event){

        //Create an audio element
        const checker=characterSet.find((item)=>{
            return item==event.key;
        })
        console.log(checker)
        if(checker==undefined) return;

        SetKeyPressed(prev=>prev+1);
        if(timmer==0){
            setTimer(1);
        }
        let str=event.key;

       if(event.key==='Backspace'){
        if(count>0){
            setCount(prev=>prev-1);
        }
        else if(ind>0){
            setInd(prev=>prev-1);
        }
        setCurrentInput(prevState=>{
            return prevState.substring(0,prevState.length-1)
        })
        return;
       }
       else if(count>0){
            //add the red class
            document.querySelector('.input').classList.add('red-color-text')
            setCount(prev=>prev+1)
       }
       else if(event.key!=words.slice(ind)[0]){
        setCount(prev=>prev+1)
        //add the red class
        document.querySelector('.input').classList.add('red-color-text')
        setErrorMade(prevState=>prevState+1);
       }
       else if(event.key==words.slice(ind)[0]){
        //remove the red class
        if(event.key==' ') setCountWords(prev=>prev+1)
        setInd(prev=>prev+1)
        document.querySelector('.input').classList.remove('red-color-text')
       }

       setCurrentInput(prevState=>prevState+str)

    }

    const handleStats=()=>{
        setStats(false);
    }


  return (
    <>
        {stats?<Stats handleStats={handleStats} data={chartdata}/>:""}
        <section className="typing">
            {/* <h1 className='typing-title' style={{margin:'20px'}}>{title}</h1> */}
            <div style={{margin:'20px'}} className='textbox'>
                {words}
            </div>
            
            <div className="input-box">
                <input className='input white-color-text' type='text' onKeyDown={handleKeyPress} value={currentInput} ref={inputbox} placeholder='Type the Above Text Here'/>
            </div>

            <div className="note-box" style={{color:'white'}}>
                <b style={{color:'white'}}>*Note:</b> Press space after writting the sentence to submit your answer.<br/>
            </div>
            <div className="keybord">
                <Keybord/>
            </div>
            
        </section>
    </>
  )
}

//Create a sentence using random variables


const letters=['a','s','d','f','j','k','l']

export default function randomWord(){

    let length=letters.length
    let ans="";

    for(let i=0;i<4;i++){
        let newLength=Math.floor(Math.random()*6)
        let str=""
        if(newLength==0){
            newLength=2
        }
        for(let j=0;j<newLength;j++){
            let ind=Math.floor(Math.random()*length)
            str+=letters[ind];
        }
        str+=' ';
        ans+=str
    }
    ans.substr(0,ans.length-1);
    return ans
    
}
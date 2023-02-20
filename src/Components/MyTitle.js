import React, {useState,useEffect} from 'react'
// This File Contain the Letter Population Functionality
export default function MyTitle() {
    const Mykind = ["Web Developer...", "Pianist...", "Sketch Artist...", "PhotoGrapher..."];
    let val;
    let index =0
    let [letter, setletter] = useState('')
    function populate(index) {
        val = -1
        let word = Mykind[index]
        let renew = setInterval(() => {
            if (val >= word.length - 1) {
                clearInterval(renew)
                return  depopulate(word);
            }
            ++val;
            setletter(prev=> prev+word[val])
        }, 370)
    }
    function depopulate(word) {
        let newWord = word
        val = word.length
        let renew = setInterval(() => {
            if (val <=  -1) {
                clearInterval(renew)
                return  populate((++index)%Mykind.length);
            }
            val--;
            setletter(newWord.substr(0,val))
    
        }, 170)
    }
    useEffect(() => {
        populate(index);
    },[])

  return (
    <span>{letter}</span>
  )
}

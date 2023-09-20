import React , {useState} from 'react'

function EyesOnMe(){
const [Focus , setFocus]    = useState(false)

    function TrueFocuse(){
        setFocus(true)
    }
    function FalseFocuse(){
        setFocus(false)
    }






    return (
        <button 
        onFocus={TrueFocuse}
        onBlur={FalseFocuse}>Eyes on me
        {Focus ? console.log('Good!') : console.log('Hey! Eyes on me!')}
        </button>
    )
}

export default EyesOnMe;
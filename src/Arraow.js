import { useState } from "react"
import LifeComponent from './life'


const TestArrow = (props) =>{
    console.log('TestArrow')
    
    const [count, setCount] = useState(0)

    
    return (
        <div>
            Privet {props.firsName} {props.lastName} <br/>

            {count ? (<>count: {count} </>) :''}
            <br/>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> count && setCount(count - 1)}>-</button>
            <LifeComponent setCount = {setCount} count = {count}/>
        </div>
    )
}

TestArrow.defaultProps = {
    firsName:'XXX',
    lastName:'YYY'
}

export default TestArrow
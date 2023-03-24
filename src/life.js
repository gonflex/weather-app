import { useReducer } from "react"

function liveComponent(props){
    console.log('liveComponent')
    return (
        <div> LifeComponent <button onClick={()=>props.setCount(props.count + 1)}>+</button></div>
    )
}
export default liveComponent



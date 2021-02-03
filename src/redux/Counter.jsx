import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./ducks/counter"
const Counter = (props) => {
    const { name } = props;
    const dispatch = useDispatch();
    const [votes, setVotes] = React.useState(0);
    const handleIncrement = () =>{
        dispatch(increment());
        setVotes(votes+1);
    }
    const handleDecrement = () =>{
        setVotes(votes-1)
        dispatch(decrement());
    }
    return (
        <div>
            <h2>{name}</h2>
            <h3>{`Votes: ${votes}`}</h3>
            <button onClick = { handleIncrement }>Increment</button>
            <button onClick = { handleDecrement }>Decrement</button>
        </div>
    )   
}
export default Counter;
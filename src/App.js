import './App.css';

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getData} from "./store/actions";

function App() {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch])

    return (
        <div className="App">
            Counter: {counter}
            <br/>
            <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
            <button onClick={() => dispatch({type: 'PLUS'})}>+</button>
        </div>
    );
}

export default App;

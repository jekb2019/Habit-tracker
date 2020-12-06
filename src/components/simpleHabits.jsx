import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabits = (props) => {

    // useState() 는 두가지 값을 리턴한다. count는 실제 state 값이고 setCount는 count를 업데이트할 수 있는 함수이다.
    const [count, setCount] = useState(0);

    // const spanRef = React.createRef();
    const spanRef = React.useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(()=>{
        console.log(`mounted and updated ${count}`)
    }, []);

    return (
        <li>
            <span ref={spanRef} className="habit-name">Reading Sample</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabits;

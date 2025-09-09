import { useState } from "react";

export function Counter({click, total}) {
    const [number, setNumber] = useState(0);

    const handleClickDecrement = () => {
        if(number>0){
            setNumber(number-1);
            click("-");    //부모에게 number 전달
        }
    }
    const handleClickIncrement = () => {
        if(number<10){
            setNumber(number+1);
            click("+");    //부모에게 number 전달
        }
    }
    const handleClickInit = () => {
        setNumber(0);
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button onClick={handleClickDecrement} type="button">-(감소)</button>
                <button onClick={handleClickIncrement} type="button">+(증가)</button>
                <button onClick={handleClickInit} type="button">초기화</button>
            </div>
        </div>
    );
}


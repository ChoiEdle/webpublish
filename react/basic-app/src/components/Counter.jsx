import { useEffect, useState } from "react";

export function Counter({click, total, init}) {
    const [number, setNumber] = useState(0);

    useEffect(() => {   //Counter 컴포넌트 로딩 시 최초에 처음 실행되는 함수, 값이 변경될 때마다 재호출
        setNumber(0);
    }, [init]);       
    
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
        click(0);    //부모의 click 함수 호출
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


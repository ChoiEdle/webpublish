import { useState } from "react";
import "./App.css"
import { Counter } from "./components/Counter.jsx";

export default function App() {
    const [total, setTotal] = useState(0);
    const click = (type, number) => {   //자식 컴포넌트의 클릭 이벤트 결과 가져오기
        if(type === "+"){
            setTotal(total+1);
        } else if(type === "-"){
            setTotal(total-1);
        } else if(type === 0){ 
            setTotal(total-number);
        }
    }

    return (
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total}/>
            <Counter click={click} total={total}/>
            <Counter click={click} total={total}/>
        </>
    );
}

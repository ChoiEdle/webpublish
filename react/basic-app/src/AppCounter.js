import { useState } from "react";
import "./App.css"
import { Counter } from "./components/Counter.jsx";

export default function App() {
    const [total, setTotal] = useState(0);
    const [init, setInit] = useState(0);    //자식 초기화 : 0, 1 값을 토글(Toggle)

    const click = (type) => {   //자식 컴포넌트의 클릭 이벤트 결과 가져오기
        if(type === "+"){
            setTotal(total+1);
        } else if(type === "-"){
            setTotal(total-1);
        } else if(type === 0){ 
            setTotal(0);
            setInit(!init);
        }
    }

    return (
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total} init={init}/>
            <Counter click={click} total={total} init={init}/>
            <Counter click={click} total={total} init={init}/>
        </>
    );
}

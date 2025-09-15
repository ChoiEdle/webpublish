import { useState, useRef } from "react";
import { validateLoginCheck } from "../../util/validate.js";

export function Login2() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        msgIdRef: useRef(null),
        msgPassRef: useRef(null)
    }
    const[form,setForm] = useState({id:"", pass:""});
    const [msg, setMsg] = useState({id:"", pass:""});
    
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
        setMsg({id:"", pass:""});
        // refs.msgIdRef.current.innerText = "";
        // refs.msgPassRef.current.innerText = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();     //브라우저(DOM객체) 이벤트 중지

        if(validateLoginCheck(refs, setMsg)){
            console.log("submit --> ", form);
        }
    }

    const handleResetForm = () => {
        setForm({id:"", pass:""})
    }

    return (
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text" name="id" value={form.id} ref={refs.idRef} onChange={handleFormChange}></input>
                        <span ref={refs.msgIdRef}>{msg.id}</span>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password" name="pass" value={form.pass} ref={refs.passRef} onChange={handleFormChange}></input>
                        <span ref={refs.msgPassRef}>{msg.pass}</span>
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="button" onClick={handleResetForm}>다시쓰기</button>
                    </li>

                </ul>
            </form>
        </>
    );
}
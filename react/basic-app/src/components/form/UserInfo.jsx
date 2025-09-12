import { useRef, useState } from "react";

export function UserInfo() {
    const refs = {
        nameRef: useRef(null),
        ageRef: useRef(null),
        addressRef: useRef(null)
    }

    const initUser = {
        "uname": "",
        "age":"",
        "address":""
    }
    const [user, setUser] = useState(initUser);
    
    const handleReset = () => {
        setUser(initUser);
    }

    const handleChangeUser = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(refs.nameRef.current.value === "") {
            alert("이름을 입력해주세요");
            refs.nameRef.current.focus();
        } else if(refs.ageRef.current.value === "") {
            alert("나이를 입력해주세요");
            refs.ageRef.current.focus();
        } else if(refs.addressRef.current.value === "") {
            alert("주소를 입력해주세요");
            refs.addressRef.current.focus();
        } else {
            console.log("전송데이터 --> ", user);
        }
    }

    return (
        <>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input type="text" name="uname" value={user.uname} ref={refs.nameRef} onChange={handleChangeUser} />
                    </li>
                    <li>
                        <label>나이</label>
                        <input type="text" name="age" value={user.age} ref={refs.ageRef} onChange={handleChangeUser} />
                    </li>
                    <li>
                        <label>주소</label>
                        <input type="text" name="address" value={user.address} ref={refs.addressRef} onChange={handleChangeUser} />
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={handleReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}
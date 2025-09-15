import { useState, useRef } from 'react';
import './cgvSignup.css';

export function Signup() { 
    const initForm = {
        id: "",
        pwd: "",
        cpwd:"",
        name: "",
        phone: "",
        emailName: "",
        emailDomain: ""
    }
    const msgRef = useRef(null);
    const [form, setForm] = useState(initForm);
    const [msg, setMsg] = useState("");

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        if(name==="cpwd"){
            (form.pwd===form.cpwd) ? setMsg("") : setMsg("비밀번호와 다릅니다.")
        }
        
        setForm({...form,[name]:value});

    }
    console.log(form);
    

    const handleReset = (e) => {
        e.preventDefault();
        setForm(initForm);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(form);
    }

    

    return (
    <div className="content">
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입(React)</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <div>
                            <input type="text" 
                                    name="id"                        
                                    placeholder = "아이디 입력(6~20자)"
                                    onChange={handleChangeForm}
                                    value={form.id} />
                            <button type="button" 
                                  > 중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                    onChange={handleChangeForm}
                                    value={form.pwd} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <sapn ref={msgRef}>{msg}</sapn>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    placeholder="비밀번호 재입력"
                                    onChange={handleChangeForm}
                                    value={form.cpwd} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <div>
                            <input type="text" 
                                    name="name"
                                    placeholder="이름을 입력해주세요"
                                    onChange={handleChangeForm} 
                                    value={form.name} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>전화번호</b></label>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    placeholder="휴대폰 번호 입력('-' 포함)"
                                    onChange={handleChangeForm}
                                    value={form.phone} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <div>
                            <input type="text" 
                                    name="emailName"
                                    placeholder="이메일 주소"
                                    onChange={handleChangeForm}
                                    value={form.emailName} />
                            <span>@</span>       
                            <select name="emailDomain" onChange={handleChangeForm} value={form.emailDomain}
                                    >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit" >가입하기</button>
                        <button type="reset" onClick={handleReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
}


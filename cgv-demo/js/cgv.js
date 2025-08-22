class User {
    #id;
    #pwd;
    constructor(id, pwd){
        this.#id = id;
        this.#pwd = pwd;
    }
    display = () => console.log(this.#id, this.#pwd);
    
}


function loginCheck() {
    let user = null;
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    if(id.value === ''){
        alert('아이디를 입력해주세요');
        id.focus();
    } else if(pwd.value === ''){
        alert('비밀번호를 입력해주세요');
        pwd.focus();
    } else {
        user = new User(id.value, pwd.value);
        user.display();
    }
}

/**
 * 
 */
class Member extends User {
    constructor(id, pwd, name, phone, emailname, emaildomain) {
        super(id,pwd);
        this.name = name;
        this.phone = phone;
        this.email = `${emailname}@${emaildomain}`;
    }
    display = () => console.log(this.id, this.pwd, this.name, this.phone, this.email);
    makeObject = () => {
        return {
            'id' : this.id,
            'pwd' : this.pwd,
            'name' : this.name,
            'phone' : this.phone,
            'email' : this.email
        }
    }
    
}
/**
 * 로그인 처리 함수
 */
function signupCheck() {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');
    if(id.value === '' || pwd.value === '' || name.value === '' || phone.value === '' || emailname.value === ''){
        alert('빈 칸이 존재합니다. 모두 입력해주세요');
    } else if(!(pwd.value === cpwd.value)) {
        alert('비밀번호가 불일치합니다.');
    } else if(emaildomain.value === 'default'){
        alert('이메일 주소를 확인해주세요');
    } else if(pwd.value.length>12 || pwd.value.length<6){
        alert('비밀번호는 6~12자로 해주세요');
    } else if (id.value.length<6 || id.value.length>20) {
        alert('아이디는 6~20자로 해주세요');
    } else {
        let member = new Member(id.value, pwd.value, name.value, phone.value, emailname.value, emaildomain.value);
        member.display();
        console.log(member.makeObject());   
    }
}


//이부분은 내가 혼자 pwd와 cpwd가 같을때 pwdcheck이 안보이는거 만들어 보다 만거
// const pwd = document.querySelector('#pwd') || {};
// const cpwd = document.querySelector('#cpwd') || {};
// function checkPassword() {
//     if(pwd.value !== cpwd.value) {
//         document.querySelector('#pwdcheck').style.display = 'block';
//     } else {
//         document.querySelector('#pwdcheck').style.display = 'none';
//     }
// }

// pwd.addEventListener('input',checkPassword);
// cpwd.addEventListener('input',checkPassword);


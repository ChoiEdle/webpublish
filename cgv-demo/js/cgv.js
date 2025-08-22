class User {
    constructor(id, pwd){
        this.id = id;
        this.pwd = pwd;
    }
    display = () => console.log(this.id, this.pwd);
    
}


function signupCheck() {
    let user = null;
    const id = document.querySelector('#id').value;
    const pwd = document.querySelector('#pwd').value;
    if(id === ''){
        alert('id를 입력해주세요');
    } else if(pwd === ''){
        alert('pwd를 입력해주세요');
    } else {
        user = new User(id, pwd);
        user.display();
    }
}

class Member extends User {
    constructor(id, pwd, name, phone, emailname, emaildomain) {
        super(id, pwd);
        this.name = name;
        this.phone = phone;
        this.email = `${emailname}@${emaildomain}`;
    }
    display = () => console.log(this.id, this.pwd, this.name, this.phone, this.email);
    
}

function joinupCheck() {
    const id = document.querySelector('#id').value;
    const pwd = document.querySelector('#pwd').value;
    const cpwd = document.querySelector('#cpwd').value;
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const emailname = document.querySelector('#emailname').value;
    const emaildomain = document.querySelector('#emaildomain').value;
    if(id === '' || pwd === '' || name === '' || phone === '' || emailname === ''){
        alert('빈 칸이 존재합니다. 모두 입력해주세요');
    } else if(!(pwd === cpwd)) {
        alert('비밀번호가 불일치합니다.');
    } else if(emaildomain === 'default'){
        alert('이메일 주소를 확인해주세요');
    } else if(pwd.length<12){
        alert('비밀번호는 최소 12자리로 입력해주세요');
    } 
    else {
        let member = new Member(id, pwd, name, phone, emailname, emaildomain);
        member.display();
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


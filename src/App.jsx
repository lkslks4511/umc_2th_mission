const name = document.getElementById("name");
const name_p = document.getElementById("name_p");
const nickname = document.getElementById("nickname");
const nickname_p = document.getElementById("nickname_p");
const email = document.getElementById("email");
const email_p = document.getElementById("email_p");
const password = document.getElementById("password");
const password_p = document.getElementById("password_p");
const passwordcheck = document.getElementById("passwordcheck");
const passwordcheck_p = document.getElementById("passwordcheck_p");

const submit = document.querySelector(".submit");
const modal = document.getElementById("modal");
const close = document.getElementById("close");




submit.onclick=()=>{
  if(name.value===''){
      name_p.innerText="필수 입력 항목입니다!"
      name_p.style="color: red;"
  } else{
      name_p.innerText="멋진 이름이네요!"
      name_p.style="color: green;"
  }

  const length = [2,3,4,5];
  if(length.includes(nickname.value.length)){
    nickname_p.innerText="멋진 닉네임이네요!"
    nickname_p.style="color: green;"
  } else{
    nickname_p.innerText="닉네임은 2~5글자로 구성해주세요!"
    nickname_p.style="color: red;"
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;
  if(regex.test(email.value)){
    email_p.innerText="올바른 메일 형식입니다!"
    email_p.style="color: green;"
  } else{
    email_p.innerText="올바른 메일 형식이 아닙니다!"
    email_p.style="color: red;"
  }

  const regex2 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W).*$/;
  if(regex2.test(password.value)){
    password_p.innerText="안전한 비밀번호입니다!"
    password_p.style="color: green;"
  } else{
    password_p.innerText="영어+숫자+특수문자를 조합하여 작성해주세요!"
    password_p.style="color: red;"
  }
  if(passwordcheck.value===''){
    passwordcheck_p.innerText=""
    passwordcheck_p.style="color: red;"
  } else if(passwordcheck.value===password.value){
    passwordcheck_p.innerText="비밀번호가 일치합니다!"
    passwordcheck_p.style="color: green;"
  } else{
    passwordcheck_p.innerText="비밀번호가 일치하지 않습니다!"
    passwordcheck_p.style="color: red;"
  }

  if(name_p.style.color==="green"&&nickname_p.style.color==="green"&&email_p.style.color==="green"&&password_p.style.color==="green"&&passwordcheck_p.style.color==="green"){
    modal.style.display = "flex";
  }
}



close.onclick=()=>{
  modal.style.display = "none";
};
let elEmail = document.querySelector('#email');
let elPassword = document.querySelector('#password');
let elPasswordCheck = document.querySelector('#passwordcheck');
let elRegion = document.querySelector('#region');

let elMsg = document.querySelector('#msg');
let elSignup = document.querySelector('#signup');

// 회원가입 MVP
// 아이디는 email로
// 패스워드 숫자 1개 이상, 대소문자 조합, 특수문자 1개상, 8글자 이상
// 패스워드 확인 <---- 앞서 쓴 패스워드와 같아야 한다
// 라디오버튼 성별 남자/여자 <---- 뭐라도 하나는 선택해야 한다
// 셀렉트박스 사는 지역 <---- 선택해도 그만 안해도 그만

// event: ~~~했을 때 trigger
// A. 회원가입 버튼을 클릭했을때 (click)
elSignup.onclick = function() {
  
  // 1. 아이디가 email 형식이 아니면, "유효한 이메일을 입력하세요" (v) click
  if(isInvalidPassword()) {
    displayMessage("유효한 이메일을 입력하세요");
    return
  }
  
  // 2. 아이디가 입력이 되지 않았으면, "아이디를 입력하세요" (v) click
  // if(isEmptyEmail()) {
  //   displayMessage("아이디를 입력하세요")
  // }
  
  // 4. 패스워드 입력 안했으면, "패스워드를 입력하세요" (여러분들의 몫) click
  // if(isEmptyPassword()) {
  //   displayMessage("패스워드를 입력하세요")
  // }
  
  // 6. 성별 선택 안하면, "성별 필수입니다" (o) click  
  // if(isEmptySex()) {
  //   displayMessage("성별은 반드시 선택하세요")
  // }
  
  displayMessage('')
}

function isInvalidEmail() {
  // email의 값이 .. @가 포함되어 있으면 통과
  return !elEmail.value.includes('@')
}

// B. 패스워드 값이 변할때마다(onchange) / 키보드 입력이 눌릴때마다 (onput)
elPassword.oninput = function() {
  // 3. 패스워드가 유효하지 않다면, "숫자 1개, 대소문자 조합, 특수문자 1개이상, 8글자 이상이어야 합니다" (v) onchange
  if(!isValidPassword()) {
    displayMessage('패스워드는 숫자 1개, 대소문자 조합, 특수문자 1개이상, 8글자 이상이어야 합니다');
    return;
  }
  
  displayMessage('');
}


elPasswordCheck.onchange = function() {
  // 5. 패스워드가 두개가 다르면 "패스워드가 다릅니다" (여러분들의 몫) onchange
}

function displayMessage(msg) {
  // 만약 msg === '' 면 표시하지 않는다
  if(msg === '') {
    elMsg.style.display = 'none';
  }
  else {
    // #msg에다가 msg를 넣어주는 작업
    elMsg.style.display = 'block';
    elMsg.textContent = msg;
  }
}

function isValidPassword() {
  let value = elPassword.value;
  if(value.length > 8 && value.match(/\d/g) && hasUpperCase(elPassword.value)) {
    return true;
  }
  else {
    return false;
  }
}

function hasUpperCase(value) {
  let isMatch = value.match(/[A-Z]/g) // 배열아니면 null
  if(isMatch) {
    return true
  }
  else {
    return false
  }
}
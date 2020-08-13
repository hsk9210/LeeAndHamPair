// your code here
'use strict';
// DATA는 이미 작성된 트윗을 표시합니다.
// console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
// console.log(generateNewTweet());

// document.getElementById('test').innerHTML = 'hello twittler, check developer console!';

//유효성검사. tweet버튼 눌렀을때 공란일 경우 피드백 띄우기 && tweet버튼 누르면 등록되었다는 피드백 띄우기

function isEmpty () {
    let elUserName = document.querySelector('#UserName');
    let elComment = document.querySelector('#Comment');
    if(elUserName.value.length === 0 && elComment.value.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

const elTweet = document.querySelector('#Tweet');
elTweet.onclick = function () {
    if(isEmpty ()) {
        alert('내용을 입력해 주세요.');
    }
    if(!isEmpty ()) {
        alert('Tweet!이 완료되었습니다.');
    }
}

// 1.하드코딩되어있던 트윗 대신에, JavaScript에 담긴 이미 작성되어 있는 트윗들을 보여주세요.
// DATA라는 변수를 이용하세요. 또는, 무작위로 트윗을 생성하는 함수를 이용할 수도 있습니다.

// DATA를 이용하는 경우
function basic5Comments () {
    for(let i = 0; i < DATA.length; i++) {
        let target = document.querySelector('#target');
        let tmpl = document.querySelector('.eachComment');
        let clone = document.importNode(tmpl.content, true); //clone = li
        clone.querySelector('.user').textContent = DATA[i].user;
        clone.querySelector('.message').textContent = DATA[i].message;
        clone.querySelector('.created_at').textContent = DATA[i].created_at;
        target.appendChild(clone);
    }
}
window.onload = basic5Comments();

//무작위로 트윗을 생성하는 함수를 이용하는 경우



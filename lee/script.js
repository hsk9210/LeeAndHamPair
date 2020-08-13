// your code here
'use strict';
// DATA는 이미 작성된 트윗을 표시합니다.
// console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
// console.log(generateNewTweet());

// document.getElementById('test').innerHTML = 'hello twittler, check developer console!';

//유효성검사. tweet버튼 눌렀을때 공란일 경우 피드백 띄우기 && tweet버튼 누르면 등록되었다는 피드백 띄우기

// function isEmpty () {
//     let elUserName = document.querySelector('#UserName');
//     let elComment = document.querySelector('#Comment');
//     if(elUserName.value.length === 0 && elComment.value.length === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const elTweet = document.querySelector('#Tweet');
// elTweet.onclick = function () {
//     if(isEmpty ()) {
//         alert('내용을 입력해 주세요.');
//     }
//     if(!isEmpty ()) {
//         alert('Tweet!이 완료되었습니다.');
//     }
// }

// 1.하드코딩되어있던 트윗 대신에, JavaScript에 담긴 이미 작성되어 있는 트윗들을 보여주세요.
// DATA라는 변수를 이용하세요. 또는, 무작위로 트윗을 생성하는 함수를 이용할 수도 있습니다.

// DATA를 이용하는 경우
function printComments () {
    DATA.forEach(addNewComment())
}
printComments();
function printComment () {
    let addNewComment = addNewComment(comment);
    let shownCommentWindow = document.querySelector('#shownCommentWindow');
    shownCommentWindow.appendChild(newComment);
}

function addNewComment (comment) {
    let elLi = document.createElement('li');
    let elUser = document.createElement('span');
    let elMessage = document.createElement('div');
    let elCreated_at = document.createElement('span');
    //user
    elUser.classList.add('user');
    elUser.textContent = comment.user;
    elLi.appendChild(elUser);
    //message
    elMessage.classList.add('message');
    elMessage.textContent = comment.message;
    elLi.appendChild(elMessage);
    //created_at
    elCreated_at.classList.add('created_at');
    elCreated_at.textContent = comment.created_at;
    elLi.appendChild(elCreated_at);
    //template clone => to ul
    let tmpl = document.querySelector('.eachComment');
    let newComment = document.importNode(tmpl.content, true);//clone
    let shownCommentWindow = document.querySelector('#shownCommentWindow');
    newComment.appendChild(elLi);
    shownCommentWindow.appendChild(newComment);
    
    return shownCommentWindow;
}
addNewComment();

//무작위로 트윗을 생성하는 함수를 이용하는 경우



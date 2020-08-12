// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

// document.getElementById('test').innerHTML = 'hello twittler, check developer console!';


//유효성검사. tweet버튼 눌렀을때 공란일 경우 피드백 띄우기 && tweet버튼 누르면 등록되었다는 피드백 띄우기
let elUserName = document.querySelector('#UserName');
let elComment = document.querySelector('#Comment');
let elTweet = document.querySelector('#Tweet');


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



elTweet.onclick = function () {
    if(isEmpty ()) {
        alert('내용을 입력해 주세요.');
    }
    if(!isEmpty ()) {
        alert('Tweet! 완료되었습니다.');
    }


}
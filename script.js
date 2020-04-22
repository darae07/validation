// your code here
let newData=[];
// Bare Minimum Requirements : 1 ~ 4

// 1. DATA는 이미 작성된 트윗을 표시 :
DATA.forEach(dataPush);

// 2. 트윗을 작성하고 제출하면, 목록에 신규 트윗이 추가
let usertweet = document.querySelector("#makenewtweet").onclick= function(){
  let comment = {};
  comment.user = '다래';
  comment.message = document.querySelector("#content").value;
  comment.created_at = dateFomat();
  dataPush(comment);
}
// 3. generateNewTweet을 호출할 때마다 새로운 트윗을 생성
let randomtweet = document.querySelector("#checknew").onclick =function(){
  dataPush(generateNewTweet());
}
// 4. 트윗 작성자의 이름을 클릭하면 해당 사용자의 타임라인 보여줌 -> 구조를 통한 로직

// 구조 : 1 ~ 3
// 1. 3가지 방법으로 신규 트윗이 작성됨
// 1-1. 작성된 트윗은 데이터 목록에 푸쉬되고, : newData

function dataPush(el){
  let comment = {};
  comment.user = el.user;
  comment.message = el.message;
  comment.created_at = el.created_at;
  newData.push(comment);

  print(comment);
  // 1-3. 데이터 추가될 때마다 filtering함수 불러옴.
  filtering();
}
// 1-2. 데이터 목록 렌더링으로 출력됨
function print(el){
  let comment =document.createElement('li');

  let user = document.createElement('span');
  user.className ="username";
  user.textContent = el.user;
  comment.appendChild(user);

  let message = document.createElement('div');
  message.textContent = el.message;
  comment.appendChild(message);

  let created_at = document.createElement('span');
  created_at.className = "date";
  created_at.textContent = el.created_at;
  comment.appendChild(created_at);

  let parent = document.querySelector("#view-comments");
  parent.prepend(comment);
}

// 2. 트윗 작성자의 이름을 클릭하면 해당 사용자의 타임라인 보여줌 : function filtering
// 2-1. 데이터 목록에서 유저 이름 어레이를 만들어 이름에 온클릭을 붙일수 있게 하기.
function filtering(){
  let filteruser = Array.from(document.querySelectorAll(".username"));
  for(let i=0; i<filteruser.length; i++){
    filteruser[i].onclick = function(event){
//2-2온클릭이 실행되면 newData user값과 클릭된 유저의 innerHTML를 비교함
    for(let j=0; j<newData.length; j++){
      if(newData[j].user === filteruser[i].innerHTML){
// 2-3. 필터드 데이터를 별도의 ul에 렌더함
        let comment =document.createElement('li');

        let user = document.createElement('span');
        user.className ="username";
        user.textContent = newData[j].user;
        comment.appendChild(user);

        let message = document.createElement('div');
        message.textContent = newData[j].message;
        comment.appendChild(message);

        let created_at = document.createElement('span');
        created_at.className = "date";
        created_at.textContent = newData[j].created_at;
        comment.appendChild(created_at);

        let parent = document.querySelector("#filtered-comments");
        parent.prepend(comment);
      }
    }
// 2-4. 기존 ul을 display none으로 감춤
    document.querySelector("#view-comments").style.display = 'none';
// 2-5. 백버튼 활성화
    document.querySelector("#back").disabled = false;
// 2-6. generateNewTweet 비활성화 
    document.querySelector("#checknew").disabled = true;
    }   
  }
}

// 3. 필터링 이후에 백버튼이 눌려 기존의 화면으로 돌아갈 때,
document.querySelector("#back").addEventListener('click', btnset);

function btnset(){
// 3-1. 필터드 데이터 비워줌
  document.querySelector("#filtered-comments").innerHTML='';
// 3-2. 기존 ul을 디스플레이속성으로 보이기
  document.querySelector("#view-comments").style.display = 'block';
// 3-3. 백버튼 비활성화
  document.querySelector("#back").disabled = true;
// 3-4. generateNewTweet 활성화 
  document.querySelector("#checknew").disabled = false;
}
btnset();




// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

let modal = document.querySelector("#mymodal");
let modalbtn = document.querySelector("#modalbtn");

modalbtn.onclick = function(){
  modal.style.display = "block";
}
window.onclick = function(event){
  if(event.target === modal){
    modal.style.display = "none";
  }
}
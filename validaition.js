// 변수 설정
let elfname= document.querySelector('#firstname');
let ellname= document.getElementById('lastname');
let elid= document.querySelector('#id');
let elpw= document.querySelector('#password');
let elpw2= document.querySelector('#passwordtwo');
let elphone1= document.getElementById('firstphone');
let elphone2= document.getElementById('lastphone');
let elpNum1 = Number(elphone1.value) ;
let elpNum2 = Number(elphone2.value) ;
let elemail= document.querySelector('#email');
let elselect= document.querySelector('#adress');
let validate = [];

// < 제출하기를 눌렀을 때 발생되는 조건 >
// 1. 아이디를 입력해 주세요
// 2. 비밀번호가 같지 않습니다.
// 3. 전화번호는 4자리 입니다.

function isValidId(){
  return elid.value.length === 0;
}
function isValidPw(){
  if(elpw.value.length === 0 || elpw2.value.length === 0){
    return true;
  }
  return elpw.value !== elpw2.value;
}
function isValidPhone(){
  return !(elphone1.value.length === 4 && elphone2.value.length === 4);
}

// 가입되었을때
function resister(){
    let div= document.createElement('DIV');
    div.innerHTML = `<div id="resi">축하합니다` + elid.value +`님! 가입이 완료되었습니다</div>`
    let parent = document.querySelector('#resister');
    parent.appendChild(div);
}
// 주소
let adress;
document.getElementById('adress').onchange = function(){
  let i= elselect.selectedIndex;
  adress=elselect.options[i].text;
  return adress;
}

// 제출하기를 눌렀을 때, 받은 데이터 콘솔 출력
function getInputValue(){
    console.log('성: ' + elfname.value);
    console.log('이름: ' + ellname.value);
    console.log('아이디: ' + elid.value);
    console.log('비밀번호: ' + elpw.value);
    console.log('전화번호: 010-' + elphone1.value + '-' + elphone2.value); 
    console.log('이메일: ' + elemail.value);
    if(document.querySelector('#male').checked){
        console.log('성별: ' + document.querySelector('#male').value);
    }
    if(document.querySelector('#female').checked){
        console.log('성별: ' + document.querySelector('#female').value);
    }
    console.log('거주 지역: ' + adress);
    
}
// 제출버튼클릭
document.querySelector('#submit').onclick = function(){
  if(isValidId()){
    elid.classList.add("red");
    document.querySelector("#idVali").innerHTML = '<i class="fas fa-times-circle"></i> 아이디를 입력해주세요';
  }else if(isValidPw()){
    elpw2.classList.add("red");
    document.querySelector("#pwVali2").innerHTML = '<i class="fas fa-times-circle"></i> 비밀번호가 같지 않습니다.';
  }else if (isValidPhone()){
    elphone1.classList.add("red");
    elphone2.classList.add("red");
    document.querySelector("#phoneVali").innerHTML = '<i class="fas fa-times-circle"></i> 전화번호는 4자리 숫자입니다';
  }else{
    timeoutID = window.setTimeout(resister, 2000);
    document.querySelector('#submit').innerHTML = '<i class="fa fa-spinner w3-spin""></i>';
    getInputValue();
    timeoutID = window.setTimeout(function(){
      document.querySelector('#submit').innerHTML ='<i class="fas fa-check-circle"></i>';
    }, 2000);
  }
};


// < 실시간 조건 >
// 1. 전화번호는 숫자입니다.
// 2. 아이디는 6자리보다 길어야 합니다.
// 3. 비밀번호는 6자리보다 길어야 합니다.

function inNumber(){
  if(event.keyCode<48 || event.keyCode>57){
     event.returnValue=false;
  }
}
elphone1.onkeypress = inNumber;
elphone2.onkeypress = inNumber;

function isIdLessThan6(){
  return elid.value.length < 6;
}
function isPwLessThan6(){
  return elpw.value.length < 6 ;
}
elid.onkeydown = function(){
  elid.classList.remove("red")
  if(isIdLessThan6()){
    document.querySelector("#idVali").innerHTML =  '<i class="fas fa-times-circle"></i> 아이디는 6자리보다 길어야 합니다';
    document.querySelector("#idCheck").innerHTML ='';
  }else{
    document.querySelector("#idVali").innerHTML ="";
    document.querySelector("#idCheck").innerHTML ='<i class="fas fa-check-circle"></i>';
  }
}
elpw.onkeydown = function(){
  if(isPwLessThan6()){
    document.querySelector("#pwVali").innerHTML = '<i class="fas fa-times-circle"></i> 비밀번호는 6자리보다 길어야 합니다';
    document.querySelector("#pwCheck").innerHTML ='';
  }else{
    document.querySelector("#pwVali").innerHTML ="";
    document.querySelector("#pwCheck").innerHTML ='<i class="fas fa-check-circle"></i>';
  }
}
elpw2.onkeydown = function(){
  elpw2.classList.remove("red");
  document.querySelector("#pwVali2").innerHTML = "";
}
elphone1.onkeydown = function(){
  elphone1.classList.remove("red");
  elphone2.classList.remove("red");
  document.querySelector("#phoneVali").innerHTML = "";
}
elphone2.onkeydown = function(){
  elphone1.classList.remove("red");
  elphone2.classList.remove("red");
  document.querySelector("#phoneVali").innerHTML = "";
}

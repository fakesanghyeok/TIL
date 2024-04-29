const textElement = document.getElementById("name");
alert ("Lee무위키에 오신것을 환영합니다!!");
let name = prompt("당신을 뭐라고 부를까요?");
alert (name + "님 환영합니다!");
textElement.innerHTML += name;
//function $(id) {
//	return document.getElementById(id);
//}

function rnd(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}
//var kuang = document.getElementsByClassName("kuang_wrap");
var inner = document.getElementById("person_kuang");
var time = document.getElementById("time");

var count = 1;
var imgSrc = ["baobei.png", "xuzheng.png"];
var clickFlag = true;

var selectImg = null;

function findNext() {
	//生成图片
	count++;
	if (count >= 10) {
		count = 10; //最多显示10*10
	}
	inner.innerHTML = ""; //清除原来的图片
	var rndNumber = rnd(0, count * count);
	for (var i = 0; i < count * count; i++) {
		var img = new Image();
		if (rndNumber == i) {
			selectImg = img;
			//当随机数跟i第几张相等的时候，就是我们所要找的那天图片
			img.src = imgSrc[1];
			img.onclick = function() {
				// alert("徐峥");
				findNext(); //递归
				console.log(1)
			}
		} else {
			img.src = imgSrc[0];
		}
		img.style.width = 1 / count * 100 + "%";
//		img.style.padding = 20+"px";
		inner.appendChild(img);
	}
}

var timer = 0;
function timeRemaid() {

	//Math.ceil()向上取整
	//Math.floor()向下取整
	//toFixed(2)取小数的后2位
	var timeAll = 60;
	clearInterval(timer);
	timer = setInterval(function() {
		timeAll -= 0.1;
		timeAll = timeAll.toFixed(2);
		time.innerHTML = "剩余时间：" + timeAll;
		if (timeAll <= 0) {
			clearInterval(timer);
//			alert("game over!");
			selectImg.onclick = null;
			count = 1;
			clickFlag = true;
		}
	}, 100)
}
timeRemaid();
findNext();
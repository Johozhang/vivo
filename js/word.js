//打字页面
var word = document.getElementById("word");
var star = document.getElementById("star");
var surper = document.getElementById("surper");
var zimu = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio a deserunt harum soluta ipsum dicta, eveniet placeat. Perspiciatis qui culpa commodi excepturi iure impedit illo fuga eaque corrupti odit!";
var i = 0;
var timer = setInterval(function() {
	word.innerHTML = word.innerHTML + zimu[i];
	i++;
	if (i > zimu.length - 1) {
		clearInterval(timer);
		word.style.opacity = "0";
	}
},30);

//
			var sur = $("#sur");
//			var star10 = $("#star10");
//			var star8 = $("#star8");
//			var star4 = $("#star4");
			var phone = $("#phone");
			var phones = $("#phones");
			var chip1 = $("#chip1");
			var chip2 = $("#chip2");
			var chip3 = $("#chip3");
			var chip4 = $("#chip4");
			var chip5 = $("#chip5");
			var chip6 = $("#chip6");
			var chip7 = $("#chip7");
			var chip8 = $("#chip8");
			var tl = new TimelineLite();
			//超人
			tl.to(sur,0,{
				x:900,
				y:400,
			}).to(sur,2,{
				delay:9,
				x:100,
				y:100,
			}).to(sur,2,{
				delay:2,
				x:-300,
				y:-300,
			})
//			.to(star10,0,{
//				onComplete:function() {
//					star10.style.display = "none";
//				}
//			},"-=2")
//			.to(star8,0,{
//				onComplete:function() {
//					star8.style.display = "none";
//				}
//			},"-=2")
//			.to(star4,0,{
//				onComplete:function() {
//					star4.style.display = "none";
//				}
//			},"-=2")
			//手机
			.to(phone,2,{
				width:"50%",
				rotation:360,
				opacity:1,
			}).to(phone,4,{
				opacity:0,
			}).to(phones,2,{
				opacity:1,
			},"-=4")
			//斗转星移
			.to(chip1,5,{
				width:"0",
				rotation:1500,
			})
			.to(chip2,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip3,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip4,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip5,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip6,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip7,5,{
				width:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			.to(chip8,5,{
				width:"0",
				height:"0",
				rotation:-1500,
				x:-50,
				y:250,
			},"-=5")
			
			//星星出现
			.to(star,0,{
				onComplete:function() {
					star.style.display = "block";
				}
			},"-=7")
			//
			

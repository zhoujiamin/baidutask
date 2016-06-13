window.onload = init;

function init() {
	//绑定
	buttonInit();



}

function buttonInit() {
	var leftin = document.getElementById("left-in");
	leftin.addEventListener("click", leftIn, false);

	var rightin = document.getElementById("right-in");
	rightin.addEventListener("click", rightIn, false);

	var leftout = document.getElementById("left-out");
	leftout.addEventListener("click", leftOut, false);

	var rightout = document.getElementById("right-out");
	rightout.addEventListener("click", rightOut, false);

	var clear = document.getElementById("clear");
	clear.addEventListener("click", clearNumber, false);

	var random = document.getElementById("random");
	random.addEventListener("click", randomNumber, false);

	var bubble = document.getElementById("bubbleSort");
	bubble.addEventListener("click", function() {
		bubbleSort()();

	}, false);

	var Insert = document.getElementById("insertSort");
	Insert.addEventListener("click", function() {
		InsertSort()();
	}, false);


	var SelectSort = document.getElementById("selectSort");
	SelectSort.addEventListener("click", function() {
		selectSort()();
	}, false);



}

/*进行数字校验*/
var pattern = /^[0-9]+$/;

function rePattern() {
	var value = document.getElementById("input").value.trim();
	var a = value.match(pattern);
	if (!a) {
		alert("input error,请输入数字");
		return false;
	}
	if (Number(value) < 10 || Number(value) > 100) {
		alert("请输入数字10到100之间");
		return false;
	}
	return value;
}

/*队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示*/
function resum() {
	var sumarray = document.getElementById("showdata").getElementsByTagName("li");
	if (sumarray.length > 60) {
		alert("数量超过60了！");
		return false;
	}
	return sumarray;
}

/*生成li元素*/
function createli(height) {
	var li = document.createElement("li")
	li.style.height = height * 2 + "px"; //x2是为了把图片放大，比较美观
	return li;
}

/*检测是否在排序*/
var ifs = false;

/*鼠标放在红色上显示数字*/
function show() {
	var showdata = document.getElementById("showdata");
	var divli = showdata.getElementsByTagName("li");
	for (var i = 0; i < divli.length; i++) {
		divli[i].addEventListener("mouseover", showdigi, false);
		divli[i].addEventListener("mouseout", hidden, false);
	}

	function showdigi() {
		this.innerHTML = parseInt(this.style.height) / 2;
	}

	function hidden() {
		this.innerHTML = "";
	}

}

function leftIn() {
	if (ifs) {
		return false;
	}
	var sum = resum();
	if (resum() === false) {
		return false;
	}
	var tf = rePattern();
	if (tf === false) {
		return false;
	}

	var showdata = document.getElementById("showdata");
	var divli = showdata.getElementsByTagName("li");
	var li = createli(Number(tf));
	if (divli.length === 0) {
		showdata.appendChild(li);
	} else {
		showdata.insertBefore(li, divli[0]);
	}
	show();

}

function rightIn() {
	if (ifs) {
		return false;
	}
	var sum = resum();
	if (resum() === false) {
		return false;
	}
	var tf = rePattern();
	if (tf === false) {
		return false;
	}

	var showdata = document.getElementById("showdata");
	var divli = showdata.getElementsByTagName("li");
	var li = createli(Number(tf));
	showdata.appendChild(li);
	show();

}

function leftOut() {
	// body...
	if (ifs) {
		return false;
	}
	var showdata = document.getElementById("showdata");
	var divli = showdata.getElementsByTagName("li");
	if (divli.length == 0) {
		alert("没有数字,不可操作");
	} else {
		var alertnum = parseInt(divli[0].style.height) / 2;
		showdata.removeChild(divli[0]);
		alert("删除了" + alertnum);
	}
	show();
}

function rightOut() {
	// body...
	if (ifs) {
		return false;
	}
	var showdata = document.getElementById("showdata");
	var divli = showdata.getElementsByTagName("li");
	if (divli.length == 0) {
		alert("没有数字,不可操作");
	} else {
		var alertnum = parseInt(divli[divli.length - 1].style.height) / 2;
		showdata.removeChild(divli[divli.length - 1]);
		alert("删除了" + alertnum);
	}
	show();
}

function clearNumber() {
	if (ifs) {
		return false;
	}
	document.getElementById("showdata").innerHTML = "";
}


function randomNumber() {
	if (ifs) {
		return false;
	}
	var showdata = document.getElementById("showdata");
	showdata.innerHTML = "";
	var sum;
	for (var i = 0; i <= 59; i++) {
		sum = Math.floor(Math.random() * 91 + 10);
		var divli = showdata.getElementsByTagName("li");
		var li = createli(Number(sum));
		showdata.appendChild(li);
	}
	show();
}


function bubbleSort() {
	if (ifs) {
		return false;
	}
	var divli = document.getElementById("showdata").getElementsByTagName("li");
	var num = [];
	for (var n = 0; n < divli.length; n++) {
		num[n] = parseInt(divli[n].style.height);
	}

	var i = 0,
		j = 0;
	var len = num.length;
	var biaozhi = false;
	ifs = true; //在排序
	return function timer() {

		if (i >= len - 1) {
			ifs = false; //排序结束
			return false;
		}
		if (j < len - i - 1) {
			if (num[j] > num[j + 1]) {
				var tmp = num[j];
				num[j] = num[j + 1];
				num[j + 1] = tmp;
				divli[j].style.height = num[j] + 'px';
				divli[j + 1].style.height = num[j + 1] + 'px';
				biaozhi = true;
			}
			j++;
			if (j == len - i - 1) {
				j = 0;
				i++;
			}
		}
		if (biaozhi) {
			biaozhi = false;
			setTimeout(timer, 20);
		} else {
			timer();
		}
	}
}


function InsertSort() {
	if (ifs) {
		return false;
	}
	var divli = document.getElementById("showdata").getElementsByTagName("li");
	var num = [];
	for (var n = 0; n < divli.length; n++) {
		num[n] = parseInt(divli[n].style.height);
	}

	var i = 1,
		j = 0,
		x = num[i];
	var len = num.length;
	var biaozhi = false; //
	ifs = true; //在排序

	return function timer() {
		if (i >= len) {
			ifs = false; //排序结束
			return false;
		}
		//复制为哨兵，即存储待排序元素 
		if (x < num[j] && j >= 0) { //查找在有序表的插入位置(到了位置0后，不继续排序) 
			num[j + 1] = num[j];
			num[j] = x;
			divli[j].style.height = num[j] + 'px';
			divli[j + 1].style.height = num[j + 1] + 'px';
			biaozhi = true;
			j--;
		} else {
			if (j != -1) {
				num[j + 1] = x;
				divli[j].style.height = num[j] + 'px';
				biaozhi = true;
			}
			biaozhi = false;
			i++
			j = i - 1;
			x = num[i];
		}

		if (biaozhi) {
			biaozhi = false;
			setTimeout(timer, 20);
		} else {
			timer();
		}
	};
}



function selectSort() {
	if (ifs) {
		return false;
	}
	var divli = document.getElementById("showdata").getElementsByTagName("li");
	var num = [];
	for (var n = 0; n < divli.length; n++) {
		num[n] = parseInt(divli[n].style.height);
	}

	function SelectMinKey(array, m) {
		var k = m;
		for (var j = m; j < array.length; j++) {
			if (array[k] > array[j]) k = j;
		}
		return k;
	}

	var i = 0,
		key = 0,
		temp = 0;
	var len = num.length;
	var biaozhi = false; //
	ifs = true; //在排序

	return function timer() {
		if (i >= len) {
			ifs = false;
			return false;
		}
		key = SelectMinKey(num, i);
		temp = num[i];
		num[i] = num[key];
		num[key] = temp;
		divli[i].style.height = num[i] + 'px';
		divli[key].style.height = num[key] + 'px';
		i++;
		setTimeout(timer, 20);


	}

}
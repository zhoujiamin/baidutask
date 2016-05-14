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


}

var pattern = /^[0-9]+$/;

function rePattern() {
	var value = document.getElementById("input").value.trim();
	var a = value.match(pattern);
	if (!a) {
		alert("input error,请输入数字");
		return false;
	}
	return value;
}

function leftIn() {
	var tf = rePattern();
	if (tf == false) {
		return false;
	}
	var div = document.createElement("div");
	div.className = "data";
	div.innerHTML = tf;
	var showdata = document.getElementById("showdata");
	var divdata = showdata.getElementsByTagName("div");
	if (divdata.length == 0) {
		showdata.appendChild(div);
	}else{
		showdata.insertBefore(div,divdata[0]);
	}

}

function rightIn() {
	var tf = rePattern();
	if (tf == false) {
		return false;
	}
	var div = document.createElement("div");
	div.className = "data";
	div.innerHTML = tf;
	var showdata = document.getElementById("showdata");
	var divdata = showdata.getElementsByTagName("div");
	
	showdata.appendChild(div);
	

}

function leftOut() {
	// body...
	
	
	var showdata = document.getElementById("showdata");
	var divdata = showdata.getElementsByTagName("div");
	if (divdata.length == 0) {
		alert("没有数字,不可操作");
	}else{
		var alertnum=divdata[0].innerHTML;
		showdata.removeChild(divdata[0]);
		alert("删除了"+alertnum);
	}
}

function rightOut() {
	// body...
	var showdata = document.getElementById("showdata");
	var divdata = showdata.getElementsByTagName("div");
	if (divdata.length == 0) {
		alert("没有数字,不可操作");
	}else{
		var alertnum=divdata[divdata.length-1].innerHTML;
		showdata.removeChild(divdata[divdata.length-1]);
		alert("删除了"+alertnum);
	}
}


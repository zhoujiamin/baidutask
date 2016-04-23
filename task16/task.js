/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var inputcity = document.getElementById("aqi-city-input").value.trim();
	var inputvalue = document.getElementById("aqi-value-input").value.trim();
	var a = inputcity.match(/^[A-Za-z\u4E00-\u9FA5]+$/); //正则表达式
	var b = inputvalue.match(/^\d+$/);
	if (!a) {
		document.getElementById("aqi-city-input").value = "城市名必须为中英文字符！";
	}
	if (!b) {
		document.getElementById("aqi-value-input").value = "空气质量指数必须为整数！";
	}
	if (a && b) {
		aqiData[inputcity] = inputvalue;
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for (var x in aqiData) {

		table = table + "<tr><td>" + x + "</td><td> " + aqiData[x] +
			"</td><td><button onclick='delBtnHandle(\""+x+"\")'>" + "删除" + "</button></td></tr>";
			/*<!-- 这个button怎么写非常重要。 传参怎么传的要知道-->*/
	}
	document.getElementById("aqi-table").innerHTML = table;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
	// do sth.
	delete aqiData[city];
	renderAqiList();
}

function init() {

	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	/*document.getElementById("add-btn").onclick = addBtnHandle();*/
	var btnAdd = document.getElementById("add-btn");

	btnAdd.onclick = addBtnHandle;

	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	/*见button的click*/
}

init();
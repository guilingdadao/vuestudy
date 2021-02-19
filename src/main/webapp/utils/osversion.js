var osData = [ {
	name : 'Windows 2000',
	group : 'windows_server',
	identifier : 'Windows NT 5.0',
	version : '5.0'
}, {
	name : 'Windows XP',
	group : 'windows',
	identifier : 'Windows NT 5.1',
	version : '5.1'
}, {
	name : 'Windows 2003',
	group : 'windows_server',
	identifier : 'Windows NT 5.2',
	version : '5.2'
}, {
	name : 'Windows Vista',
	group : 'windows',
	identifier : 'Windows NT 6.0',
	version : '6.0'
}, {
	name : 'Windows 7',
	group : 'windows',
	identifier : 'Windows NT 6.1',
	version : '7.0'
}, {
	name : 'Windows 8',
	group : 'windows',
	identifier : 'Windows NT 6.2',
	version : '8.0'
}, {
	name : 'Windows 8.1',
	group : 'windows',
	identifier : 'Windows NT 6.3',
	version : '8.1'
}, {
	name : 'Windows 10',
	group : 'windows',
	identifier : 'Windows NT 10.0',
	version : '10.0'
}, {
	name : 'Windows 2008',
	group : 'windows_server',
	identifier : 'Windows NT 6.0; WOW64',
	version : '6.0'
}, {
	name : 'Windows 2008',
	group : 'windows_server',
	identifier : 'Windows NT 6.1; WOW64',
	version : '6.1'
}, {
	name : 'Windows 2012',
	group : 'windows_server',
	identifier : 'Windows NT 6.3; Win64',
	version : '6.3'
}, {
	name : 'Chrome OS',
	group : 'windows',
	identifier : 'CrOS'
}, {
	name : 'Mac OS X Capitan',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])11([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Yosemite',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])10([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Mavericks',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])9([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Mountain Lion',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])8([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Lion',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])7([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Snow Leopard',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])6([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Leopard',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])5([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Tiger',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])4([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Panther',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])3([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Jaguar',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])2([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Puma',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])1([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS X Cheetah',
	group : 'mac',
	identifier : 'Mac OS X (10([_|\.])0([0-9_\.]*))',
	versionSeparator : '[_|\.]'
}, {
	name : 'Mac OS',
	group : 'mac',
	identifier : 'Mac OS'
}, {
	name : 'Ubuntu',
	group : 'linux_server',
	identifier : 'Ubuntu',
	versionIdentifier : 'Ubuntu/([0-9\.]*)'
}, {
	name : 'CentOs',
	group : 'linux_server',
	identifier : 'CentOs',
	versionIdentifier : 'CentOs/([0-9\.]*)'
}, {
	name : 'Debian',
	group : 'linux_server',
	identifier : 'Debian'
}, {
	name : 'Gentoo',
	group : 'linux_server',
	identifier : 'Gentoo'
}, {
	name : '国产系统',
	group : 'linux',
	identifier : 'Linux'
} ];


// 定义一个数组

var arr=['A','B','C'];

// 定义一个对象

var obj={name:'张三',age:20}

// for..in 遍历数组 得到索引

for(var x in arr ){
console.log(x) // 0 1 2
}

// for..in 遍历对象 得到键和值

for(var x in obj){
console.log(x)  // name age
console.log(obj[x])  // 张三 20
}

// for..of 遍历数组 得到值

for(let x of arr){
	console.log(x)  // A B C
}
// for..of 遍历对象 会报错


/*******************************************************************************
 * ES5新增的属性和方法（IE6/7/8不支持） hasOwnProperty和for in兼容性有问题
 */
var setOsData = function(os) {
	var userAgent = navigator.userAgent.toLowerCase();
	// Check browser type
	for (i in osData) {// 遍历osData数组
		
		if (osData.hasOwnProperty(i)) {//
			
			var osRegExp = new RegExp(osData[i].identifier.toLowerCase());
			var osRegExpResult = osRegExp.exec(userAgent);// 使用唯一的标记在navigator.userAgent.toLowerCase(),查找子串,找了返回

			if (osRegExpResult != null) {
				os.name = osData[i].name;
				os.group = osData[i].group;
				break;
			}
		}
	}

	return true;
};

/*******************************************************************************
 * 获取当前操作系统信息
 * 
 * @returns
 */
function getOsData(){
	for(var i =0;i<osData.length;i++){
		// 判断标准
		var osRegExp = new RegExp(osData[i].identifier.toLowerCase());
		// 执行判断
		var osRegExpResult = osRegExp.exec(userAgent);// 使用唯一的标记在navigator.userAgent.toLowerCase(),查找子串,找了返回
		// 命中后将信息返回
		if (osRegExpResult != null) {
			os.name = osData[i].name;
			os.group = osData[i].group;
			
			return {
				name:osData[i].name,
				group:osData[i].group
			};
		}
	}
}


var setOsVersion = function(os, version, separator) {
	
	if (separator.substr(0, 1) == '[') {
		var splitVersion = version.split(new RegExp(separator, 'g'), 2);
	} else {
		var splitVersion = version.split(separator, 2);
	}

	if (separator != '.') {
		version = version.replace(new RegExp(separator, 'g'), '.');
	}

	os.fullVersion = version;

	// Major version
	if (splitVersion[0]) {
		os.majorVersion = parseInt(splitVersion[0]);
	}

	// Minor version
	if (splitVersion[1]) {
		os.minorVersion = parseInt(splitVersion[1]);
	}

	return true;
};


/*******************************************************************************
 * 利用原生Js获取操作系统版本
 * 
 * @returns
 */
function getOS() {
    var sUserAgent = navigator.userAgent;
    
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
        var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Win10";
    }
    return "other";
}


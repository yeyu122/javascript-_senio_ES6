function ajax(option) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            let res = JOSN.parse(this.responseText);
            option.success(res) //这里调用success函数  
        }
    };
    // 处理data数据  将对象形式的 处理查询字符串形式的  
    // 因为下面open 或者 send只能加字符串形式 
    let arr = []
    for (let i in option.data) {
        // i表示对象的key
        // option.data[i]表示对象的值
        arr.push(i + '=' + option.data[i]); // ['bookname=aaa', 'author=bbb', ...]
    }
    //join() 把数组转化为字符串，元素是通过指定的分隔符进行分隔的，如果没有默认为逗号
    let querystring = arr.join('&'); // bookname=aaa&author=bbb&publiser=ccc

    // toUpperCase()  转大写
    let method = option.type.toUpperCase(); // 把请求方式转成大写   识别 post / POST
    //  判断请求
    if (method === 'GET') {
        xhr.open('GET', option.url + '?' + querystring);
        xhr.send();
    } else if (method === 'POST') {
        xhr.open('POST', option.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(querystring);
    }
    success
};
export default ajax
function ajax() {
    let url = a.url;
    let type = a.type.toLowerCase(); //为了后续，发送方式一律改为小写
    let data = Boj(a.data) || {} //这里运用短路运算，判断是否有参数值。有值就执行前面
    function Boj(data) { //定义一个处理参数的函数
        let arr = []; //定义一个空数组用来保存数据
        for (let key in data) { //遍历参数对象 key表示健名
            arr.push(key + '=' + data[key]) //这里需要注意，用拼接方式我们需要将参数转成 name=张三 这样的格式（这是get方式的传参）
        }
        return arr.join('&') //将arr数组拼接成一个字符串 name=张三&age=18 返回到data处

    }
    let xhr = new XMLHttpRequest() //创建ajax对象
        //下面进行判定，get方式和post方式分开
    if (type == 'get') {
        xhr.open('get', url + '?' + data) //设置请求方式和请求地址，参数拼接上去
        xhr.send() //发送请求
    } else {
        xhr.open('post', url + '?' + data) //设置请求方式和请求地址，参数拼接上去
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //设置请求头
        xhr.send('name=小飞飞&age=18') //发送请求
    }
    //监听状态码和响应码
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response).data); //进行一系列数据渲染操作
            //3只有状态码为4，响应码为200 接受数据成功，响应完成
        } else {}
    }

}
export default ajax
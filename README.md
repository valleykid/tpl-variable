tpl-variable
========================

编译模板文件时，因为数据不完整等原因会导致crash，此中间件就是解决这个问题。
原理：把所有的变量存放到某个对象下，作为对象的属性，即使数据出错，也不会引起js执行错误。

## Installation

Either through forking or by using [npm](https://www.npmjs.com) (the recommended way):

```{bash}
npm install tpl-variable
```
And tpl-variable will be installed in to your node-project.


## examples

```{js}
// ...
var tplVariable = require('tpl-variable');

app.use(tplVariable(variable:'o', blackList:['body']));
```

## Documentation

- 设置variable(默认'o') 表示模板里的变量都存放在o下面；如 app.get('/', {name:'vk'}, function(){})，模板中<%-o.name%>
- 设置blackList(可选) 表示此数组里的变量不存放在o下面；如 <%-body%>

## License

MIT

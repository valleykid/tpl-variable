tpl-variable
========================

模板文件中。

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

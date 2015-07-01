module.exports = function(cfg){
	return function tplVariable(req, res, next){
		if(!cfg || !isObject(cfg)) return next();
		var func = res.render, o;
		res.render = function(view, options, fn){
			extend(res.locals, cfg, isFunction(options)? null : options);
			func.call(res, view, options, fn);
		};
		next();
	};
};

function isObject(o){
	return Object.prototype.toString.call(o)==='[object Object]';
}

function isFunction(o){
	return Object.prototype.toString.call(o)==='[object Function]';
}

function contain(arr, item){
	var index = -1;
	if('indexOf' in arr){
		index = arr.indexOf(item);
	} else {
		for(var i=0, len=arr.length; i<len; i++){
			if(arr[i]===item){
				index = i;
				break;
			}
		}
	}
	return ~index;
}

function extend(obj, opts){
	if (!isObject(obj)) return obj;
	var source, prop;
	for(var i=2, length=arguments.length; i<length; i++){
		source = arguments[i];
		for(prop in source){
			if(opts.blackList && contain(opts.blackList, prop)){
				obj[prop] = source[prop];
			} else {
				var key = opts.variable || 'o';
				obj[key] = obj[key] || {};
				obj[key][prop] = source[prop];
			}
		}
	}
	return obj;
}
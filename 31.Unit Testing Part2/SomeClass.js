class Lodash {
	compact(array) {
		return array.filter(val => !!val);
	}
	groupBy(array, prop) {
		return array.reduce((acc, item) => {
			// const key = typeof prop === 'function' ? prop(item) : item[prop];\
			let key=""

			if(typeof prop==="function"){
				key= prop(item)
				//Math.floor(2.2)
			}else {
				console.log(typeof prop)
				key=item[prop]
				console.log(key)
				//"one"[length]
			}
			
			if(!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(item);
			return acc;
		}, {})
    }
	
}






module.exports = Lodash



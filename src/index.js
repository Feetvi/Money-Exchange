// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var res = {};
    // создаём объект с парами значений монет
    var values = {
    	'H': 50,
    	'Q': 25,
    	'D': 10,
    	'N': 5,
    	'P': 1
    };

    if (currency > 0 && currency < 10000) {    	
		// проходим по ключам, идём по убыванию 
		// следовательно получим минимальное кол-во монет для обмена
		for (var key in values) {
			// делим currency на значение key
			var temp = Math.floor(currency/values[key]);
			// заносим в результат
			if (temp > 0 && currency != 0) {
				res[key] = temp;								
			}
			// остаток от деления currency
			currency %= values[key];
		}

    } else if (currency > 10000) {
    	res.error = "You are rich, my friend! We don't have so much coins for exchange";
    }

    return res;

}

//console.log(makeExchange(123));
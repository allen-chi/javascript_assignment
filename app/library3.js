module.exports ={
	fizzBuzz:function(num){
		var answer =""
		if (num%3 === 0){
			answer +="Fizz"
		}

		if(num%5===0){
			answer += "Buzz"
		}

		if(!(num%5===0 || num%3 === 0)) {
			answer =num;
		}

		return answer;

	}

}
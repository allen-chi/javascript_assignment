module.exports ={
	findMinMax:function(arr){
		var min = arr[0];
		var max = arr[0];

		for(var i = 0; i<arr.length; i++){
			if (arr[i] > max)
				max = arr[i];
			if (arr[i] < min)
				min = arr[i];
		}
	if (max==min){
		var answer=[min];
	    return answer;
	}
		var answer=[min, max];
		return answer;
	}

}
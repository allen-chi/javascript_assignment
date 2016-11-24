module.exports ={
	aritGeo:function(arr){
		var arithemeticPattern;
		var geometricPattern;

    for (var i = 0; i< (arr.length - 2); i++)  
        if(!(arithemeticPattern = arr[i+1] - arr[i] == arr[i+2] - arr[i+1])) break; 

    if(arithemeticPattern)
    	return "Arithmetic";

    for (var i = 0; i< (arr.length - 2); i++)  
        if(!(geometricPattern = arr[i+1] / arr[i] == arr[i+2] / arr[i+1])) break;

    if(geometricPattern)
    	return "Geometric";

    if (arr.length<1)
    	return 0; 
	}

}
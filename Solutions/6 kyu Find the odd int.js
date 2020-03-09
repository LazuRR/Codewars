function findOdd(arr) {
    var result = {};
    for (var i = 0; i < arr.length; ++i)
    {
        var a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (var key in result)
    {if(result[key]%2===1)return key;}
}
console.log(findOdd([1,2,3,4,5,4,3,2,1]))


//OR const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
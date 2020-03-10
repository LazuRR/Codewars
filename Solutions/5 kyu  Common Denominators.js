const convertFrac = lst => {
  let arr = [],
    result = [];
  for (let i = 0; i < lst.length; i += 1) {
    arr.push(lst[i][1]);
  }
  let val = create(arr);
  for (let i = 0; i < arr.length; i += 1) {
    result.push((val * lst[i][0]) / lst[i][1], val);
  }
  let res = '';
  for(let i =0; i< result.length;i+=2){ 
    res+='('+result[i] + ',' + result[i+1]+')';
  }
  console.log(res)
  return res;

};  

const create = A => {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
};

convertFrac([
  [1, 2],
  [1, 3],
  [1, 4]
]);

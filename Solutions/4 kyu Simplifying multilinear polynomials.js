const simplify = poly =>{
    let arr = poly.split(/\+|-|^[0-9]/).filter(element => element !== ''),
    sym = poly.split(/[^,\+|-]+/g).filter(element => element !== '');
    console.log(arr.sort(function (a,b){
        return 
    }))
}

simplify('2ab-ba+c+z++a++d-ba')
 var recoverSecret = function(triplets) {
    let first=[],trio =[], count=1,set = new Set,out='';
    for(let i of triplets)for(let k of i)set.add(k); 
    triplets.forEach(x => {
        trio.push(x[0]+x[1]+x[2]);
        first.push(x[0]);
    }); 

    while(set.size!==0){
        for(let i of set){
            for(let el of trio){
                if (el.includes(i)){
                    if (el[0] === i) count+=0;
                    else count +=1;
                } 
            }
            if(count === 0){
                out+=i;
                for(let n =0;n<trio.length;n++){
                    if(trio[n].includes(i)){
                        if(trio[n].length>1)trio[n]= trio[n].slice(1,)
                        else trio[n] = ''
                    }
                }
                set.delete(i);
            }
            console.log(i +' : '+count+' ; '+ Array.from(set)) 
            count=0;           
        }
    } 
    return out;
}

triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

recoverSecret(triplets1);


function findOutlier(integers){
   
    let odd = 0, even =0;
    for(let i =0; i<3;i++){
        if(Math.abs(integers[i])%2===1)odd+=1;
        else even +=1;
    }
    for(let o of integers){
        if(even>odd){
        if(Math.abs(o)%2===1){return o;}}
        else{if(Math.abs(o)%2===0)return o;}
    }
}

console.log(findOutlier([176183287,-40269237,-42630389,85733425,137068507,-151904201,-129001765,20603349,
    86930789,-88777513,-149758175,-47211147,60379763,-112872705,149880139,114682801,126993651,-29970815,-111444359,
    -144931759,44317429,126350945,15216511,-43085207,120006947,195582438,-101816653,11212171,-138991587,-119280831,
    -154156061,7719191,165276791,-10564567,-184814765,-114600451,-6013283,188390129,95718993,-85657813,-42116349,
    72926789,-176835877,-24355885,98552245,-39822201]));
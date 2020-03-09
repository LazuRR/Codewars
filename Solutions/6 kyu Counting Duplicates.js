function duplicateCount(text){
   text = Array.from(text.toLowerCase()).sort();
   console.log(text)
   let count =0;
   for(let i = 0; i< text.length; i+=1){
      let ammount = 1, letter = text[i];
      while(letter === text[i+1]){
         ammount+=1;
         i+=1;
      }
      console.log(letter + ' occures ' + ammount +' times');
      if(ammount!==1)count+=1;
   }
   return count;
}

console.log(duplicateCount('letmedrivevlt'));
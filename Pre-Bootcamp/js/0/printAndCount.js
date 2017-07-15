var counter = 0;
for( i = 512; i <= 4096; i+=1){
  if(i % 5 == 0){
    console.log(i);
    counter++;
  }
}
console.log("Total multiples: " + counter);

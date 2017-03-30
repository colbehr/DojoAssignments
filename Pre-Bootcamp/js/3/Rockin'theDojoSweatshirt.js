function RockintheDojoSweatshirt (num) {
  if(num == 1){
    return 20;
  }else if(num == 2){
    return 37;
  } else if(num == 3){
    return 49;
  }else if(num >= 4){
    return Math.ceil(20 * num - ((num / 35) * num));
  }
}

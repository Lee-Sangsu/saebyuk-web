export function getRandomLightColor():string {
    var letters = '6789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
};

export function getBooksConditionColor(isOverDue:boolean,  returned_at:Date|null):string{
  if (isOverDue) {
    return "#FF0000";
  } else {
    if (returned_at) {
      //반납 된 경우
      return "#5CB8E1";
    } else{
      //반납되지 않은 경우
      return "#FABA00";
    }  
  }
}
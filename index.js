function saturdayFun(fun){
  if (fun){
    return `This Saturday, I want to ${fun}!`;
  } else {
    return 'This Saturday, I want to roller-skate!';
  }
}

function mondayWork(code){
  if (code){
    return `This Monday, I will ${code}.`;
  } else {
    return 'This Monday, I will go to the office.';
  }
}

function wrapAdjective(wrapFlair = '*'){
  const newThing = function(adjective = 'special'){
    return `You are ${wrapFlair}${adjective}${wrapFlair}!`;

  }
  return newThing
}






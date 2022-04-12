function scuberGreetingForFeet(ride) {
  let result;
  if (ride < 400) {
    result = 'This one is on me!';
  }
  else if ((400 < ride) && (ride < 2000)) {
    result = 'That will be twenty bucks.';
  }
  else if ((ride > 2000) && (ride < 2500)) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (ride > 2500) {
    result = 'No can do.';
  }
 return result;
}

function ternaryCheckCity(city){
  let result;
  // if (city === 'NYC') {
  //   result = 'Ok, sounds good.';
  // }
  // else { 
  //   result = 'No go.'
  // }
  city === 'NYC'? result = 'Ok, sounds good.': result = 'No go.'
    return result;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much."; 
    case 'not as generous':
      return "Thank you.";    
  default:
    return "Bye.";
  }
}
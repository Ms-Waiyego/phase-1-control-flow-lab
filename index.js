function scuberGreetingForFeet(sample){
  const feet = 199
if (sample <=400) {
  return (`This one is on me!`)
}
else if (sample>2000 && sample <2500){
  return (`I will gladly take your thirty bucks.`)
}
else if (sample <= 2501){
  return (`No can do.`)
}
}
function ternaryCheckCity(city){
  if (city === 'NYC'){
  return "Ok, sounds good." ;
  }
 else(city === 'Pittsburgh')
  return "No go.";
 
}


function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
    return "Thank you so much.";
    break;
    case "not as generous":
    return "Thank you.";
    break;
    default:
      return "Bye.";
  }
}
function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  const hours = time [0] + time [1];
  console.log(hours)
  const minutes  = time [3] + time [4];
  console.log(minutes);

  let totalMinutes= parseInt(minutes)+ minutesToAdd;
  console.log(totalMinutes);

  let totalMinutes = parseInt(hours) + Math.floor (totalMinutes / 60);
  totalMinutes % =60;

  totalHours = ((totalHours - 1)%12) +1 ;

  return `${totalHours} : ${totoalMinutes}`;

}

module.exports = clockMinuteAdder

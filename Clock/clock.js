function getTime(today) {
    const ampm = today.getHours() > 12 ? 'pm' : 'am';
    const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
    const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const seconds = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

    return `${hours} ${ampm} : ${minutes} : ${seconds}`;
}

function getDay(today) {
    return [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][today.getDay()];
  }
  
  const d = new Date();
  console.log(`Today is ${getDay(d)}`);
  console.log(`Current time is ${getTime(d)}`);
  
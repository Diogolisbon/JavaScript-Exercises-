function daysUntilChristmas() {
    const today = new Date();
    const difference = new Date(today.getFullYear(), 11, 25) - new Date();
    const oneDayInNilliseconds = 1000 * 3600 * 24;
  
    return Math.ceil(difference / oneDayInNilliseconds);
  }
  
  console.log(daysUntilChristmas());
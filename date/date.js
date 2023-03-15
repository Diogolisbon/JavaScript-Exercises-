function getDate(date, format, separator) {
    const data = {
      yyyy: today.getFullYear(),
      mm: today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth(),
      dd: today.getDate() < 10 ? `0${today.getDate()}` : today.getDate(),
    };
  
    return format
      .split(separator)
      .map((char) => data[char])
      .join(separator);
  }
  const today = new Date();
  
  console.log(getDate(today, 'mm-dd-yyyy', '-'));
  console.log(getDate(today, 'mm/dd/yyyy', '/'));
  console.log(getDate(today, 'dd-mm-yyyy', '-'));
  console.log(getDate(today, 'dd/mm/yyyy', '/'));
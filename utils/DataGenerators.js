export class DataGenerator {
  static generateEmailNoSpecialChars() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `roy${year}${month}${day}${hours}${minutes}${seconds}@example.com`;
  }

  static generateNZPhoneNumberLocal() {
    let number = '211';
    for (let i = 0; i < 5; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  }

  static generateNameWithRoy() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomChars = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomChars += letters[randomIndex];
    }
    return `roy${randomChars}`;
  }

  static generateFirstAndLastName() {
   const now = new Date();
  const timeString = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  let base36 = parseInt(timeString).toString(36);
  let onlyChars = base36.replace(/[0-9]/g, '');
  while (onlyChars.length < 8) {
    onlyChars += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  return `roy${onlyChars}`;
}}

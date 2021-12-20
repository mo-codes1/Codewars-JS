function printer_error(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count + "/" + s.length;
}




module.exports = printer_error
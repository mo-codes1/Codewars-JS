function withDraw(n) {
  
  let change = [0,0,0]
  
  while (n >= 20){
    if (n % 50 === 0){break}
    n = n - 20
    change[2]++
  }
  while (n >= 100){
    n = n - 100
    change[0]++
  }
  while (n >= 50){
    n = n - 50
    change[1]++
  }
  return change
}

module.exports = withDraw
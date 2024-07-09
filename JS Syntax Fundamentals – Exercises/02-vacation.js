function vacation(sum, type, day) {
    const isFriday = day === "Friday";
    const isSaturday = day === "Saturday";
    const isSunday = day === "Sunday";
  
    const isStudentsGroup = type === "Students";
    const isBusinessGroup = type === "Business";
    const isRegularGroup = type === "Regular";
  
    let price = 0;
  
    if (isFriday) {
      if (isStudentsGroup) {
        price += 8.45;
      } else if (isBusinessGroup) {
        price += 10.9;
      } else if (isRegularGroup) {
        price += 15;
      }
    } else if (isSaturday) {
      if (isStudentsGroup) {
        price += 9.8;
      } else if (isBusinessGroup) {
        price += 15.6;
      } else if (isRegularGroup) {
        price += 20;
      }
    } else if (isSunday) {
      if (isStudentsGroup) {
        price += 10.46;
      } else if (isBusinessGroup) {
        price += 16;
      } else if (isRegularGroup) {
        price += 22.5;
      }
    }
  
    const totalSumWithoutDiscount = sum * price;
  
    const totalSumWithDiscount =
      isStudentsGroup && sum >= 30
        ? totalSumWithoutDiscount * 0.85
        : isBusinessGroup && sum >= 100
        ? (sum - 10) * price
        : isRegularGroup && sum >= 10 && sum <= 20
        ? totalSumWithoutDiscount * 0.95
        : totalSumWithoutDiscount;
  
    console.log(`Total price: ${totalSumWithDiscount.toFixed(2)}`);
  }
  vacation(40,

    "Regular",
    
    "Saturday")
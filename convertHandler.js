function ConvertHandler() {
  
  this.getNum = function(input, index) {
    let result = input.slice(0, index);
    
    return result;
  };
  
  this.getUnit = function(input, index) {
    let result = input.slice(index, input.length);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;

    //added backwards conversion from l to gal
    const lToGal = 0.26417;
    
    const lbsToKg = 0.453592;

    //added backwards conversion from kg to lbs(pounds)
    const kgToLbs = 2.20462;
    
    const miToKm = 1.60934;

    //added backwards conversion from km to mi
    const kmToMi = 0.62137;
    
    let result;

    if(initUnit === 'gal') {
      result = initNum * galToL;
    } else if (initUnit === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit === 'mi') {
      result = initNum * miToKm;
    } else if (initUnit === 'l') {
      result = initNum * lToGal;
    } else if (initUnit === 'kg') {
      result = initNum * kgToLbs;
    } else if (initUnit === 'km') {
      result = initNum * kmToMi;    
    } else {
      result = 'invalid';
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
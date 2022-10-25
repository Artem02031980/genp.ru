function calcButtonClick() {
    
    var doc = document,
        ableCalcMetters  = doc.getElementById('calcMetters').value,
        ableCalcHeight  = doc.getElementById('calcHeight').value,
        able = ableCalcMetters*ableCalcHeight,
        ablePrice,
        typeB  = doc.getElementById('typeBuildings').value;
    
    (able >= 50000)                 ? ablePrice = 10:
    (able >= 30000 && able < 50000) ? ablePrice = 15:
    (able >= 10000 && able < 30000) ? ablePrice = 20:
    (able >= 5000 && able < 10000)  ? ablePrice = 25:
    (able >= 3000 && able < 5000)   ? ablePrice = 30:
								      ablePrice = 40;

//    if (able >= 50000){
//            ablePrice = 10;
//    }else if (able >= 30000 && able < 50000){
//            ablePrice = 15;
//    }else if (able >= 10000 && able < 30000){
//            ablePrice = 20;
//    }else if (able >= 5000 && able < 10000){
//            ablePrice = 25;
//    }else if (able >= 3000 && able < 5000){
//            ablePrice = 30;
//    }else{
//            ablePrice = 40;
//    }; 
    
    switch (typeB) {
           case "manufacture":
              price = 1.2*ablePrice;
              break
           case "stock":
              price = ablePrice;
              break
           case "public":
              price = 1.3*ablePrice;
              break
           case "flat":
              price = 1.5*ablePrice;
              break
        };
        
    if (ableCalcMetters > 0 && ableCalcHeight > 0){
        calcEnterArguments.style.display = 'none';
        calcEnterArgumentsHidden.style.display = 'block';        
        var finalValue = able*price;
        doc.getElementById('finalPrice').innerHTML = finalValue +" рублей";     
    } else {        
        validationEnter.style.display = 'block';
    };    
    
};

function calcButtonClickReset(){   
    calcEnterArgumentsHidden.style.display = 'none';
    calcEnterArguments.style.display = 'block';
    location.reload();
};



function convStr(str){
    let convToArray = str.split("");
    let reverseArray = convToArray.reverse();
    let convToStr = reverseArray.join("");

    console.log(convToStr);
}

convStr('howdy');

function evod(num) {
    let x = num % 2;
    if (x == 0){
        console.log("odd"); // ah yes an odd number, anything cleanly divisible by two
    } else{
        console.log("even") // and anything else is even
    };
};
evod(8);
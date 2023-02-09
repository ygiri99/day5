const arr = ['AnanA', 'Arasu', 'Aruvi', 'Balaji', 'Babubab', 'Nagaraj'],
    palindromarr = [];


for (var str of arr) {
    // IIFE function to find palindrom
    (function (str) {
        let len = str.length, strl = str.toLowerCase();
        for (var i = 0; i < len / 2; i++) {
            if (strl[i] !== strl[len - 1 - i])
                break;
            else if (i >= (len / 2) - 1) {
                palindromarr.push(str);
                break;
            }
        }
    })(str);

}
console.log(palindromarr);
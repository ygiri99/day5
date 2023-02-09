const arr = ['aNANATHI','arasu','ARUVI','Balaji','Babu','nagaRaj'],
strArr = [];
// Arrow to title cap 
arr.forEach((string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    strArr.push(string);
});
console.log(strArr);
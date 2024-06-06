let arr1 = [3,1,3,4,2];

arr1.sort((a, b) => a - b);

console.log(arr1);


for (let i= 0; i< arr1.length - 1; i++) {
    if (arr1[i] === arr1[i+ 1]) {
        console.log(arr1[i]);
        break;
    }
}
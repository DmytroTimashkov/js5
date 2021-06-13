// for(let i=1;i<=100;++i){
//     console.log(i);
// }
// for(let i=100;i>=1;--i){
//     console.log(i);
// }
// for(let i=1;i<=100;++i){
//     if(i % 2 == 1) continue;
//     console.log(i);
// }
const arr = [1, 2, 3, 4, 5];
let sum = 0;
// for(let i = 0;i < arr.length; i++){
//       sum +=arr[i]
// }
// console.log(sum);
for (let i = 0 ; i < arr.length; i++){
   sum += Math.pow(arr[i],2);


}
console.log(sum)
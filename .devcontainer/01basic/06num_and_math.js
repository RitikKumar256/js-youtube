const score =400;
const balance=new Number(100);
//console.log(balance);

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));

const othernumber=123.8966;
//console.log(othernumber.toPrecision(3));

const hundreds=1000000;
//console.log(hundreds.toLocaleString('en-IN'));

///======Math====//
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(46.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,7));
// console.log(Math.max(4,3,2,8,1));

// math.random only gives value between 0 and 1 eg=0,0.1,.....
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

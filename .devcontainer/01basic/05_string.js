const name="Ritik";
const repocount=50;
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
const gamename=new String('ritik-kumar-ji');

console.log(gamename[0]);
//here we use two__(underscore)
console.log(gamename.__proto__);
    console.log(gamename.length);
    console.log(gamename.toUpperCase());
    console.log(gamename.charAt(2));
    console.log(gamename.indexOf('t'));

    const newstring=gamename.substring(0,4);
    console.log(newstring);

    //in slice method you use  negative value
    const anothername=gamename.slice(-4,4);
    console.log(anothername);

    const newstringone="      Ritik      ";
    console.log(newstringone);
    console.log(newstringone.trim());


    const url='https://ritik.com/ritik%26kumar';
    console.log(url.replace('%26','-'));

    console.log(gamename.split('-')); 
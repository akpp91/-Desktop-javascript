const users = 
[
    {firstName: "akshay", lastName: "saini", age: 26 }, 
    {firstName: "donald", lastName: "trump", age: 75 }, 
    {firstName: "elon", lastName: "musk", age: 50 },
    {firstName: "deepika", lastName: "padukone", age: 26},
];

const l =users.reduce((a,c)=>{
        if (a[c.age]) {
            a[c.age] = ++a[c.age];
        } 
        else 
        {
            a[c.age] = 1;    
        }
        return a;
},{});

console.log(l);
const p1 = new Promise((resolve, reject) =>{
setTimeout(() =>{ resolve("p1 resolved")} ,20000)  
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{ resolve("p2 resolved")} ,40000)  
    })

// async function apromise0() 
// {   
    

//     p.then((p) =>{ console.log(p)});
    
// }

async function apromise() 
{   
    console.log("printing started");

    const value1 = await p1;
    console.log(value1);
    console.log(" P1 printing ENDED  ");

    const value2 = await p2;
    console.log(value2);
    console.log(" P2 printing ENDED  ");
}



apromise()

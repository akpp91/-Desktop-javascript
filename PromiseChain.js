const cart =["akshay", "patil"]

const pr = createOreder(cart);

pr
.then((data)=>
        {   
            "resolverd" + console.log(data)
            return "proceedtopayamrn"
        })
.then((pinfo)=> {
                    return vadiatedata(pinfo);
                })
.then((result)=>{console.log("result is:"+result)})
.catch((err)=>{"error"+console.log(err)});


function createOreder(cart)
{

    const pr = new Promise((resolve, reject) =>
    {
        if (!cartValidate(cart)) 
        {
            const err = new Error("rejected");
            reject(err);
        }

        const data="resolverd";

        resolve(data);


    });
    return pr;

}


function cartValidate(card)
{
    return true;
}

function vadiatedata(pinfo)
{
    return "validated";
}
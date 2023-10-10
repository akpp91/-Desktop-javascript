function loop() {
    debugger;

    for (let index = 0; index < 5; index++) 
    {
        debugger;
        setTimeout(() => {
            debugger;

            console.log(index);
        }, index * 1000);    
        
    }
}

loop();
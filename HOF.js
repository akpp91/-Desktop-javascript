const radius=[2,3,4,5]


const carea= function (r) {
    const area = Math.PI * r * r;
    return area;
}


const area= function (radius , logic)
{
    const arr= [];

    for (let index = 0; index < radius.length; index++) {
        arr.push(logic(radius[index]));
    }
    return arr;
}

const circumpherence= function (radius)
{
    const arr= [];

    for (let index = 0; index < radius.length; index++) {
        arr.push(2 * Math.PI * radius[index] );
    }
    return arr;
}

console.log("area: "+area(radius, carea));

console.log("map area: "+radius.map(carea));

console.log("circumpherence: "+circumpherence(radius));
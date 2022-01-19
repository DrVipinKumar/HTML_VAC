var data=[12,34,45,67,78,12,13,14,2]
var names=["A","C","B","F","Z","W","Y"]
console.log(data.sort((x,y)=>x-y))
console.log(data.sort((a,b)=>b-a))
//console.log(names.sort()
console.log(data.reduce((a,b)=>a+b))
console.log(data.map((a)=>a*a*a))
console.log(data.map(function (a){
    return a*a;
}))
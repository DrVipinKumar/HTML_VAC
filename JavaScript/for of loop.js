var data1=[12,34,56,78,12,345]
data1.forEach((x)=>console.log(x))
// for (var i=0;i<data.length;i++)
// {
//     console.log(data[i])
// }
// for (value in data)
// {
//     console.log(data[value])
// }
var data ={
    num1:12,num2:45,num3:46,num4:78
}
for ( [key,value] of Object.entries(data))
{
    console.log(key)
}

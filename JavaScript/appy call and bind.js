function display(mobile,place){
  console.log("Name="+this.name)
  console.log("Age="+this.age)
  console.log("Mobile="+mobile)
  console.log("Place="+place)
}
let info={
    name:"Amit Kumar",
    age:40
}
display.call(info,"909898778","KIET")
display.apply(info,["909898778","KIET"])
var displayinfo=display.bind(info,"909898778","KIET")
console.log(displayinfo())
console.log("Welcome")
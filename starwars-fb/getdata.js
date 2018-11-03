var firebase=require("firebase")
var ref= new Firebase ("https://rkundalya-app2.firebaseio.com/web/data")
ref.on("child_added",function(data){
var teamName= data.key()
var ref2= new Firebase ("https://rkundalya-app2.firebaseio.com/web/data"+teamName)
 ref2.orderByChild("salary").startAt(1000000).on("child_added",function(data){
console.log(data.key())
 })
})
const { mapValues, isError } = require("lodash");
const _ = require("lodash");
var users =[
{
id:1,
    firstName : "John",
lastName :"Doe",
age:24,
gender:" male"


},
{
    id:2,
firstName : "Jane",
lastName :"Doe",
age:5,
gender: "female"
    
    
    },
{
    id:3,
firstName : "Jim",
lastName :"Carrey",
age:54,
gender: "male"
        
        
        },
 {
    id:4,
firstName : "Kate",
lastName :"Winslet",
 age:40,
gender: "female"
            
 }
                        


]

function getUsers()
{
    var output = "";
  for(var i=0; i < users.length; i++)
  {
    for(var j=0; i < users[i].length; i++)
    {    
       return outout=(users[i][j]);
    }
}
  
}
function findUser(lastName, gender)
{
try{
    var user = users.find( ({ id}) => id === 1 );
}
catch (error){

    return user;
    console.log();
}
var iFindUser;


}
getUser
findUser();
module.exports = findUser;
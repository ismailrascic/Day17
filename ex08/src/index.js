const { mapValues, isError } = require("lodash");
const _ = require("lodash");
var users =[
{
firstName : "John",
lastName :"Doe",
age:24,
gender:" male"


},
{
firstName : "Jane",
lastName :"Doe",
age:5,
gender: "female"
    
    
    },
{
firstName : "Jim",
lastName :"Carrey",
age:54,
gender: "male"
        
        
        },
 {
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
    var user = users.find( ({ name }) => name === 'John' );
}
catch (error){

    return;
    console.log();
}
var iFindUser;


}
getUser
findUser();
module.exports = findUser;
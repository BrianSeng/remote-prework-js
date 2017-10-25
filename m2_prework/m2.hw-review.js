var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

var person2 = new Object();
person2.firstName = "Jane";
person2.lastName = "Doe";
person2.age = "50";
person2.eyeColor = "blue";

$(".someClass").text();
$("#someId").html("<p>Changing the HTML on the page!</p>");

if (person.age > person2.age)
{
    console.log("John is older than Jane");
}
else if(person.age === person2.age)
{
    console.log("They're the same");
}
else
{
    console.log("This happens if nothing else did.")
}

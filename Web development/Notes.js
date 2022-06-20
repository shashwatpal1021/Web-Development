// const qContainer=document.getElementById("questionsContainer");
// const qElement=document.getElementById('question');
// const answerButtons=document.getElementById('answers');
// const startButton=document.getElementById('startButton');
// let qNumber;


// startButton.addEventListener('click',startGame);

// function startGame(){
//     startButton.classList.add('hide');
//     answerButtons.classList.remove('hide');
//     qNumber=0;
//     qContainer.classList.remove('hide');
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
//     showQuestion(questions[qNumber])
// }

// function showQuestion(question){
//     qElement.innerHTML=question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerHTML=ans.text;
//         button.classList.add('btn');
//         if (ans.correct){
//             button.dataset.correct=ans.correct;
//         }
//         button.addEventListener('click',selectAnswer);
//         answerButtons.appendChild(button);
//     });
// }

// function selectAnswer(e){
//     const selectedButton = e.target;
//     if(!selectedButton.dataset.correct){
//         document.getElementById('answerButtons').style.color='red';
//     }else{
//         document.getElementById('answerButtons').style.color='green';
//     }if (qNumber != questions.length-1){
//         qNumber++;
//         showQuestion(questions[qNumber]);
//     }
// }


// const questions = [
//     {
//         question:"Inside which HTML element do we put the javaScript ?",
//         answers:[
//             {text:"javaScript",correct:false},
//             {text:"script",correct:true},
//             {text:"js",correct:false},
//             {text:"jquery",correct:false}
//         ]
//     },
//     {
//         question:"Inside which HTML element do we put the javaScript ?",
//         answers:[
//             {text:"javaScript",correct:false},
//             {text:"script",correct:true},
//             {text:"js",correct:false},
//             {text:"jquery",correct:false}
//         ]
//     },
// ]

//console.log(9-'5');
// console.log('9'-'5');
// console.log("rich"-"puri");

// console.log(+true)
// console.log(!'Lydia')


// const bird = {
//   	size: 'small',
// 	};

// const mouse = {
//   		name: 'Mickey',
//   		small: true,
// 	}
    
// console.log(mouse[bird["size"]]);

// var element = document.createElement('p');
// element.textContent = "Hello, World";
// document.body.appendChild(element);


// var canvas=document.createElement('canvas');
// canvas.width=500;
// canvas.height=250;

// var ctx=canvas.getContext('2d');
// ctx.font='30px Cursive';
// ctx.fillText('hello world!',50,50);

// document.body.appendChild(canvas);


// var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg.width = 500;
// svg.height = 50;

// var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
// text.setAttribute('x', '0');
// text.setAttribute('y', '50');
// text.style.fontFamily = 'Times New Roman';
// text.style.fontSize = '50';
// text.textContent = 'Hello world!';
// svg.appendChild(text);
// document.body.appendChild(svg);


// var myNull=null  //null

// var myArray=[] //empty array

// var favoriteFruits = ["apple", "orange", "strawberry"];
// var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
// var employees = ["Billy", "Bob", "Joe"];
// var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
// var randomVariables = [2, "any type works", undefined, null, true, 2.51];

// myArray = ["zero", "one", "two"];
// window.alert(myArray[0]);

// myArray = ["John Doe", "Billy"];
// elementNumber=1;
// window.alert(myArray[elementNumber]);


// myobj={};
// john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
// billy = {
//  firstname: "Billy",
//  lastname: undefined,
//  fullname: "Billy"
// };

// window.alert(john.fullname); // John Doe
// window.alert(billy.firstname); // Billy

// isNaN(NaN); // true
// isNaN(1); // false: 1 is a number
// isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
// isNaN(Infinity); // false: Infinity is a number
// isNaN(true); // false: converted to 1, which is a number
// isNaN(false); // false: converted to 0, which is a number
// isNaN(null); // false: converted to 0, which is a number
// isNaN(""); // false: converted to 0, which is a number
// isNaN(" "); // false: converted to 0, which is a number
// isNaN("45.3"); // false: string representing a number, converted to 45.3
// isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
// isNaN("Infinity"); // false: string representing a number, converted to Infinity
// isNaN(new Date); // false: Date object, converted to milliseconds since epoch
// isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
// isNaN("hello"); // true : conversion fails, no digits at all
// isNaN(undefined); // true : converted to NaN
// isNaN(); // true : converted to NaN (implicitly undefined)
// isNaN(function(){}); // true : conversion fails
// isNaN({}); // true : conversion fails
// isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number



// var personArr = [ {
//     "personId": 123,
//     "name": "Jhon",
//     "city": "Melbourne",
//     "phoneNo": "1234567890"
//    },{
//     "personId": 124,
//     "name": "Amelia",
//     "city": "Sydney",
//     "phoneNo": "1234567890"
//    },{
//     "personId": 125,
//     "name": "Emily",
//     "city": "Perth",
//     "phoneNo": "1234567890"
//    },{
//     "personId": 126,
//     "name": "Abraham",
//     "city": "Perth",
//     "phoneNo": "1234567890"
//    }];
//    console.table(personArr, ['name', 'personId','city']);


// x=123;
// console(x);
// var x;


// var a=function(p){
//     var n=p;
//     this.getn=function(){
//         return n;
//     }
// }

// var a=new a("shashwat");
// console.log(a.getn())


// let x=document.getElementById('a');
// x.innerHTML="hello";
// let y=document.getElementsByClassName('b');
// y.innerHTML="classOne";
// document.getElementsByTagName('p').style.color="red";
// document.querySelector('#a').innerHTML="queryselector";
// document.querySelectorAll('.p').style.color="green";


// const findDupli=(arr)=>{
//     let sorted=arr.sort();
//     let res=[];
//     for(let i=0;i<sorted.length-1;i++){
//         if(sorted[i+1]==sorted[i]){
//             res.push(sorted[i])
//         }
//     }
//     return res;
// }

// arr=[1,2,3,4,4,5,5,7,8];

// console.log(findDupli(arr));

// const findDupli=(arr)=>{
//     let res=[];
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 res.push(arr[i])
//             }
//         }
//     }
//     return res;
// }


// const findDupli=(arr)=>{
//     let Map={};
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         if (Map[arr[i]] == arr[i]){
//             Map[arr[i]]=arr[i];
//         }
//     }
//     for(let i=0;i<Map.length;i++){
//         if(Map[arr[i]]>1){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// arr=[1,2,3,4,4,5,5,7,8];

// console.log(findDupli(arr));


// Arrow function

// var greet=(name)=>{
//     return `Hey ${name}!`;
// }

// console.log(greet("shashwat"))


// average

// var avg=(arr)=>{
//     let total=0;
//     for(let i=0;i<arr.length;i++){
//         total+=arr[i]
//     }
//     return total/arr.length;
// }

// let arr=[1,2,3,4,5,6];
// console.log(avg(arr));



// closures


// closures raise your hand

// let countClicks = 0;
// button.addEventListener('click',function clickhandler(){
//     countClicks++;
// })


// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// function createIncrement() {
//     let count = 0;
//     function increment() { 
//       count++;
//     }
//     let message = `Count is ${count}`;
//     function log() {
//       console.log(message);
//     }
//     return [increment, log];
//   }
//   const [increment, log] = createIncrement();
//   increment(); 
//   increment(); 
//   increment(); 
//   log();


// function multiply(number1, number2) {
//     if (number2 !== undefined) {
//       return number1 * number2;
//     }
//     return function doMultiply(number2) {
//       return number1 * number2;
//     };
//   }
//   console.log(multiply(4, 5)); // => 20


// const double = multiply(2);
// console.log(double(5));


// callback

// function a(name) {
//     alert('Hello ' + name);
//   }
  
// function b(callback) {
//     var name = 'shashwat';
//     callback(name);
//   }
  
//  b(a);
  
// function a(){
//     console.log('hi');
// }
// setTimeout(a,3000);
// console.log("hello");



// a=10;
// console.log(a);
// var a;



// objects

// const student = {
//     firstname:"shashwat",
//     class:10,
//     marks:{
//         math:70,
//         phy:90
//     }
// };
// console.log(student.firstname);
// console.log(student["firstname"]);
// console.log(student.marks.phy);


// constructor

// function a(){
//     this.name="shash",
//     this.age=32

//     this.greet=function(){
//         console.log("hello "+this.name);
//     }
// }

// const b=new a();
// console.log(a.name);
// b.greet()


// program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John')

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);







// const person = {
//     age:23,
//     firstname:"shashwat",
//     palindrom:function(){
//         let i=0;
//         let j=firstname.length-1;
//         while(i<=j){

//             if (fistname[i]==firstname[j]){
//                 i++;
//                 j--;
//             }else{
//                 return false;
//             }
//             return true;
//         }
//     }
// }

// console(person.palindrom())



// API for get requests
// let fetchRes = fetch(
//     "https://jsonplaceholder.typicode.com/todos/1");
//             // fetchRes is the promise to resolve
//             // it by using.then() method
//             fetchRes.then(res =>
//                 res.json()).then(d => {
//                     console.log(d)
//                 })


// user = {
//     "name": "Geeks for Geeks",
//     "age": "23"
// }
// // Options to be given as parameter
// // in fetch for making requests
// // other then GET
// let options = {
//     method: 'POST',
//     headers: {
//         'Content-Type':
//             'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// }
// // Fake api for making post requests
// let fetchRes = fetch(
// "http://dummy.restapiexample.com/api/v1/create",
//                                 options);
// fetchRes.then(res =>
//     res.json()).then(d => {
//         console.log(d)
//     })

// // api url
// const api_url =
// 	"https://employeedetails.free.beeceptor.com/my/api/path";

// // Defining async function
// async function getapi(url) {
	
// 	// Storing response
// 	const response = await fetch(url);
	
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;
	
// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }
// const data=


// async function getUsers(){
//     let url = 'users.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     }catch(error){
//         console.log(error);
//     }
// }


// async function renderUsers() {
//     let users = await getUsers();
//     let html = "";
//     users.forEach(user => {
//         let show = `<div class="user">
//                                 <img src="${user.profileURL}">
//                                 <h2>${user.firstName}${user.lastName}</h2>
//                                 <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                             </div>`;
//                 html += show;
//     });
//     let container = document.querySelector('.container');
//     container.innerHTML=html;
// }

// const data=[{
//     "username": "john",
//     "firstName": "John",
//     "lastName": "Doe",
//     "gender": "Male",
//     "profileURL": "img/male.png",
//     "email": "john.doe@example.com"
// },
// {
//     "username": "jane",
//     "firstName": "Jane",
//     "lastName": "Doe",
//     "gender": "Female",
//     "profileURL": "img/female.png",
//     "email": "jane.doe@example.com"
// }
// ]
// function show(){
//     for (let i=0;i<data.length;i++){
//         let=html;
//         let s = `<div class="user">
//                                 <h2>${data[i].firstName}${data[i].lastName}</h2>
//                                 <div class="email"><a href="email:${data[i].email}">${data[i].email}</a></div>
//                             </div>`;
//                 html += s;
//     }
//     let container = document.querySelector('.container');
//     container.innerHTML=html;
// }
// show()



// fetch('url', {
//     Method: 'POST',
//     Headers: {
//       Accept: 'application.json',
//       'Content-Type': 'application/json'
//     },
//     Body: body,
//     Cache: 'default'
//   })

// // Chapter # 21-25 Question # 1
// var first_name = prompt('Enter your first name:');
// var last_name = prompt('Enter your last name:');
// alert(`Assalam-u-Alaikum, ${first_name} ${last_name}!`);
// document.write(`Assalam-u-ALaikum, ${first_name} ${last_name}!`);



// Chapter # 21-25 Question # 2
// var mobile_model = prompt('Enter your Favourite Mobile Model:');
// document.write(`My favourite mobile is: ${mobile_model} <br> Length of the string:  ${mobile_model.length}`);



// Chapter # 21-25 Question # 3
// var string = prompt('Enter any word');
// var letter = prompt('Type a letter which is in previous Input');
// var pp = string.indexOf(letter);
// document.write(`String: ${string} <br> Index of ${letter}: ${pp}`);



// Chapter # 21-25 Question # 4
// var string = prompt('Enter any word'); 
// var letter = prompt('Type a letter which is in previous Input'); 
// var pp = string.lastIndexOf(letter);
// document.write(`String: ${string} <br> Last index of ${letter}: ${pp}`);



// Chapter # 21-25 Question # 5
// var string = prompt('Enter any word'); 
// var pp = string.slice(3,4); 
// document.write(`String: ${string} <br> Character at Index 3: ${pp}`);



// Chapter # 21-25 Question # 6
// var first_name = prompt('Enter your first name:');
// var last_name = prompt('Enter your last name:');
// alert("Assalam-u-Alaikum, "+first_name.concat(" "+last_name)+"!");
// document.write("Assalam-u-Alaikum, "+first_name.concat(" "+last_name)+"!");



// Chapter # 21-25 Question # 7
// var city1 = "Hyderabad";
// document.write(`City: ${city1} <br> After Replacement: ${city1.replace("Hyder","Islam")} `);



// Chapter # 21-25 Question # 8
// var text = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(`${text.replace(/and/g,"&")}`);



// Chapter # 21-25 Question # 9                              
// var value = "472";
// document.write(`Value: ${value} <br> Type: ${typeof(value)} <br>`);
// var convert = parseInt(value);
// document.write(`Value: ${value} <br> Type: ${typeof(convert)}`);



// Chapter # 21-25 Question # 10                                 
// var input = prompt('Enter any word to capatalize:');
// var capital = input.toUpperCase();
// document.write(`User input: ${input} <br>`);
// document.write(`Upper Case: ${capital}`);



// Chapter # 21-25 Question # 11
// var input = prompt('Enter any word to see in Title Case:');
// var first_letter = input.slice(0,1);
// first_letter = first_letter.toUpperCase();
// var rest_letters = input.slice(1);
// var capital = first_letter+rest_letters; 
// document.write(`User input: ${input} <br>`);
// document.write(`Title Case: ${capital} <br>`); 
// OR
// var capital1 = input.charAt(0).toUpperCase()+input.slice(1);
// document.write(`${capital1}`);



// Chapter # 21-25 Question # 12
// var num = 33.56;
// num = num.toString();
// var dot = num.replace(".",""); 
// document.write(`Number: ${num} <br> Result: ${dot}`);



// Chapter # 21-25 Question # 13                                            //not done
// var username = prompt('Enter username:');
//     if(username === '@' || username === '.' || username === ','  || username === '!'  ){
//         alert(`Please enter a valid username`);
//     }
//     else{
//         document.write("Username: "+username);
//     }



// Chapter # 21-25 Question # 14                                           
// var array = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var user_input = prompt('Enter the bakery item;');
// user_input = user_input.toLowerCase();

// function check(array) {
//     return array == user_input;
// }

// var result = array.filter(check);
// var result = array.find(check);
// if(result == user_input)
// {
//     result = result.charAt(0).toUpperCase()+result.slice(1);
//     document.write(`${result} is <b>available</b> at index ${array.indexOf(user_input)+1}  in our bakery.`);    
// }
// else{
//     document.write(`We are sorry. ${user_input} is <b>not available</b> in our bakery.`);
// }  

   

// Chapter # 21-25 Question # 16                                      
// var password = prompt('Enter your password:');
// var regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
// var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// document.write(`Enter Password: ${password} <br>`)
// if(regex.test(password))
// {
//         if (isNaN(parseInt(password[0]))) {
//             document.write("Password is Valid");
//           } else {
//             document.write("Password can not begin with a number. <br>");
//             document.write("Please Enter a valid Password.");;
//           }
// }
// else{
//     document.write("Invalid Password");
// }



// Chapter # 21-25 Question # 16                                        //not done with using split method
// var name = "university of Karachi";
// for(var i = 0; i < name.length; i++)
// {
//     document.write(`${name.charAt(i)} <br>`);
// }
// var result = name.split(" ");



// Chapter # 21-25 Question # 17
// var name = "Pakistan";
// var length = name.length;
// var last_char = name.slice(length-1,length);
// document.write(last_char);



// Chapter # 21-25 Question # 18
// var text = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
// document.write(`Text: ${text} <br>`);
// text = text.toLowerCase();
// var find = "the";
// var re = new RegExp(find, 'g');
// var length = text.match(/the/g).length;
// ======OR======
// var length = text.match(re).length;
// document.write(`There are ${length} occurrence(s) of the word "${find}"`);
// ======OR======
// var find = 'the';
// var abc = text.split(find).length-1;
// document.write(`There are ${abc} occurrence(s) of the word "${find}".`);



// Chapter # 26-30 Question # 1
// var number = (prompt("Enter a positive Number: 3.45214"));
// var round_off = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write(`Number: ${number} <br>`);
// document.write(`Round Off Value: ${round_off} <br>`);
// document.write(`Floor Value: ${floor} <br>`);
// document.write(`Ceil Value: ${ceil} <br>`);



// Chapter # 26-30 Question # 2
// var number = (prompt("Enter a negative Number: -2.673"));
// var round_off = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write(`Number: ${number} <br>`);
// document.write(`Round Off Value: ${round_off} <br>`);
// document.write(`Floor Value: ${floor} <br>`);
// document.write(`Ceil Value: ${ceil} <br>`);



// Chapter # 26-30 Question # 3
// var absolute_value = prompt('Please Enter to get Absolute Value');
// var result = Math.abs(absolute_value);
// document.write(`The Absolute Value of ${absolute_value} is ${result}`);



// Chapter # 26-30 Question # 4
// var random = Math.floor(Math.random() * 6) + 1; 
// document.write(`Random Dice Value: ${random}`)



// Chapter # 26-30 Question # 5
// var random = Math.floor(Math.random() * 2) + 1;
// random =  random.toString();
// var coins = random == "2" ? "Heads" : "Tails";
// document.write(`${random} <br>`);
// document.write(`Random Coin Value: ${coins}`);



// Chapter # 26-30 Question # 6
// var random = Math.floor(Math.random() * 100) + 1; 
// document.write(`Random Number between 1 to 100: ${random}`)



// Chapter # 26-30 Question # 7
// var random = parseFloat(prompt("Enter your weight in Kilograms"));
// random = random.toFixed(2);
// document.write(`The weight of the user is ${random} kilograms`);



// Chapter # 26-30 Question # 8
// var random = Math.floor(Math.random() * 10) + 1; 
// var user = parseInt(prompt("Enter any digit value between 1 to 10:"))
// if(random === user)
// {
//     alert(`Congratulations! You guessed the correct Random Number:`);
// }
// else{    
//     alert(`Try again!`);
// }



// Chapter # 31-34 Question # 1
// var date = new Date();
// document.write(date);



// Chapter # 31-34 Question # 2
// var date = new Date();
// var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
// var month = date.getMonth();
// document.write(`Current Month: ${month_names[month]}`);



// Chapter # 31-34 Question # 3
// var date = new Date();
// var week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var day = date.getDay();
// document.write(`Today is ${week_days[day]}`);



// Chapter # 31-34 Question # 4
// var date = new Date();
// var week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var day = date.getDay();
// if(day == "0" || day == "6" )
// {
//     document.write(`It's Fun Day`);
// }
// else{
//     document.write(`Today is ${week_days[day]}`);
// }



// Chapter # 31-34 Question # 5
// var date = new Date();
// var today_date = date.getDate();
// if(today_date > 15)
// {
//     document.write(`Last fifteen days of the month.`)
// }else{
//     document.write(`First fifteen days of the month`);
// }



// Chapter # 31-34 Question # 6
// var date = new Date();
// document.write(`Current Date: ${date} <br>`);
// document.write(`Elapsed milliseconds since  January 1, 1970: ${date.getTime()} <br>`);
// document.write(`Elapsed minutes since  January 1, 1970: ${date.getTime()/1000/60}`);



// Chapter # 31-34 Question # 7
// var date = new Date();
// var AM_PM = date.getHours();
// var result = AM_PM >= 12 ? "PM": "AM";
// document.write(`It's ${result}`);  



// Chapter # 31-34 Question # 8                         // not done
// var date = new Date();
// var year = date.setMonth(11,30);
// document.write(`Later Date: ${year}`); 



// Chapter # 31-34 Question # 9                         // not done
// var date = new Date();
// var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
// date = date.setFullYear()
// var last_ramadan = date.setMonth(6, 18);
// var current_ramadan = date.setMonth()
// document.write(`${date}`);  



// Chapter # 31-34 Question # 10                         // not done



// Chapter # 31-34 Question # 11                         // not done



// Chapter # 31-34 Question # 12                         // not done



// Chapter # 31-34 Question # 13
// var age = parseInt(prompt("Enter your age:"));
// var date = new Date();
// var year = age-date.getFullYear();
// document.write(`Your age is ${age} <br>`);
// document.write(`Your birth year is ${Math.abs(year)}`);



// Chapter # 31-34 Question # 14
// var date = new Date();
// var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
// var customer_name = "ABC Customer";
// var no_of_units = 410;
// var charges_per_units = 16;
// var late_payment_surcharge = 350;
// document.write(`<b>K-Electric Bill</b> <br><br>`);
// document.write(`Customer Name: <b>${customer_name}</b> <br>`);
// document.write(`Month: <b>${month_names[date.getMonth()]}</b> <br>`);
// document.write(`Number of Units: <b>${no_of_units}</b> <br>`);
// document.write(`Charges per unit: <b>${charges_per_units}</b> <br><br>`);
// document.write(`Net Amount Payable (within Due Date): <b>${no_of_units*charges_per_units}</b> <br>`);
// document.write(`Late payment surcharge: <b>${late_payment_surcharge}</b> <br>`);
// document.write(`Gross Amount Payable (after Due Date): <b>${(no_of_units*charges_per_units)+late_payment_surcharge}</b> <br>`);



// Chapter # 35-38 Question # 1
// function current_date(){
//     var date = new Date();
//     return date;
// }
// document.write(current_date());



// Chapter # 35-38 Question # 2
// function greeting(first, last){
//     return first+" "+last;
// }
// document.write(greeting("Shiraz", "Siddiqui"));
    


// Chapter # 35-38 Question # 3
// var num1 = parseInt(prompt("Enter 1st number:"))
// var num2 = parseInt(prompt("Enter 2nd number:"))
// function addition(num1, num2){
//     return num1 + num2;
// }
// document.write(addition(num1, num2));



// Chapter # 35-38 Question # 4
// var num1 = parseInt(prompt("Enter 1st number:"))
// var num2 = parseInt(prompt("Enter 2nd number:"))
// var operator = prompt("Enter the Operator:")
// function calculation(num1, num2, operator){
//     var result;
//     if(operator ==  "+"){
//         result = num1 + num2;
//     }
//     else if(operator == "-"){
//         result = num1 - num2;
//     }
//     else if(operator == "*"){
//         result = num1 * num2;
//     }
//     else if(operator == "/"){
//         result = num1 / num2;
//     }
//     return result;
// }
// document.write(calculation(num1, num2, operator));



// Chapter # 35-38 Question # 5 
// var num = parseInt(prompt("Enter a number to get square"));
// function square(num)
// {
//     num = num*num;
//     return num;
// }
// document.write(square(num));



// Chapter # 35-38 Question # 6                                             // need to understand this
// var n = parseInt(prompt("Enter a number to get Factorial:"));
// function Factorial(n) { 
//     if (n === 0) {  
//         return 1;  
//     } 
//     else {  
//         return n * Factorial( n - 1 );  
//     } 
// } 
// document.write(Factorial(n))



// Chapter # 35-38 Question # 7
// var start = parseInt(prompt("Enter a starting number"))
// var end = parseInt(prompt("Enter a ending number"))
// function counting(start, end){
//     for(var i = start; i <= end; i++){
//         document.write(`${i} <br>`);
//     }
// }
// counting(start, end);



// Chapter # 35-38 Question # 8
// var base = parseInt(prompt("Enter Base Value"))
// var perp = parseInt(prompt("Enter Perpendicular Value"))
// function hypotenuse(base, perp){
//     function square (){
//         hypo = (base * base)+(perp * perp);
//         return hypo;
//     }
//     return Math.sqrt(square());
// }
// document.write(hypotenuse(base, perp));
// document.write(Math.hypot(3,4))



// Chapter # 35-38 Question # 9                         // not done with variables 
// var width = parseInt(prompt("Enter Width Value"))
// var height = parseInt(prompt("Enter Height Value"))
// function Area(width, height) {
//     area = width*height;
//     return area;
// }
// document.write(Area(width, height));

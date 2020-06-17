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
// for(var i = 0; i < username.length; i++) {
    
//     var username = prompt('Enter username:');
//     if(username[i] === '@' || username[i] === '.' || username[i] === ','  || username[i] === '!'  ){
//         alert(`Please enter a valid username`);
//     }
//     else{
//         document.write("Username: "+username);
//     }
// }



// Chapter # 21-25 Question # 14                                            //not done
// var array = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userinput = prompt('Enter the bakery item;');
// userinput = userinput.toLowerCase();
// for(var i=0; i<array.length; i++)
// {
//     if(userinput == array[i])
//     {
//         document.write(`${array[i]} is <b>available</b> at index ${array.indexOf(array[i])} in our bakery.`)
//         break;
//     }
//     else{
//         document.write(`We are sorry. ${userinput} is <b>not available</b> in our bakery.`)
//         break;
//     }
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



// Chapter # 21-25 Question # 16                                        //not done
// var name = "university of Karachi";
// for(var i = 0; i <name.length; i++)
// {
//     document.write(name);
// }



// Chapter # 21-25 Question # 17
// var name = "Pakistan";
// var length = name.length;
// var last_char = name.slice(length-1,length);
// document.write(last_char);

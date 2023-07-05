import axios from 'axios'
 export async function getData(Number){
     const {data: user_info} = await axios("https://jsonplaceholder.typicode.com/users/"+'1');
     const {data: post}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+'1');
     const data_final = Object.assign(user_info,post);  
     return console.log(data_final)
}

const api_url = "https://api.quotable.io/random";
const quote = document.getElementById('update_quotes')
const  author = document.getElementById('quotes_Auther')
async function updatequote(url){
    const response = await fetch(url);
    let  get_data = await response.json();
   // console.log(get_data);
    //Update the HTML with new data
    quote.innerHTML= `"${get_data.content}"` ;
    author.innerHTML=`- ${get_data.author}`;
}
updatequote(api_url);
function tweet_Share(){
    window.open("https://twitter.com/intent/tweet?text=Hii Vishal Gaikwad \n\n" + quote.innerHTML + "\n\n---by" +  author.innerHTML,"Tweet window","width=450,height=360");
}
// document.getElementById("quote").innerHTML=get_data.content;
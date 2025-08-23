 const btn=document.querySelector('#new-quote');
 const quotee1=document.querySelector('.quote');

 const quotes=[
    {
    quote:"The best way to get started is to quit talking and begin doing.",
 },
 {
    quote:"Don't let yesterday take up too much of today.",
 
 },{
    quote:"It's not whether you get knocked down, it's whether you get up.",
 },];
 btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quotee1.innerHTML=quotes[random].quote;
 })


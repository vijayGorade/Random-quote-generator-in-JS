console.log("Api calling");






// const allData=fetch('https://dummyjson.com/quotes')
const btn=document.querySelector(".generateQuate");
btn.addEventListener("click",()=>{
   fetchAllData();

})



async function fetchAllData() {
   let allData,mainData;   
   const quate=document.querySelector(".quate");
   const authorName=document.querySelector(".athorName");
   quate.innerHTML="Serching please wait...";
   authorName.innerHTML="wait...";
  try{
    allData= await fetch('https://dummyjson.com/quotes/random');
   mainData=await allData.json();
  }
  catch(error){
alert("somathing went wrong")
return;
  }
   console.log(mainData);


   authorName.innerText=mainData.author;
   quate.innerText=mainData.quote;


}


// allData
//  .then(data=> data.json())
//  .then((data)=>console.log(data))
//  .catch((error)=>{
//     console.log(error)
//  })

//  console.log(allData)
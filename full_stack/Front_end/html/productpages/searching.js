let againSearch=document.querySelector(".FullSearchingAgain");

againSearch.addEventListener("change",async(e)=>{
    try {
        console.log("object",e.target.value);
        const response=await fetch(`https://commerce-app-ijwm.onrender.com/get/algolia?q=${e.target.value}`);
        if(response.ok){
            const data=await response.json();
            appendProducts(data)
        }
    } catch (error) {
        
    }

})

let appendData=document.querySelector("#divprdoucts")
function appendProducts(data){
    console.log(data);
  appendData.innerHTML=""
    appendData.innerHTML= data.map((item)=>{
   let ans=
    `
    <div class="products_div" >
        <img src=${item.image}>
        <h4> ${item.des}</h4>
        <p>$ ${item.price}</p>
        <button data-id=${item._id}  class="bag_btn">
            Add to Bag
            </button>
        </div>
    `
    return ans
    }).join(" ");
  let div=document.querySelectorAll(".bag_btn");
  for(let btn of div){
    let count=0;
    btn.addEventListener("click",(e)=>{
        count++;
        if(count<2){
            let data_id=e.target.dataset;
        addBag(data_id)
        window.location.href="./cartPage.html"
        }else{
            alert("Your Product has been alreday added in bag")
        }
       
    })
  }
}
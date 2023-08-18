function cart(){
    window.location.href="./html/productpages/cartPage.html"
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const searching=document.querySelector("#FullSearching");
searching.addEventListener("change",async(e)=>{
    try {
        console.log("searching",e.target.value);
        const response=await fetch(`https://commerce-app-ijwm.onrender.com/get/algolia?q=${e.target.value}`);
        if(response.ok){
            const data=await response.json();
            localStorage.setItem("searchData",JSON.stringify(data))
            // appendProducts(data)
        window.location.href="./html/productpages/searching.html";

        }
        
    } catch (error) {
        console.log(error)
    }
  
})



let appendData=document.querySelector("#divprdoucts")

function appendProducts(data){
    console.log(appendData);
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


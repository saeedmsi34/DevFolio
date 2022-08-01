// /////////active-border-botton-start*
const items = document.querySelectorAll(".collapse ul li")
const item2 = document.querySelectorAll(".nav-item ul li a")
const item3 = document.querySelectorAll("ul li button")

items.forEach((items) => {
  items.addEventListener("click", () => {
    document.querySelector(".active1").classList.remove("active1")
    items.classList.add("active1")

  })
})
// /////////active-border-botton-end*
// /////////active-color-change-start*
item2.forEach((item2) => {
  item2.addEventListener("click", () => {
    document.querySelector(".pp").classList.remove("pp")
    item2.classList.add("pp")
  })
})
// /////////active-color-change-end*
item3.forEach((item3) => {
  item3.addEventListener("click", () => {
    document.querySelector(".qq").classList.remove("qq")
    item3.classList.add("qq")
  })
})
// bar (x) start*
function myFunction(x) {
  x.classList.toggle("change");
}
//////////////////////////////////////////////////
$(window).scroll(function () {
  var currentOffSet1 = $(window).scrollTop()
  if (currentOffSet1 > 100) {
    $("#nav").css({ "background-color": "rgba(78, 77, 75, 0.9)", "transition": "all .5s" })
    // btnUp//
    $(".btnUp").fadeIn(2000);
  }
  else {
    $("#nav").css({ "background-color": "transparent" })
     // btnUp//
     $(".btnUp").fadeOut(2000);
  }
})
// btnUp//

$(".btnUp").click(function(){
  $("body,html").animate({scrollTop:0},1000)
})

// scroll-start*
$(".nav-link").click(function(){
 let currentLink=$(this).attr("href");
  let currentoffset2=currentLink.offset().top;
  $("html,body").animate({scrollTop:currentoffset2},5000)
})

// //////////////////////////////////////////////////////////////////
$(document).ready(function(){

  $(".Loadding").fadeOut(2000, function(){
      $("body").css({"overflow":"auto"})
  })
 
})







var typed = new Typed('.element', {
    strings: ["Freelancer", "Photographer", "Designer","Developer"],
    typeSpeed: 100,
    backDelay: 100,
    loop: true,
    loopCount: Infinity,
    backSpeed: 100,
    smartBackspace: false // Default value
  });




  $('.element').counterUp({
    delay: 100,
    time: 4000
});




















// /loading////

$(document).ready(function(){

  $(".Loadding").fadeOut(2000, function(){
      $("body").css({"overflow":"auto"})
  })
 
})


const item4 = document.querySelectorAll(".color-option ul li")

item4.forEach((item4) => {
item4.addEventListener("click", () => {
  document.querySelector(".kk").classList.remove("kk")
  item4.classList.add("kk")
})
})





$('.testimonel-carousel').owlCarousel({
  margin: 20,
  loop: true,
  items: 1,
  autoplay: true,
  dots: true,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 }
  }
});









// form//


var inputName=document.getElementById("inputName")
var inputEmail=document.getElementById("inputEmail")
var inputSubject=document.getElementById("inputSubject")
var inputMessage=document.getElementById("inputMessage")
var addBtn=document.getElementById("addBtn")
var inputs=document.getElementsByClassName("form-control")

var contacts=[]
addBtn.onclick=function(){
  addContact()
  displayData()
  clearForm()
 
}


function addContact(){
 var contact={
    inputName:inputName.value,
    inputEmail:inputEmail.value,
    inputSubject:inputSubject.value,
    inputMessage:inputMessage.value,  
  }
  contacts.push(contact)
  localStorage.setItem("contactList",JSON.stringify(contacts))

}

function displayData(){
  cartona="";
  for(var i=0;i<contacts.length;i++){
    cartona+=
    `
    <tr>
    <td>${i + 1}</td>
        <td>${contacts[i].inputName}</td>
        <td>${contacts[i].inputEmail}</td>
        <td>${contacts[i].inputSubject}</td>
        <td>${contacts[i].inputMessage}</td> 
        <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
        </tr>

    `
  }
  document.getElementById("tableBody").innerHTML=cartona;
}



function clearForm(){
      for(var i=0;i<inputs.length;i++){
        inputs[i].value=""
      }
}



function delet(index){

  contacts.splice(index,1)
  displayData()
  localStorage.setItem("contactList",JSON.stringify(contacts))

}


function search(val){
  cartona="";
  for(var i=0;i<contacts.length;i++){
    if (contacts[i].inputName.toLowerCase().includes(val.toLowerCase())) 
    {      cartona+=
      `
      <tr>
      <td>${i + 1}</td>
          <td>${contacts[i].inputName}</td>
          <td>${contacts[i].inputEmail}</td>
          <td>${contacts[i].inputSubject}</td>
          <td>${contacts[i].inputMessage}</td> 
          <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
          </tr>
  
      `
    }
 

}
document.getElementById("tableBody").innerHTML=cartona;


}







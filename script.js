
    //   resposive for navbar 
    var first_time=true;
    function myFunction(){
      var  nav = document.getElementById('nav');
      var aa= document.querySelectorAll('li');
      var aul= document.querySelector('ul');

      function sayHi() {
        for (i = 0; i < aa.length; i++){
          aa[i].classList.toggle('addli');
        }
        aul.classList.toggle('addul');
      }
      
      setTimeout(sayHi, 100); // Hello, John
  
    //  to all screeen
    nav.classList.add('nav_scrol');
     nav.style.height='100%';
     
    // bo btn humber graka
    if(first_time){
      var a = document.getElementById('test')
       a.innerHTML= '<i class="fa fa-close"></i>';
        first_time=false;
    }
    else{
      var a = document.getElementById('test')
       a.innerHTML= '<i class="fa fa-bars"></i>';
       nav.style.height='70px';
       first_time=true;
    }
    // bo btn humber graka tawaw
    }

    //   resposive for navbar  tawaw

function myFunction11(x) {
  // alert("1111")
  if (x.matches == false) { // If media query matches
    var aa= document.querySelectorAll('li');
    var aul= document.querySelector('ul');
    var  nav = document.getElementById('nav');

  for (i = 0; i < aa.length; i++){
    aa[i].classList.remove('addli');
  }
  aul.classList.remove('addul');
  aul.classList.remove('addul');
          if (window.pageYOffset<100) {
            nav.classList.remove('nav_scrol');
          }
          else{
            nav.style.height='70px';
          }
  var a = document.getElementById('test')
  a.innerHTML= '<i class="fa fa-bars"></i>'; 
  first_time=true; 
    
  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction11(x) // Call listener function at run time
x.addListener(myFunction11) // Attach listener function on state changes

//scrolling
var  nav = document.getElementById('nav');
       function fun1(){
                if(pageYOffset>100){
                     nav.classList.add('nav_scrol');}
                  /////nav id id lashweni nav  dabe bass id be 
               /* bo awaya agar nav 100% bu awa ka scrollll dakain navaka tek nache  */
                  else{
                      if (first_time) {
                        nav.classList.remove('nav_scrol');
                      }
                      }
              }
        
// var  foo = document.getElementById('foot');
//        function fun1(){
//                 if(pageYOffset>3250){
//                      foo.style.opacity="1";
//                     }
//                 if(pageYOffset<3250){
//                      foo.style.opacity="0";
//                     }
//                       }
            
        

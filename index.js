var myImages =["module 10 (2).PNG	","Module 10 (3).PNG","module 10.PNG "];











var captionImages =["css","speed","html"];







var index=0; 







function updateImage(){



  document.getElementById("slideshow").src = myImages[index];



  document.getElementById("slideshow").alt= captionImages[index];



  document.getElementById("caption").textContent = captionImages[index]; 



} 







function next(){



  if (myImages.length == index+1)



    index=0;



  else



    index++;



  updateImage();



} 











function back(){



  if (index===0)



    index=myImages.length-1;



  else



    index--;







  updateImage();



} 







var nextButton = document.getElementById("next"); 



var previousButton = document.getElementById("previous"); 







previousButton.addEventListener("click",back,false);



nextButton.addEventListener("click",next,false); 



function autoSlide(){



  if (document.getElementById("auto").checked)



    next(); 



}











setInterval(autoSlide,2000); // Next

var i = 0; 
var images= ["https://tse1.mm.bing.net/th?id=OIP.cEo7daPTOm0p4KBplWYmtwHaHa&pid=Api&P=0&w=300&h=300","dad.png","mom.png","brother.png","baby.png",]
var names=["My family","my dad","my mom","Me","My baby brother"]
 

    function change_image() 
    {  
         
         i++;
         document.getElementById("Image").src=images[i];  
         document.getElementById("names").innerHTML=names[i];
         if(i > images.length) {i=0;} 
    }



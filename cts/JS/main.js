function iniciarTodo(){

    cargarImagenes()
    
}

function cargarImagenes(){

    document.getElementById('image-span-1').innerHTML = "<img id='slide-1' src='CSS/resources/banners/Img1.jpg'></img>"
    document.getElementById('image-span-2').innerHTML = "<img id='slide-2' src='CSS/resources/banners/Img2.png'></img>"
    document.getElementById('slide-3').style.visibility = 'hidden'; 
        
   
    let click_americas = document.getElementById('americas')
    click_americas.addEventListener('click', function(){

        document.getElementById('slide-3').style.visibility = 'visible'; 
        
        document.getElementById('image-span-1').innerHTML = "<img id='slide-1' src='CSS/resources/Americas/Cat1.jpg' alt='TSE-1'></img>" 
        document.getElementById('image-span-2').innerHTML = "<img id='slide-2' src='CSS/resources/Americas/Cat2.jpg' alt='TSE-2'></img>"  
        document.getElementById('image-span-3').innerHTML = "<img id='slide-3' src='CSS/resources/Americas/Cat3.jpg' alt='TSE-3'></img>" 
       
    })

    let click_apac= document.getElementById('apac')
    click_apac.addEventListener('click', function(){

        document.getElementById('slide-3').style.visibility = 'visible'; 
        
        document.getElementById('image-span-1').innerHTML = "<img id='slide-1' src='CSS/resources/Apac/Dog1.jpg' alt='TSE-1'></img>"  
        document.getElementById('image-span-2').innerHTML ="<img id='slide-2' src='CSS/resources/Apac/Dog2.jpg' alt='TSE-2'></img>" 
        document.getElementById('image-span-3').innerHTML ="<img id='slide-3' src='CSS/resources/Apac/Dog3.jpg' alt='TSE-3'></img>" 
        
    })

    let click_emea= document.getElementById('emea')
    click_emea.addEventListener('click', function(){

        document.getElementById('slide-3').style.visibility = 'visible'; 
        
        document.getElementById('image-span-1').innerHTML = "<img id='slide-1' src='CSS/resources/Emea/Pet1.jpg' alt='TSE-1'></img>" 
        document.getElementById('image-span-2').innerHTML = "<img id='slide-2' src='CSS/resources/Emea/Pet2.jpg' alt='TSE-2'></img>" 
        document.getElementById('image-span-3').innerHTML = "<img id='slide-3' src='CSS/resources/Emea/Pet3.jpg' alt='TSE-3'></img>" 
        
    })
       
}



window.addEventListener('load',iniciarTodo)


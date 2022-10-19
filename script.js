var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    

    var search =document.getElementById("search").value 

    alert(search)
    
    fetch( "https://api.github.com/user" +search)


.then((result) =>result.json())
.then((data) =>{

    console.log(data)

    document.getElementById("result").innerHTML =data
    
    
    
})
})
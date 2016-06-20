<!DOCTYPE html>
    <html>
    <head> 
    <title> JS Bin </title> 
    
 </head>
    <body>
        <p>For numbers 1-20, print even numbers</p>
        
        <p id = "demo"></p> 
        
        <button onclick = " printEvenNumbers()"> Print even numbers</buttons>
        
        <script> 
            fuction printEvenNumbers(){
                var result = "";
          for( var i =1; i<=20; i=2)
              result += i " ";
            }
document.getElementById("demo").innerHTML= result;

}
</script>
</body>
</html>
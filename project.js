
function welcome(event){
    alert("Your are going to submit");
    event.preventDefault();
    const x=document.getElementById("user").value
    const y="Welcome "+x;
    console.log(y);
    document.getElementById("message").textContent = y;

}
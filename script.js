const name=document.getElementById("name");
const surname=document.getElementById("surname");
const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const error1=document.getElementsByClassName("error1");
error2=document.getElementsByClassName("error2");
error3=document.getElementsByClassName("error3");
error3=document.getElementsByClassName("error4");
error=document.getElementsByClassName("error");
form.addEventListener("submit",(e)=>{
    
    let messages=[]
    if(name.value===""||name.value==null){
messages.push('name is required');
    }
   
 

           



if(messages.length>0){
    e.preventDefault();
    console.log(messages.join)
    document.getElementById("firsti").innerText="First Name cannot be empty";
    document.querySelector(".secondside .main-form img:nth-child(1)").style.visibility ="visible";
  
}



})

form.addEventListener("submit",(pre)=>{
    let passwording=[]
    if(password.value===""||password.value==null){
        passwording.push('surnam31e is required');
            }
          

            if(passwording.length>0){
                pre.preventDefault();
                console.log(passwording.join)
                
                document.getElementById("fori").innerText="Password  cannot be empty";
                document.querySelector(".secondside .main-form img:nth-child(4)").style.visibility ="visible";}
    
    })

form.addEventListener("submit",(k)=>{
let surnaming=[]
if(surname.value===""||surname.value==null){
    surnaming.push('surname is required');
        }
      
        if(surnaming.length>0){
            k.preventDefault();
            console.log(surnaming.join)
            
            document.getElementById("secondi").innerText="Last Name cannot be empty";
            document.querySelector(".secondside .main-form img:nth-child(2)").style.visibility ="visible";}

})





form.addEventListener("submit",(em)=>{
    let emailing=[]


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
    {
      return (true)
      emailing=[0]
    }
    else{
        emailing.push('Please enter email')
        document.querySelector(".secondside .main-form img:nth-child(3)").style.visibility ="visible";
      
    }
  

            if(emailing.length>0){
                em.preventDefault();
                console.log(emailing.join)
                document.getElementById("thirdi").innerText="Looks like this is not an email";}
    
    })
   
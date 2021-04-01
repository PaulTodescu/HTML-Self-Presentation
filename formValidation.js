function validateform(){  

    var name=document.myform.name.value;    
    var email = document.myform.email.value;
    var message = document.myform.msg.value;

    if ((name==null || name=="") && (email==null || email=="") && (message==null || message=="")){  
        alert("Fields are empty!");
        return false;  
          }  

    else if (name==null || name==""){  
      alert("Name cannot be blank");  
      return false;  
        }
        
    else if (name.length < 4){  
      alert("Name must be at least 4 characters long");  
      return false;  
        }  

    else if (email==null || email==""){  
      alert("Email cannot be blank");  
      return false;  
        }
        
    else if (message==null || message==""){  
      alert("Message cannot be blank");  
      return false;  
        }  

    else{
      alert("Message submitted. Thank You!");
      return false;
    }

    }  
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
   let errorMessage = "";
  
    // Name validation - check if empty
    if (name === "") {
      errorMessage += "Please enter your name.\n";
    }
  
    // Email validation - check format with regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage += "Please enter a valid email address.\n";
    }
  
    if (interest === "") {
        errorMessage += "Please select your interest.\n";
      }

    // Display error message or submit form
    if (errorMessage !== "") {
      alert(errorMessage);
      return false; // prevent form submission
    } else {
      // Form is valid, you can potentially process the data here (optional)
      return true;  // allow form submission
    }
  }

  var firstIndex=0;
  function automaticSlide(){
        setTimeout(automaticSlide, 2000);
        var pics;
        const img=document.querySelectorAll('.slideshow');
        for(pics=0; pics<img.length;pics++){
            img[pics].style.display="none";
        }
        firstIndex++;
        if(firstIndex > img.length){
            firstIndex=1;
        }
        img[firstIndex-1].style.display="block";
  }
  automaticSlide();


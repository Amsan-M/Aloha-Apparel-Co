

$(document).ready(function (e) {
    $('#btnValidate').click(function () {
        var regex = $('#txtEmail').val();
        if ($.trim(regex).length == 0) {
            alert('Please enter an email address');
            // e.preventDefault();
        }
        if (validateEmail(regex)) {
            alert('Thanks for subscribing!');
        }
        else {
            alert('Please enter a valid email address');
            // e.preventDefault();
        }
    });
});

function validateEmail(regex) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(regex)) {
        return true;
    }
    else {
        return false;
    }
}







$(document).ready(function(){ 
    var count = 0;
    var addItem = document.getElementById("cartCount");


  $('.addToCart').bind("click", function(){
    document.getElementById('cartCount').style.display = "flex";//displays the badge
    count++;
      addItem.innerHTML = count;
    })

   
        
     
  

});


// smooth scrolling



function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
  document.getElementById("1").addEventListener('click', () => {
    scrollTo(document.getElementById("about"));
  });
  
  document.getElementById("2").addEventListener('click', () => {
    scrollTo(document.getElementById("shop"));  
  });
  
  document.getElementById("3").addEventListener('click', () => {
    scrollTo(document.getElementById("featured"));  
  });
  
  document.getElementById("4").addEventListener('click', () => {
    scrollTo(document.getElementById("updates"));   
  });


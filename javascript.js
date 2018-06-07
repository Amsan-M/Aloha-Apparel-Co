console.log("Hello");

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


// add to cart update


var count = 0;
var button = document.getElementById("addToCartBtn");
var display = document.getElementById("cartCount");

button.onclick = function(){
  count++;
  display.innerHTML = count;
}


document.getElementById('gmail-btn').addEventListener('click', function () {
    var gmail_address = "santhoshwiz24@gmail.com"; 
    var subject = "Hello"; 
    var body = "Hello,\n\nThis is a test email."; 
    var gmail_link = "mailto:" + gmail_address + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = gmail_link;
}) ;
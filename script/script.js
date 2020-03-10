// Load Navigation Bar
$(document).ready(function () {
    $("#nav-placeholder").load("../html/navigation.html");
 });

// Load Footer Section
$(document).ready(function () {
    $("#footer-placeholder").load("../html/footer.html");
 });

$(document).ready(function () {
    var location = window.location.href;
    console.log(location);
    console.log(this.parent);
    $('#navItems a').each(function(){
        if(location.indexOf(this.href)>-1) {
           $(this).parent().addClass('active');
        }
    });
});

$('#navItems').on('click', 'a', function(){
    $('#navItems a').removeClass('active');
    $(this).addClass('active');
});


$('#uploadButton,#downloadButton').click(function(){
    var btn = $(this).data("showbutton");
    showButtonText(btn);
});

function showButtonText(btn) { 
    console.log("RIP");   
    // reset
    $('.buttonContent').hide();      
    $('[data-button]').hide(); 
    $('[data-showbutton]').removeClass('clicked');
        
    // only show the selected
    $('[data-showbutton=' + btn + ']').addClass('clicked');  
    $('[data-button=' + btn + ']').show();
}

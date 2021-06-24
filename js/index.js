$('.tabs-stage > div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage > div').hide();
  $($(this).attr('href')).show();
});
var i=0;  

$(document).ready(function() {
  $('.btn').click(function() {
    i=i+1;
    var comment = $('.commentBox').val();
    $("<li class='"+i+"'>").text(comment).prependTo('.comments');
    $('.btn').attr('disabled', 'true');
    $('.counter').text('140');
    $('.commentBox').val('');
    $(".comments").prepend("<button id='delete' class='"+i+"' >Sil</button>")
  });
  
  $('.commentBox').keyup(function() {
    var commentLength = $(this).val().length;
    var charLeft =  140 - commentLength;
    $('.counter').text(charLeft);
    
    if (commentLength == 0) {
      $('.btn').attr('disabled', 'true');
    }
    else if (commentLength > 140) {
      $('.btn').attr('disabled', 'true');
    }
    else {
      $('.btn').removeAttr('disabled', 'true');
    }
  });
  
  $('.btn').attr('disabled', 'true');
  
});


$(document).on("click","#delete", function(){
  var btnClass=$(this).attr("class")

    $("ul").find("."+btnClass).css("display","none");
    $(this).css("display","none");
})      
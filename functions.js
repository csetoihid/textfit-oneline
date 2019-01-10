
$('#myRange').attr( 'max',$( window ).width());
$('#text').keyup(function() { 
  callTextfit();
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.oninput = function() {
  output.innerHTML = this.value+'px';
  callTextfit();   
}
function textFit(rangeWidth){
      $(function() {
        $(window).on('resize', function() {
          $('#quickfit').quickfit({ max: 48, min: 2, truncate: true, width: rangeWidth});        
        });
        $(window).trigger('resize');    
      });
}

function callTextfit(){
   $('#quickfit').attr( 'data-quickfit',$('#text').val());
  $('#quickfit').text($('#text').val());
   if($('#myRange').val() < 55){
     $('#quickfit').css({"width":$(window).width() -40});
    textFit($(window).width() - 130);
  }else{
    $('#quickfit').css({"width":$('#myRange').val() - 40});
    textFit($('#myRange').val() - 130);
  } 
}

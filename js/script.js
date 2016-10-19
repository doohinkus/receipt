$(document).ready(function(){

     //$(".modal-content").append("asdfasdfasdf");
    $('form').submit(function(event){
    //var finalinfo = function(info){
      var name = $("#name").val();
      var address = $("#address").val();
      var state = $("#state").val();
      var zipcode = $("#zipcode").val();
      var product = $("#product").val();
      var ship = $("input:radio[name=ship]:checked").val();
      var finalinfo = "<p>" + name + "</p>" + "<h4>" + address + "</h4>" + "<p>"
      + state + "</p>" + zipcode +"<br>" + product
      + "<br>" + ship + "<br>";

      $(".modal-content").empty().append(finalinfo);
  //  }

    $("#myModal").modal('show');
    event.preventDefault();
  });




});

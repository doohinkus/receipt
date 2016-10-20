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
      var finalinfo = "<p>" + name + "</p>" + "<h4><p>" + address + "</p>" + "<p>"
      + state + "</p><p>" + zipcode +"</p><p>" + product
      + "</p><p>" + ship + "</p>";

      $(".modal-content").empty().append(finalinfo);
  //  }

    $("#myModal").modal('show');
    event.preventDefault();
  });




});

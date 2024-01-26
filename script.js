$(document).ready(function () {
  $("#add-btn").on("click", function () {
    var newItemText = $("#new-item").val().trim();

    if (newItemText !== "") {
      var newItem = $("<li class='item'>" + newItemText + "</li>");

      newItem.on("click", function (event) {
        $(this).toggleClass("completed");
      });

      $("#item-list").append(newItem);
      $("#new-item").val("");
      alert("Klik op de taak wanneer deze is voltooid :)");
    }
  });
});

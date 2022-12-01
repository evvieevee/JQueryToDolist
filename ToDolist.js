let activeNum = 0;

function removeTask(id) {
  $( "#"+id ).slideUp( "slow", function() { $(this).remove() });
}

function addDeco(id) {
  const textElement = $( "#"+id+ " p" );
  if (textElement.hasClass("text-decoration-line-through")) {
    textElement.removeClass("text-decoration-line-through");
  }else {
    textElement.addClass( "text-decoration-line-through" );
  }
  
}


$( "form" ).submit(function( event ) {
    event.preventDefault();
    const inputValue = $( "input" ).first().val();
    activeNum++;
    $( `
    <li id="${activeNum}" class="list-group-item d-flex justify-content-between" onclick="addDeco(${activeNum})" style="display: none;">
      
      <p class="text-truncate w-80 m-2" >${inputValue}</p>
      <div class="d-flex">
        <button type="button" class="btn btn-outline-dark" onclick="removeTask(${activeNum})">
          Poista
        </button>
      </div>
    </li>` ).appendTo($("ul")).slideDown("slow");
});

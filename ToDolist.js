// Alustetaan numerojärjestys taskilistalle.
let activeNum = 0;
// Tämä on taskin poisto-funktio. joka slideup animointi ja poista sitten elementin.
function removeTask(id) {
  $( "#"+id ).slideUp( "slow", function() { $(this).remove() });
}
// Tämä on yliviivaus funktio, jolla merkataan taski tehdyksi tai poistetaan taskin kuittaus.
function addDeco(id) {
  const textElement = $( "#"+id+ " p" );
  if (textElement.hasClass("text-decoration-line-through")) {
    textElement.removeClass("text-decoration-line-through");
  }else {
    textElement.addClass( "text-decoration-line-through" );
  }
  
}
// Tässä ei ole käytetty local storagea tai ulkoista databasea tietojen tallentamiseen. 
// Tässä on sumbit, eli lisäys funktio. 
// kun inputfieldiin on lisätty tekstiä ja tallenna nappia painetaan, tulee se listaksi alle. 
$( "form" ).submit(function( event ) {
// Estetään sivun refreshaus eli päivitys, jottei taskit tyhjene kesken kaiken.
    event.preventDefault();
    const inputValue = $( "input" ).first().val();
    activeNum++;
    // Tässä määritellään poistonapille tyylit ja teksti. 
    // Tehdään onclick event, jolle annetaan funktio, jolle annetaan parametriksi taskin id, jonka perusteella voimme löytää taskin. 
    $( `
    <li id="${activeNum}" class="list-group-item d-flex justify-content-between" onclick="addDeco(${activeNum})" style="display: none;"> 
      <p class="text-truncate w-80 m-2" >${inputValue}</p>
      <button type="button" class="btn btn-outline-dark" onclick="removeTask(${activeNum})">
        Poista
      </button>
    </li>` )
    // Tässä tehdään slidedown animointi, joka tulee taskeille, kun ne lisätään sivulle (listaan)
    .appendTo($("ul")).slideDown("slow");
});

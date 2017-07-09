/* Don't delete it */

/*
 console.log = function(text) {
 $('#log-container ').append('<div>' + text + '</div>');
 }
 */


/* Start from here*/

console.log('Peter');


/*Feladat 01.

var test = $(function() {
    console.log( 'jQuery is ready!' ); }
);*/


/*Feladat 02.*/

redFruit = $('.style2');
console.log( redFruit );


/*Feladat 03.*/

if ( redFruit.length>0 ) {
	console.log('Osszesen ' + redFruit.length + '. piros szinu (style2) gyumolcs van.')
}


/*Feladat 04.*/

/*Nem értem, hogy miért csak a 2. sor lesz igaz...*/
console.log( $( '#id02' ).eq( 0 ).is( '.style1' ) );
console.log( $( '#id02' ).eq( 0 ).is( '.style2' ) );
console.log( $( '#id02' ).eq( 1 ).is( '.style1' ) );
console.log( $( '#id02' ).eq( 1 ).is( '.style2' ) );


/*Feladat 05.*/
console.log( $('div') );


/*Feladat 06.*/
/*kilistázza az összes lista elemet úgy, hogy az *.each függvénnyel végig megy rajta*/
task06 = $( 'li' ).each(function( index, elem ) {
    /*$( elem ).prepend( '<b>' + index + ': </b>' );*/
    elem[index];
});
console.log(task06);

/*Feladat 07.*/
/*Meglévő lista szűrése*/
console.log('\nThis is the 7th task:')
listItems = $('*')
console.log( listItems );
console.log( notList = listItems.not( 'li' ) );
console.log( isList = listItems.filter('li') );


/*Feladat 08.*/
/*Elemek keresése:*/
console.log('\nThis is the 8th task:')
console.log( isList.parent() );

/*Feladat 09.*/
/* A függvény átállítja a megadott azonosítóval rendelkező objektumok stílusát a megadott stílusra */
function changingStyle(currentId, currentStyle) {
	list = $( '#' + currentId );
	list.css( '.' + currentStyle );
	console.log('#' + currentId + ' ˇs style has been modified to ' + currentStyle);
}
changingStyle('id03', 'style3')


/*Feladat 10.*/
/* A függvénnyel átállítom a lista típusok style-át*/
/*EZ VALAMIÉRT NEM MŰKÖDIK....*/
function changingListStyle() {
    list.find('li').each(function (index, elem) {
        $(elem).css({
            'font-size': '40px',
            'color': 'red'
        });
    });
}

changingListStyle();

/*Feladat 11.*/
console.log('\nThis is the 11th task:')
/* Lekérdezem egy adott elem adott tulajdonságát*/
function properties(currentId, currentProperty) {
	console.log( $( '#'+currentId ).css( currentProperty ) );
}
properties('id04', 'background-color')


/*Feladat 12.*/
/*Ha rákattintok egy elemre (DIV), akkor kírja, hogy melyikre kattintottam rá...*/
console.log('\nThis is the 12th task:')
$( 'div' ).click(function( event ) {
	console.log( 'clicked ' + $( this ).text() );
});


/*Feladat 13.*/
/*Bekér egy szöveget, és eltárolja a lenyomott karaktereket...*/
i = 0;
$(document).ready(function(){
    $("input").keypress(function(){
        $("span").text(i += 1);
    });
});

/*Feladat 14.*/
/*Lenyitható listát készítettem*/
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


/*Feladat 15.*/
/**/


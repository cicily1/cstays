function cstays(){
    let studio_rooms = 18; 
    let oneb_rooms = 10;
    let outputstring=''
    let west= document.getElementById("noofbookings").value

    if (studio_rooms > 0) { 
        west++;
        studio_rooms-=west;
            outputstring= "Studio room booked (" + studio_rooms + " left)";
        } else  {
            outputstring= "no Studio rooms left";
        }
        document.getElementById("noofbookings").value= west
        
        console.log(studio_rooms)

        
    
    console.log(outputstring);
    document.getElementById("studiobook").innerHTML= 'Apartments remaining ' + studio_rooms
    return false;
};


function cstays2(){
    let oneb_rooms = 10;
    let outputstring=''
    let west= document.getElementById("noofbooks").value

    if (oneb_rooms > 0) { 
        west++;
        oneb_rooms-=west;
            outputstring= "oneb rooms booked (" + oneb_rooms + " left)";
        } else  {
            outputstring= "no  oneb rooms left";
        }
        document.getElementById("noofbooks").value= west
        
        console.log(oneb_rooms)

        
    
    console.log(outputstring);
    document.getElementById("roomoneb").innerHTML= 'Apartments remaining ' + oneb_rooms
    return false;
};


    
   

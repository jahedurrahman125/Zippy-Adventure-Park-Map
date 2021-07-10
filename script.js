
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 60.18817624268082, lng: 24.940424835251626
        },
        zoom: 18,
        mapId: '814bf60920bc7d90'
    });
    const markers =[
        [
            "Mr Mario!",
            60.18817624268082,24.940424835251626,
            "1.png",
            35,
            30
        ],
        [
            "Castle!",
            60.18769330882561, 24.940289194654277,
            "2.png",
            40,
            39
        ],
        [
            "Playground!",
            60.18822332358396, 24.940034284553157,
            "3.png",
            41,
            37
        ],
        [
            " library!",
            60.1883292462006, 24.94129303881323,
            "4.png",
            44,
            52
        ],
        [
            "Shop!",
            60.18814010259422, 24.93955009089872,
            "5.png",
            55,
            39
        ],
    ]
    for (let i = 0; i<markers.length; i++){
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: {
                lat:currMarker[1] , lng: currMarker[2] 
            },
            map,
            title: currMarker[0],
            icon: {
                url:"/icons/"+currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
               
            },
            animation: google.maps.Animation.DROP,
        });
        const infoWindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });
        marker.addListener("click", () => {
            infoWindow.open(marker, marker);
        });
    }
    
}



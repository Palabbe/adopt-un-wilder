$.getJSON("geoloc-markers.json", function(json) {

    const geolocMap = L.map( 'geoloc-map', {
        center: [46.999, 2.333],
        minZoom: 5,
        maxZoom: 9,
        zoom: 6
    });

    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a','b','c']
    }).addTo( geolocMap );

    /* let map = L.map('geoloc-map').setView([48.833, 2.333], 5); // LIGNE 18

        var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { // LIGNE 20
            attribution: '© OpenStreetMap contributors',
            maxZoom: 9
        });
    
        map.addLayer(osmLayer); */

    let markers = null;


    console.dir(json);
    markers = json;

    for (let i=0; i < markers.length; ++i ) {
        L.marker( [markers[i].lat, markers[i].lng] )
        .bindPopup( '<img src="' + markers[i].picUrl + '" height="50px" width="px" alt="' + markers[i].name + '" />')
        .addTo(geolocMap);
    }

});




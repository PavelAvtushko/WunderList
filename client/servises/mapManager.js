class MapManager { 
    constructor() {
        this.map;
        this.marker;
    }

    createMap(selector, coord, mapScale) {
        const myLatlng = new google.maps.LatLng(coord.x, coord.y);
        const mapProp= { center: myLatlng, zoom: mapScale };
        this.map = new google.maps.Map(document.querySelector(selector), mapProp);
        this.marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map
        });
    }

    changeMapCoord(coord){
        if (coord.x && coord.y) {
            const newLatlng = new google.maps.LatLng(coord.x, coord.y);
            this.map.setCenter(newLatlng);
            this.marker.setMap(null);
            this.marker = new google.maps.Marker({
                position: newLatlng,
                map: this.map
            });
        };
    }
}

export default MapManager;

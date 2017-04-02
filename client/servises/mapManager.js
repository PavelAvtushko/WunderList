import GOOGLE_MAP_LOADER from 'google-maps';
const API_KEY = 'AIzaSyCYsYbIbEOiNMKKuRhSYZSh2AQ01DQ6Ens';


class MapManager { 
    constructor() {
        this.map;
        this.marker;
        this.google;
        this.googleInit();
    }

    googleInit(){
        GOOGLE_MAP_LOADER.KEY = API_KEY;
        GOOGLE_MAP_LOADER.load(function(google) {
            this.google = google;
        }.bind(this));
    }

    createMap(selector, coord, mapScale) {
        const myLatlng = new this.google.maps.LatLng(coord.x, coord.y);
        const mapProp= { center: myLatlng, zoom: mapScale };
        this.map = new this.google.maps.Map(document.querySelector(selector), mapProp);
        this.marker = new this.google.maps.Marker({
            position: myLatlng,
            map: this.map
        });
    }

    changeMapCoord(coord){
        if (coord.x && coord.y) {
            const newLatlng = new this.google.maps.LatLng(coord.x, coord.y);
            this.map.setCenter(newLatlng);
            this.marker.setMap(null);
            this.marker = new this.google.maps.Marker({
                position: newLatlng,
                map: this.map
            });
        }
    }
}

export default MapManager;

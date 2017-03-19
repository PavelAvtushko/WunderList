const mapScale = 8;

class MapManager {
    constructor(selector, coord) {
        let myLatlng = new google.maps.LatLng(coord.x, coord.y);
        let mapProp= {
            center: myLatlng,
            zoom: mapScale,
        };
        this.map = new google.maps.Map(document.querySelector(selector), mapProp);
        this.marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map
        });
    }

    changeMapCoord(coord) {
        if (!coord.x || !coord.y) {
            return;
        };

        let newLatlng = new google.maps.LatLng(coord.x, coord.y);
        this.map.setCenter(newLatlng);
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            position: newLatlng,
            map: this.map
        });
    }
};

export default MapManager;




       // var myLatlng = new google.maps.LatLng(38.90983333333333, 1.4386666666666668);

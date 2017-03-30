class LocalstorageManager {
    constructor($window){
        //console.log('LocalstorageManager');
        this.$window = $window;
    }

    setObject(key, value) {
        this.$window.localStorage[key] = JSON.stringify(value);
    }

    getObject(key) {
        return JSON.parse(this.$window.localStorage[key] || '{}');
    }
}

LocalstorageManager.$inject = ['$window'];

export default LocalstorageManager;

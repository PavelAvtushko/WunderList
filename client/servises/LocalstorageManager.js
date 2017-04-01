class LocalstorageManager {
    constructor($window){
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

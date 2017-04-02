class LocalstorageManager {
    constructor($window){
        this.$window = $window;
    }

    setObject(key, value) {
        if (this.$window.localStorage) {
            this.$window.localStorage[key] = JSON.stringify(value);
        } 
    }

    getObject(key) {
        if (this.$window.localStorage) {
            return JSON.parse(this.$window.localStorage[key] || '[]');
        }
    }

    clear(key){
        this.setObject(key, "[]");
    }
}

LocalstorageManager.$inject = ['$window'];

export default LocalstorageManager;

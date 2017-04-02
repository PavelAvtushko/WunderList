class UserInfo {
    constructor(){
        this._name;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        if (newName) { 
            this._name = newName;
        }
    }
    setDefault(){
        this._name = null;
    }
}

export default UserInfo;

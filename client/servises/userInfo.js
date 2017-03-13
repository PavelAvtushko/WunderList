class UserInfo {
    constructor(){
        this._name;
        // this._password;
        console.log('userManager...');
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
        this._name = undefined;
    }
};

export default UserInfo;

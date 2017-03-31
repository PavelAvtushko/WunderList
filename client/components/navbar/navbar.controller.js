class NavbarController {
    constructor(userInfo) {
        this.userInfo = userInfo;
    }
    deleteUser(){
        this.userInfo.setDefault();
    }
}

NavbarController.$inject = ['userInfo'];

export default NavbarController;

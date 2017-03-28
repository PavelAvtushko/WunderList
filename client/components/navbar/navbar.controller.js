class NavbarController {
    constructor(userInfo) {
        this.userInfo = userInfo;
      //  console.log('NavbarController...');
    }
    deleteUser(){
        this.userInfo.setDefault();
        //console.log(this.userInfo.name);
    }
}

NavbarController.$inject = ['userInfo'];

export default NavbarController;

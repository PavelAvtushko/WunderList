import {URL} from '../../constants.js';
import {FILE_INPUT_SELECTOR, VIEW_PATH_INPUT_SELECTOR, MAP_SCALE, MAP_SELECTOR} from './photo.constants.js';

const IMAGE_COLLECTION = [];

class NewImage {
    constructor(src) {
        this.id = 'img' + Date.now();
        this.img = new Image();
        this.img.src = src;
        this.img.dataset['id'] = this.id;
        this.description = '';
        this.exifData = null;
        this.coord = {};
    }
}

class PhotoController {
    constructor($timeout, exifDataManager, mapManager) {
        this.file;
        this.imageCollection = IMAGE_COLLECTION;
        this.$timeout = $timeout;
        this.exifDataManager = exifDataManager;
        this.currentImage;
       // this.map = mapManager.map;
        this.mapManager = mapManager;
    }

    browse() {
        $(FILE_INPUT_SELECTOR).trigger('click'); //искусственно вызывает клик;
        $(FILE_INPUT_SELECTOR).on('change', () => {this.fileChange()});
    };

    fileChange() {
        $(VIEW_PATH_INPUT_SELECTOR).val($(FILE_INPUT_SELECTOR).val().replace(/C:\\fakepath\\/i, ''));
    }

    showImage(image){
        this.currentImage = image;
        this.$timeout(() =>{
            if (image.coord.x && image.coord.y && !image.map) {
                this.mapManager.createMap(MAP_SELECTOR, image.coord, MAP_SCALE);
            }
            else if (image.coord.x && image.coord.y && image.map) {
                this.mapManager.changeMapCoord(image.coord);
            }
        }, 0);
    }

    // showMap(el) {
    //     if (this.mapManager.map && this.currentImage) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    loadFile() {
        const fileCollection = document.querySelector(FILE_INPUT_SELECTOR);
        if (!fileCollection.files.length || !fileCollection.files[0].type.match('image/jpeg')){
           // alert('wrong type of file');
            return;
        };

        const file = fileCollection.files[0];
        this.addFileToCollection(file);//addFileToCollection();
        $(FILE_INPUT_SELECTOR).val('');
        $(VIEW_PATH_INPUT_SELECTOR).val('');
    }

    addFileToCollection(file) {
        let that = this;
        let image;
        let reader  = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        };
        reader.onloadend = function (event) {
            that.$timeout(() => {
                image = new NewImage(event.target.result);
                image.coord = that.exifDataManager.extractGPSData(image.img);
                image.exifData = that.exifDataManager.extractExifData(image.img);
                that.imageCollection.push(image);
            }, 0);

        };
    }
};

PhotoController.$inject = ['$timeout', 'exifDataManager', 'mapManager'];
export default PhotoController;

import {URL} from '../../constants.js';



const FILE_INPUT_SELECTOR = '.file';
const VIEW_PATH_INPUT_SELECTOR = '.pathToFile';
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
    constructor($timeout, exifDataManager) {
        this.file;
        this.imageCollection = IMAGE_COLLECTION;
        this.$timeout = $timeout;
        this.exifDataManager = exifDataManager;
        this.imageView;
    }

    browse() {
        $(FILE_INPUT_SELECTOR).trigger('click'); //искусственно вызывает клик;
        $(FILE_INPUT_SELECTOR).on('change', () => {this.fileChange()});
    };

    fileChange() {
        $(VIEW_PATH_INPUT_SELECTOR).val($(FILE_INPUT_SELECTOR).val().replace(/C:\\fakepath\\/i, ''));
    }

    // $('#editInfo').on('click', (e) => {
    //     e.preventDefault();
    //     $('.description-form input').val('');
    //     $('.description-form').removeClass(hidden);
    // });

    // $('.description-form button').on('click', (e) => {
    //     e.preventDefault();
    //     $('.description-form').addClass(hiddenClass);
    // });

    // $('.description-form button[type="submit"]').on('click', (e) => {
        
    // });

    // $('.container').on('click', (e) => {
    //     showImage(e.target)
    // });

    showImage(el){
        console.log('sd');
        this.imageView = el;
    }


    loadFile() {
        let file = document.querySelector(FILE_INPUT_SELECTOR).files[0];
        this.addFileToCollection(file);//addFileToCollection();
        $(FILE_INPUT_SELECTOR).val('');
        $(VIEW_PATH_INPUT_SELECTOR).val('');
    }

    addFileToCollection(file) {
        let that = this;
        let reader  = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        };
        reader.onloadend = function (event) {
            that.$timeout(() => {
                let image = new NewImage(event.target.result);
                image.coord = that.exifDataManager.extractGPSData(image.img);
                image.exifData = that.exifDataManager.extractExifData(image.img);
                that.imageCollection.push(image);
            }, 0);
        };
    }
};

PhotoController.$inject = ['$timeout', 'exifDataManager'];
export default PhotoController;








// function showImage(element) {

//     var image = findImage(element);
//     if (!image) {
//         return;
//     }
//     $(' #mainPicture > img ').attr('ng-src', image.img.src);
//     $('#mainPicture, h4').removeClass(hiddenClass);
//     $(exifDataContainer).html(image.exifData);

//     if (image.coord.x && image.coord.y && !map) {
//         map = new Map(mapSelector, image.coord);
//         $(mapSelector).removeClass(hiddenClass);
//         map.changeMapCoord(image.coord);
//     }
//     else if (image.coord.x && image.coord.y && map) {
//         map.changeMapCoord(image.coord);
//         $(mapSelector).removeClass(hiddenClass);
//     }
//     else {
//         $(mapSelector).addClass(hiddenClass);
//     }

// }


//     function findImage(element) {
//         var key = element.dataset.id;
//         return key ? imageCollection.get(key) : null;
//     }



//     function addDescriptionData(event) {

//     };


//     function createImage(event) {
//         var image = new NewImage(event.target.result);
//         $( ".container").append('<li>');
//         $( ".container li:last-child").append('<a>');
//         $( ".container li:last-child a").append(image.img);
//         imageCollection.set(image.id, image);
//         $('input.form-control.input-lg').val("");
//         $('.file').val("");
//         $('.container').removeClass('hidden');
//     };


//     function addFileToCollection(){
//         var file = document.querySelector('.file').files[0];
//         var reader  = new FileReader();
//         reader.onloadend = function (event) {
//            createImage(event);
//         }
//         if (file) {
//             reader.readAsDataURL(file); //reads the data as a URL
//         }
//     }



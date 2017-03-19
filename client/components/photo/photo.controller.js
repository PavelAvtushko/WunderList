import {URL} from '../../constants.js';
import EXIF from './exif/exif.js';




function NewImage(src) {
    this.id = 'img' + Date.now();
    this.img = new Image();
    this.img.src = src;
    this.img.dataset['id'] = this.id;
    this.description = '';
  //  this.coord = extractGPSData(this.img) || {};
   // this.exifData = extractExifData(this.img) || "";
}

let imageCollection = [];

class photoController {
    constructor($timeout) {
        this.file;
        this.imageCollection = imageCollection;
        this.$timeout = $timeout;
    }






    browse() {
        $('.file').trigger('click'); //искусственно вызывает клик;
        $('.file').on('change', () => {this.fileChange()});
    };

    fileChange() {
        $('.pathToFile').val($('.file').val().replace(/C:\\fakepath\\/i, ''));
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
    loadFile() {
        let file = document.querySelector('.file').files[0];
        this.addFileToCollection(file);//addFileToCollection();
        $('.file, .pathToFile').val('');
    }

    addFileToCollection(file) {
        let that = this;
        let reader  = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        };
        reader.onloadend = function (event) {
            that.$timeout(()=>{
                let image = new NewImage(event.target.result);
                that.imageCollection.push(image);
            }, 0);
        };       
    }
};

photoController.$inject = ['$timeout'];




    function extractGPSData(img) {
        var result;
        EXIF.getData(img, () => {
            var yCoord  = EXIF.getTag(img, 'GPSLongitude') || null;
            var xCoord = EXIF.getTag(img, 'GPSLatitude') || null;
            result = {
                        x: coordinatesToDecimal(xCoord),
                        y: coordinatesToDecimal(yCoord) 
                    }
        });
        return result;
    };

    function extractExifData(img) {

            var allMetaData = EXIF.getAllTags(img);
            return JSON.stringify(allMetaData, null, "\t");
    };

    function coordinatesToDecimal(number) {
        if (number) {
            return number[0].numerator + number[1].numerator /
                (60 * number[1].denominator) + number[2].numerator /
                (3600 * number[2].denominator);
        }
        return;
    };





function showImage(element) {

    var image = findImage(element);
    if (!image) {
        return;
    }
    $(' #mainPicture > img ').attr('ng-src', image.img.src);
    $('#mainPicture, h4').removeClass(hiddenClass);
    $(exifDataContainer).html(image.exifData);

    if (image.coord.x && image.coord.y && !map) {
        map = new Map(mapSelector, image.coord);
        $(mapSelector).removeClass(hiddenClass);
        map.changeMapCoord(image.coord);
    }
    else if (image.coord.x && image.coord.y && map) {
        map.changeMapCoord(image.coord);
        $(mapSelector).removeClass(hiddenClass);
    }
    else {
        $(mapSelector).addClass(hiddenClass);
    }

}


    function findImage(element) {
        var key = element.dataset.id;
        return key ? imageCollection.get(key) : null;
    }



    function addDescriptionData(event) {

    };


    function createImage(event) {
        var image = new NewImage(event.target.result);
        $( ".container").append('<li>');
        $( ".container li:last-child").append('<a>');
        $( ".container li:last-child a").append(image.img);
        imageCollection.set(image.id, image);
        $('input.form-control.input-lg').val("");
        $('.file').val("");
        $('.container').removeClass('hidden');
    };


    function addFileToCollection(){
        var file = document.querySelector('.file').files[0];
        var reader  = new FileReader();
        reader.onloadend = function (event) {
           createImage(event);
        }
        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
        }
    }



export default photoController;
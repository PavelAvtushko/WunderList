import EXIF from 'exif-js';


export default class ExifDataManager{

    extractGPSData(img) {
        let that = this;
        let result;
        EXIF.getData(img, function(){
            let yCoord  = EXIF.getTag(img, 'GPSLongitude') || null;
            let xCoord = EXIF.getTag(img, 'GPSLatitude') || null;
            result = { x: that._coordinatesToDecimal(xCoord),
                       y: that._coordinatesToDecimal(yCoord) 
                    };
        });
        return result;
    }

    extractExifData(img) {
        var allMetaData = EXIF.getAllTags(img);
        return JSON.stringify(allMetaData, null, "\t");
    }

    _coordinatesToDecimal(number) {
        if (number) {
            return number[0].numerator + number[1].numerator /
                (60 * number[1].denominator) + number[2].numerator /
                (3600 * number[2].denominator);
        }
        return;
    }
}


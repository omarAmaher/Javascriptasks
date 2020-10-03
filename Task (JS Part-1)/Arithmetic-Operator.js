//Day1: Arithmetic Operators//

function getArea( length, width ) {
    if ( length<1 || width<1 || length >1000 || width>1000 ){
        return undefined;
    }
    let area;
    area = length * width;
    return area;
}

function getPerimeter( length, width ) {
    if ( length<1 || width<1 || length >1000 || width>1000 ){
        return undefined;
    }
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}

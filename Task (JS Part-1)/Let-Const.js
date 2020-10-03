//Day1: Let & Const//

function main() {
    const PI = Math.PI;
    let r = readLine(parseFloat());    
    // Print the area of the circle:
    let area = PI * Math.pow(r,2) , perimeter = 2 * PI * r ;
    // Print the perimeter of the circle:
    console.log(area);
    console.log(perimeter);
}
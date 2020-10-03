//Day2: Conditional Statements: Switch//

function getLetter(s) {
    let letter;
    switch(s[0]){
        case 'a':
        case 'e':
        case 'o':
        case 'i':
        case 'u':
        letter='A';
        break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        letter="B";
        break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        letter ="C";
        break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 'v':
        case 't':
        case 'w':
        case 'x': 
        case 'y':
        case 'z' :
        letter="D";
        break;
    }
    return letter;
}
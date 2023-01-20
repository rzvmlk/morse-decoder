const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseString = expr;
   
    let result = [];

    for (let i=0; i<morseString.length; i=+10) {
        if (morseString.slice(i, i+1) == "*"){
            result.push(' ');
        } else {
            let letter = morseString.slice(i, i+10);
            let deshifr = '';
            for (j=0; j<letter.length; j+2){
                if (letter.slice(j,j+2) == '10'){
                    deshifr += '.' ;
                } else if(letter.slice(j,j+2) =='11'){
                    deshifr += '-' ;
                } 
            }
        result.push(MORSE_TABLE[deshifr])
        }
       
    } return (result.join())
   
}

module.exports = {
    decode
}
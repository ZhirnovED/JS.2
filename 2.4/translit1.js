var rus = ["а","б","в","г", "д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
var eng = ["a","b","v","g","d","e","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","h","c","ch","sh","sch", "-","i'", "-","e","yu","ya"];

function translit(text, engToRus) {

    let textTrans = "";

    for (var i=0; i < text.length; i++){
        let trans1 = text[i];
        if (engToRus){
            let trans2 = text.slice[i, 2];
            let trans3 = text.slice[i, 3];
            let trans1Index = eng.indexOf(trans1);
            let trans2Index = eng.indexOf(trans2);
            let trans3Index = eng.indexOf(trans3);
                if (trans3Index >= 0) {
                    textTrans += rus[trans3Index];
                }
                else if (trans2Index >= 0){
                    textTrans += rus[trans2Index];
                }
                else if (trans1Index >= 0){
                    textTrans += rus[trans1Index];
                }
                else {
                    textTrans += trans1;
                }
        }
        else {
            let trans1Index=rus.indexOf(trans1);
            if (trans1Index >= 0){
                    textTrans += eng[trans1Index];
            }
            else {
                textTrans += trans1;
            }
        }
       
    }
    return textTrans;
}

function rusEng () {
    let textRus = document.getElementById('text');
    let textEng = document.getElementById('text1');
    let trans = translit(textRus.value, false);
    textEng.value = trans;
}

function engRus () {
    let textRus = document.getElementById('text');
    let textEng = document.getElementById('text1');
    textRus.value = translit(textEng.value, true);
}   
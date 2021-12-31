function learnMore(x) {
    let prev = x.previousElementSibling;
    $(prev).slideToggle();
    x.innerText = prev.offsetHeight < 3 ? x.dataset['label2'] : x.dataset['label1'];
}



function audioToggle() {
    let t = 0;

    function out() {
        x = document.getElementById("play");
        t == 0 ? (x.play(), t++) : (x.pause(), t--);
    }
    return out;
}

let toggleAudio = audioToggle();


let headers = document.getElementsByTagName("h1");
let subHeaders = document.getElementsByTagName("h3");
let paras = document.getElementsByTagName("p");
let emph = document.getElementsByTagName("em");

// for (let e of emph) {
//     e.contentEditable = true;
// }
// for (let e of headers) {
//     e.contentEditable = true;
// }
// for (let e of subHeaders) {
//     e.contentEditable = true;
// }
// for (let e of paras) {
//     e.contentEditable = true;
// }

function saveText() {
    let headingText = [];
    let subHeadingText = [];
    let paraText = [];
    let emphText = [];

    for (let e of subHeaders) {
        subHeadingText.push(e.innerText);
    }
    for (let e of paras) {
        paraText.push(e.innerText);
    }
    for (let e of headers) {
        headingText.push(e.innerText);
    }
    for (let e of emph) {
        emphText.push(e.innerText);
    }


    sendPageText(emphText, headingText, subHeadingText, paraText);
}

function sendPageText(w, x, y, z) {
    $.post("php/pagetext.php", {
        headings: x,
        subHeadings: y,
        paras: z,
        emphs: w
    }, function(data, status) {
        console.log(data);
    })

}

function loadText() {
    pageHeadings.map(function(e, i, a) {
        headers[i].innerText = e;
    })
    subHeadings.map(function(e, i, a) {
        subHeaders[i].innerText = e;
    })
    pageParas.map(function(e, i, a) {
        paras[i].innerText = e;
    })
    pageEmphs.map(function(e, i, a) {
        emph[i].innerText = e;
    })
}
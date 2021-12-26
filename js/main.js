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
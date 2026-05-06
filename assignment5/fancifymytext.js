function makeBigger() {
    alert("Hello, world!");
    document.getElementById("mainText").style.fontSize = "24pt";
}

function applyStyle() {
    let textarea = document.getElementById("mainText");
    let isFancy = document.getElementById("fancy").checked;

    if (isFancy) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function mooText() {
    let textarea = document.getElementById("mainText");
    let text = textarea.value.toUpperCase();
    
    // Split by period to find sentences
    let parts = text.split(".");
    
    // For each sentence, add -MOO to the last word
    for (let i = 0; i < parts.length - 1; i++) {
        let sentence = parts[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            parts[i] = words.join(" ");
        }
    }
    
    textarea.value = parts.join(".");
}

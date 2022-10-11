let quoteData = [{ data: '"An Apple A Day Keeps A doc Away"' }, { data: '"The purpose of our lives is to be happy"' }, { data: `"Life is what happens when you're busy making other plans."` }]
let colors = [{ cdata: "cyan" }, { cdata: "azure" }, { cdata: "brown" }, { cdata: "yellow" }, { cdata: "purple" }]
let textColors = [{ ctdata: "darkgreen" }, { ctdata: "violet" }, { ctdata: "orange" }]

// const btn = document.getElementById("generate-btn");
// btn.addEventListener("click", function ())

function random() {
    let quotes = Math.floor(Math.random() * quoteData.length)
    // document.getElementById("randomquote").innerHTML = quotes
    document.getElementById("randomquote").textContent = quoteData[quotes].data;
    // setInterval(1000);
}

function randomColors() {
    let colours = Math.floor(Math.random() * colors.length)
    let textColours = Math.floor(Math.random() * textColors.length)

    document.getElementById("randomContainer").style.backgroundColor = colors[colours].cdata;

    if (document.getElementById("randomContainer").style.backgroundColor = colors[colours].cdata
    ) {
        document.getElementById("randomquote").style.color = textColors[textColours].ctdata;
        document.getElementById("text").style.color = textColors[textColours].ctdata;


    }
}
setInterval(random, 2000);
random();
randomColors();
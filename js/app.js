// DICO
var themes = [
    {"theme":"Série",
     "color":"#0a3d62",
     "result":"On va liquider cette année 2020 habillés comme à la télé !"},

     {"theme":"Dessin animé",
     "color":"#f6b93b",
     "result":"On va liquider cette année 2020 habillés comme dans un cartoon."},

     {"theme":"B.D.",
     "color":"#fad390",
     "result":"On va liquider cette année 2020 dessinés sur des planches !"},

     {"theme":"Anachronisme",
     "color":"#78e08f",
     "result":"On va liquider cette année 2020 comme Elon Musk à cheval."},

     {"theme":"Pays",
     "color":"#6a89cc",
     "result":"On va liquider cette année 2020 habillés comme .. comme un pays ?"},

     {"theme":"Disco",
     "color":"#b71540",
     "result":"On va liquider cette année 2020 sapés comme si on pouvait aller en discothèque"},

     {"theme":"Hippies",
     "color":"#079992",
     "result":"On va liquider cette année 2020 dans un groupe hippie, comme c'est affligeant"},
];
document.getElementById("noise").preload
document.getElementById("cheers").preload

//VAR CANVAS
var slices = themes.length
var sliceDeg = 360/slices
var deg = 0
var ctx = canvas.getContext('2d')
var width = canvas.width
var center = width/2
//VAR OF THE GAME
var wheel = document.getElementById("canvas")
var startButton = document.getElementById("button")
var degs = 0
var turns = 2000
var results = document.getElementById("result")

// CANVAS FOR THE WHEEL
function deg2rad(deg) {return deg * Math.PI/180}
function drawSlice(deg, color) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.moveTo(center, center)
    ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+sliceDeg))
    ctx.lineTo(center, center)
    ctx.fill()
}
function drawText(deg, text) {
    ctx.save()
    ctx.translate(center, center)
    ctx.rotate(deg2rad(deg))
    ctx.textAlign = "center"
    ctx.fillStyle = "#f1f2f6"
    ctx.font = 'bold 30px "Baloo"'
    ctx.fillText(text, 130, 10)
    ctx.restore()
}
for (i = 0; i < slices; i++) {
    drawSlice(deg, themes[i].color)
    drawText(deg+sliceDeg/2, themes[i].theme)
    deg += sliceDeg
}
//THE GAME


// THE SPIN
startButton.addEventListener("click", () => {
    document.getElementById("noise").play()
    startButton.style.pointerEvents = "none"
    degs = Math.floor(turns + Math.random() * turns)
    wheel.style.transition = "all 3.8s ease-in-out" // could do "rotation instead of all"
    wheel.style.transform = "rotate(" + degs + "deg)"
    wheel.classList.add("blur")
    results.textContent = ""
})
wheel.addEventListener("transitionend", () => {
    wheel.classList.remove("blur")
    startButton.style.pointerEvents = "auto"
    wheel.style.transition = "none"
    const actualDeg = degs % 360
    wheel.style.transform = "rotate(" + actualDeg + "deg)"
    //THE RESULT
        if ((sliceDeg * 0 <= actualDeg) && (actualDeg < sliceDeg * 1) ){
            results.textContent = themes[5].result
        }
        if ((sliceDeg * 1 < actualDeg) && (actualDeg < sliceDeg * 2) ){
            results.textContent = themes[4].result
        }
        if ((sliceDeg * 2 < actualDeg) && (actualDeg < sliceDeg * 3) ){
            results.textContent = themes[3].result
        }
        if ((sliceDeg * 3 < actualDeg) && (actualDeg < sliceDeg * 4) ){
            results.textContent = themes[2].result
        }
        if ((sliceDeg * 4 < actualDeg) && (actualDeg < sliceDeg * 5) ){
            results.textContent = themes[1].result
        }
        if ((sliceDeg * 5 < actualDeg) && (actualDeg < sliceDeg * 6) ){
            results.textContent = themes[0].result
        }
        if ((sliceDeg * 6 < actualDeg) && (actualDeg <= sliceDeg * 7) ){
            results.textContent = themes[6].result
        }
        setTimeout (function () {
            document.getElementById("cheers").play()
        },900)
})
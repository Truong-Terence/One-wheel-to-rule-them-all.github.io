// DICO
var themes = [
    {"theme":"Série",
     "color":"#0a3d62",
     "value":1,
     "result":"On couronnera cette année 2020 habillés comme dans une série"},

     {"theme":"Dessin animé",
     "color":"#f6b93b",
     "value":2,
     "result":"On couronnera cette année 2020 habillés comme dans un cartoon"},

     {"theme":"B.D.",
     "color":"#fad390",
     "value":3,
     "result":"On couronnera cette année 2020 habillés comme dans les B.D."},

     {"theme":"Anachronisme",
     "color":"#78e08f",
     "value":4,
     "result":"On couronnera cette année 2020 habillés comme Elon Musk à cheval"},

     {"theme":"Pays",
     "color":"#6a89cc",
     "value":5,
     "result":"On couronnera cette année 2020 habillés comme .. comme un pays ?"},

     {"theme":"Disco",
     "color":"#b71540",
     "value":6,
     "result":"On couronnera cette année 2020 habillés comme si on pouvait aller en discothèque"},

     {"theme":"Hippies",
     "color":"#079992",
     "value":7,
     "result":"On couronnera cette année 2020 dans un groupe hippie, comme c'est affligeant"},
];
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
var turns = 5000

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
    startButton.style.pointerEvents = "none"
    degs = Math.floor(turns + Math.random() * turns)
    wheel.style.transition = "all 3s ease-out" // could do "rotation instead of all"
    wheel.style.transform = "rotate(${degs}deg)"

})
wheel.addEventListener("transitionend", () => {
    
})
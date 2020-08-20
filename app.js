let health = 100
let enemyName = "Bob"
let hits = 0
let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan", "Kholgan", "Grug", "Hunter", "Darius", "Tezzert", "Gideon", "Amber", "Sarah", "Julie"];
let knockouts = 0
function slap() {
    health--
    hits++
    update()
}

function nameGenerator() {
    let random = Math.floor(Math.random() * (nameArray.length - .001))
    enemyName = nameArray[random]
}

function punch() {
    health -= 5
    hits++
    update()
}

function kick() {
    health -= 10
    hits++
    update()
}

function respawn() {
    health = 100
    nameGenerator()
    knockouts++
    update()
}

function update() {
    document.getElementById("health").innerText = health.toString()
    document.getElementById("enemyName").innerText = enemyName
    document.getElementById("hits").innerText = hits.toString()
    document.getElementById("knockouts").innerText = knockouts.toString()
    if (health <= 0) {
        respawn()
    }
}
nameGenerator()
update()
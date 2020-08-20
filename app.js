let health = 100
let enemyName = "EnemyName"
let hits = 0

function slap() {
    health--
    hits++
    update()
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

function update() {
    document.getElementById("health").innerText = health.toString()
    document.getElementById("enemyName").innerText = enemyName
    document.getElementById("hits").innerText = hits.toString()

}

update()
let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan", "Kholgan", "Grug", "Hunter", "Darius", "Tezzert", "Gideon", "Amber", "Sarah", "Julie"];

//Items
let weapon = [
    {
        name: "Training Sword",
        modifier: 1,
        rarity: 0,
        type: "weapon"
    },
    {
        name: "Copper Sword",
        modifier: 2,
        rarity: 1,
        type: "weapon"
    },
    {
        name: "Iron Sword",
        modifier: 3,
        rarity: 2,
        type: "weapon"
    },
    {
        name: "Steel Sword",
        modifier: 4,
        rarity: 3,
        type: "weapon"
    },
    {
        name: "Mythril Sword",
        modifier: 5,
        rarity: 4,
        type: "weapon"
    }]

let head = [
    {
        name: "Training Helmet",
        modifier: 1,
        rarity: 0,
        type: "head"
    },
    {
        name: "Copper Helmet",
        modifier: 2,
        rarity: 1,
        type: "head"
    },
    {
        name: "Iron Helmet",
        modifier: 3,
        rarity: 2,
        type: "head"
    },
    {
        name: "Steel Helmet",
        modifier: 4,
        rarity: 3,
        type: "head"
    },
    {
        name: "Mythril Helmet",
        modifier: 5,
        rarity: 4,
        type: "head"
    }]

let body = [
    {
        name: "Training Armor",
        modifier: 1,
        rarity: 0,
        type: "body"
    },
    {
        name: "Copper Armor",
        modifier: 2,
        rarity: 1,
        type: "body"
    },
    {
        name: "Iron Armor",
        modifier: 3,
        rarity: 2,
        type: "body"
    },
    {
        name: "Steel Armor",
        modifier: 4,
        rarity: 3,
        type: "body"
    },
    {
        name: "Mythril Armor",
        modifier: 5,
        rarity: 4,
        type: "body"
    }]
//End of Body

let pants = [
    {
        name: "Training Pants",
        modifier: 1,
        rarity: 0,
        type: "pants"
    },
    {
        name: "Copper Pants",
        modifier: 2,
        rarity: 1,
        type: "pants"
    },
    {
        name: "Iron Pants",
        modifier: 3,
        rarity: 2,
        type: "pants"
    },
    {
        name: "Steel Pants",
        modifier: 4,
        rarity: 3,
        type: "pants"
    },
    {
        name: "Mythril Pants",
        modifier: 5,
        rarity: 4,
        type: "pants"
    }]

//Boots
let boots = [
    {
        name: "Training Boots",
        modifier: 1,
        rarity: 0,
        type: "boots"
    },
    {
        name: "Copper Boots",
        modifier: 2,
        rarity: 1,
        type: "boots"
    },
    {
        name: "Iron Boots",
        modifier: 3,
        rarity: 2,
        type: "boots"
    },
    {
        name: "Steel Boots",
        modifier: 4,
        rarity: 3,
        type: "boots"
    },
    {
        name: "Mythril Boots",
        modifier: 5,
        rarity: 4,
        type: "boots"
    }]

let player = {
    strength: 1,
    hits: 0,
    dexterity: 1,
    knockouts: 0,
    inventory: {
        weapon: weapon[0],
        head: head[0],
        body: body[0],
        pants: pants[0],
        boots: boots[0],
    },
}

let enemy = {
    health: 50,
    maxHealth: 50,
    name: "Bob"
}


function nameGenerator() {
    let random = Math.floor(Math.random() * (nameArray.length - .001))
    enemy.name = nameArray[random]
}

function slap() {
    damage(1)
    player.hits++
    update()
}

function punch() {
    damage(5)
    player.hits++
    update()
    document.getElementById("punchButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("punchButton").removeAttribute("disabled")
    }, (10000 / (10 + player.dexterity)));

}

function kick() {
    damage(player.strength)
    player.hits++
    update()
    document.getElementById("kickButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("kickButton").removeAttribute("disabled")
    }, (40000 / (10 + player.dexterity)));
}

function lift() {
    player.strength++
    update()
}

function jog() {
    player.dexterity++
    update()
}

function devKill() {
    damage(enemy.maxHealth)
    update()
}

function damage(number) {
    enemy.health -= number * player.strength * player.inventory.weapon.modifier * player.inventory.head.modifier
}

function respawn() {
    player.knockouts++
    enemy.maxHealth = 100 * (player.knockouts)
    enemy.health = enemy.maxHealth
    nameGenerator()
    update()
}

function unlocks() {
    if (player.strength == 5) {
        document.getElementById("punchButton").removeAttribute("disabled")
    }
    if (player.strength == 10) {
        document.getElementById("kickButton").removeAttribute("disabled")
    }
    if (player.knockouts >= 1) {
        document.getElementById("liftButton").removeAttribute("disabled")
    }
    if (player.knockouts >= 5) {
        document.getElementById("jogButton").removeAttribute("disabled")
    }
}

function drawHealth() {
    let healthPercent = (enemy.health / enemy.maxHealth) * 100
    document.getElementById("healthbar").setAttribute("style", `width:${healthPercent}%`)
}

function drawItems() {
    const item = player.inventory
    document.getElementById("weapon").innerText = item.weapon.name + ` (${item.weapon.modifier})`
    document.getElementById("head").innerText = item.head.name + ` (${item.head.modifier})`
    document.getElementById("body").innerText = item.body.name + ` (${item.body.modifier})`
    document.getElementById("pants").innerText = item.pants.name + ` (${item.pants.modifier})`
    document.getElementById("boots").innerText = item.boots.name + ` (${item.boots.modifier})`
}

function lottery() {
    let luck = Math.floor(Math.random() * 100)
    let slotNumber = Math.floor(Math.random() * 4.99)
    let droppedItem
    let slot
    let targetedSlot
    switch (slotNumber) {
        case 0:
            slot = weapon;
            targetedSlot = player.inventory.weapon;
            break;
        case 1:
            slot = head;
            targetedSlot = player.inventory.head;
            break;
        case 2:
            slot = body;
            targetedSlot = player.inventory.body;
            break;
        case 3:
            slot = pants;
            targetedSlot = player.inventory.pants;
            break;
        case 4:
            slot = boots;
            targetedSlot = player.inventory.boots;
            break;
        default:
            break;
    }
    if (luck <= 50) {
        droppedItem = targetedSlot
        console.log("No Drop")
    }
    else if (luck < 75) {
        droppedItem = slot[1]
        console.log(droppedItem.name)
    }
    else if (luck < 89) {
        droppedItem = slot[2]
        console.log(droppedItem.name)
    }
    else if (luck < 97) {
        droppedItem = slot[3]
        console.log(droppedItem.name)
    }
    else if (luck < 100) {
        droppedItem = slot[4]
        console.log(droppedItem.name)
    }

    if (droppedItem.modifier > targetedSlot.modifier) {
        console.log(targetedSlot);
        targetedSlot = droppedItem
        console.log();
    }
}

function update() {
    document.getElementById("health").innerText = enemy.health.toString()
    document.getElementById("enemyName").innerText = enemy.name
    document.getElementById("hits").innerText = player.hits.toString()
    document.getElementById("knockouts").innerText = player.knockouts.toString()
    document.getElementById("strength").innerText = player.strength.toString()
    document.getElementById("dexterity").innerText = player.dexterity.toString()
    drawHealth()
    unlocks()
    drawItems()
    if (enemy.health <= 0) {
        lottery()
        respawn()
    }
}
nameGenerator()
update()
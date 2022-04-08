function magNumber(info){
    const wepMagazineCount = {
        PT92: 17,
        M4A1: 30,
        M16A2: 30,
        PSG1: 5
    }

    let bulletCount = info[1] * 3
    let gun = info[0]
    
    return Math.ceil(bulletCount / wepMagazineCount[gun])
}

magNumber(["M4A1", 8])
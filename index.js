
let apelidoDaHeroina = "  kaylane  "; 
let xp = 5.614; 

    let nivel
    if (xp <= 1.000) { nivel = "FERRO";
    } else if (xp >= 1.001 && xp <= 2.000) {nivel = "BRONZE";
    } else if (xp >= 2.001 && xp <= 5.000) {nivel = "PRATA"; 
    } else if (xp >= 5.001 && xp <= 7.000) {nivel = "OURO";
    } else if (xp >= 7.001 && xp <= 8.000) {nivel = "PLATINA";
    } else if (xp >= 8.001 && xp <= 9.000) {nivel = "ASCENDENTE";
    } else if (xp >= 9.001 && xp <= 10.000) {nivel = "IMORTAL";
    } else if (xp >= 10.000) {nivel = "RADIANTE";
    }

console.log(" o herói de nome " + apelidoDaHeroina + " está no nível de " + nivel + ".");




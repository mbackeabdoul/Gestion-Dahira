const CLE = 'dahira_data'

function lire() {
    const texte = localStorage.getItem(CLE)
    const donnees = JSON.parse(texte)
    return donnees
}

function ecrire(donnees) {
    const texte = JSON.stringify(donnees)
    localStorage.setItem(CLE, texte)
}

function initialiser(data) {
    const donnees = lire()
    if (donnees === null) {
        ecrire(data)
    }
}

function getDieuwrigne() {
    const donnees = lire()
    if (donnees === null) {
        return null
    }
    return donnees.dieuwrigne
}

function setDieuwrigne(dieuwrigne) {
    const donnees = lire()
    if (donnees === null) {
        return
    }
    donnees.dieuwrigne = dieuwrigne
    ecrire(donnees)
}

function creerSession(dieuwrigne) {
    const texte = JSON.stringify(dieuwrigne)
    sessionStorage.setItem('session', texte)
}

function getSession() {
    const texte = sessionStorage.getItem('session')
    const session = JSON.parse(texte)
    return session
}

function supprimerSession() {
    sessionStorage.removeItem('session')
}
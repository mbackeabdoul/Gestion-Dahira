const CLE = 'dahira_data'

const lire = () => JSON.parse(localStorage.getItem(CLE))

const ecrire = (donnee) => localStorage.setItem(CLE, JSON.stringify(donnee))

const initialiser = (data) => {
    if (!lire()) {
        ecrire(data)
    }
}

const getDieuwrigne = () => lire()?.dieuwrigne

const setDieuwrigne = (dieuwrigne) => {
    const donnee = lire() || { dieuwrigne: null, dahira: null, membres: [] }
    donnee.dieuwrigne = dieuwrigne
    ecrire(donnee)
}

const creerSession = (dieuwrigne) => sessionStorage.setItem('session', JSON.stringify(dieuwrigne))

const getSession = () => JSON.parse(sessionStorage.getItem('session'))

const supprimerSession = () => sessionStorage.removeItem('session')
const afficherPage = (idPage) => {
    document.querySelectorAll('.page')
        .forEach(p => p.classList.add('cache'))
    document.getElementById(idPage).classList.remove('cache')
}

fetch('donnes.json')
    .then(reponse => reponse.json())
    .then(data => {

        initialiser(data)

        document.getElementById('app').innerHTML = `
            ${rendreConnexion()}
            ${rendreInscription()}
            ${rendreDashboard()}
        `

        initConnexion()
        initInscription()
        initDashboard()

        if (getSession()) {
            afficherDashboard()
            afficherPage('dashboard-dieuwrigne')
        } else if (getDieuwrigne()) {
            afficherPage('page-connexion')
        } else {
            afficherPage('page-inscription')
        }
    })
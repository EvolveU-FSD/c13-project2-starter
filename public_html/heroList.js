import { getSuperheroes } from "./api.js"

export async function generateHeroList(element, setSelectedHeroId) {
    element.replaceChildren('Loading...')

    const superheroes = await getSuperheroes()

    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.append(tbody)
    tbody.insertAdjacentHTML("beforeend", 
        '<tr><th>Name</th><th>Powers</th></tr>'
    )
    superheroes.forEach((hero) => {
        const row = document.createElement('tr')
        row.insertAdjacentHTML("beforeend", 
            `<td>${ hero.name }</td><td>${ hero.powers.join(', ') }</td>`
        )    
        row.onclick = () => setSelectedHeroId(hero._id)
        tbody.append(row)
    })
    
    const refreshButton = document.createElement('button')
    refreshButton.append('Refresh')
    refreshButton.onclick = () => generateHeroList(element, setSelectedHeroId)

    element.replaceChildren(table, refreshButton)
}

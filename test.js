const nflTeams = [
    {name: 'Las Vegas Raiders', superBowlWins: 3 }, 
    {name: 'Denver Broncos', superBowlWins: 3 }, 
    {name: 'Pittsburgh Steelers', superBowlWins: 6 }, 
    {name: 'Minnesota Vikings', superBowlWins: 0 }, 
    {name: 'Atlanta Falcons', superBowlWins: 0 }, 
    {name: 'Los Angeles Chargers', superBowlWins: 0 }, 
    {name: 'Indianapolis Colts', superBowlWins: 2 }, 
    {name: 'Seattle Seahawks', superBowlWins: 1 }, 
    {name: 'San Francisco 49ers', superBowlWins: 5 }
]

    const mostSuperBowlWins = nflTeams.sort((teamA, teamB) => {
        return teamB.superBowlWins - teamA.superBowlWins || teamA.name.localeCompare(teamB.name)
    })

    console.log(mostSuperBowlWins)
function findMatching(drivers, search) {
    return drivers.filter((element) => element.toLowerCase().includes(search.toLowerCase()));
}

function fuzzyMatch(drivers, search){
    return drivers.filter((element) => element.toLowerCase().startsWith(search.toLowerCase()));
}

function matchName(drivers, search){
    return drivers.filter((element) => element.name.includes(search));
}
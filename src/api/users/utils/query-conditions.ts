export const queryConditions = (query) => {
    if(query.age){
        query.age = {
            $gte: query.age
        }
    }

    if (query.favoriteFoods && query.favoriteFoods.includes(query.favoriteFoods)) {
        query.favoriteFoods = query.favoriteFoods
    }

    return query
}
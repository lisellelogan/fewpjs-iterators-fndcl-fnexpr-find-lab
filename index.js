//accepts array(of JS obj) as an argument
//each object has two properties: year and result
//use find() to test each object to see if the result is "W"
    //will return the first matching win
//win should return year when win occurred
//if no win found, should return undefined

function superbowlWin(record){
    let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined
}

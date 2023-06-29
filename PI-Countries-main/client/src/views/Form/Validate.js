


export const validate = (completeForm)=>{

    let error = {};
    let infoName = completeForm.name;
    let infoDuration = completeForm.duration;
    let infoDifficulty = completeForm.difficulty;
    let infoSeason = completeForm.season;
    let infoCountries = completeForm.countries;
    let allSeason = /(winter|summer|autumn|spring)/;
    let only = /^\s$/;

    if(!infoName) error.name = "Name is required"
    else if (/[^A-Za-z0-9 ]+/g.test(infoName)) error.name = "The name cannot have special characters"
    else if(only.test(infoName)) error.name = "Can't send just blank space"

    if(!infoDifficulty) error.difficulty = "Difficulty is required"
    else if(infoDifficulty < 1 || infoDifficulty > 5) error.difficulty="Must be an integer between 1 and 5"
    else if(isNaN(infoDifficulty)) error.difficulty = "Must be a number"

    if(!infoDuration) error.duration = "Duration is required"
    else if(infoDuration < 1 || infoDuration > 12 ) error.duration = "Invalid duration, must be 1 hour to 12 hours"

    if(!infoSeason) error.season = "Season is required"
    else if(!allSeason.test(infoSeason) ) error.season = "Must have a valid season"

    if (infoCountries.length > 0 || !infoCountries ) error.countries = "Country is required"

    return error;
};
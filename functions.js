const fs = require('fs')
const chalk = require('chalk')

//json file name = dictionary

const alldata = () => {
    try{
        databuffer = fs.readFileSync('dictionary.json')
        dataString = databuffer.toString()
        return JSON.parse(dataString)
    }
    catch(e){
        return []
    }
}

const savefile = (file)=>{
    datastring = JSON.stringify(file)
    fs.writeFileSync('dictionary.json, datastring')
}

const listallfile = ()=>{
    const file = alldata()
    if(file.length === 0){
        console.log(chalk.bgWhite.red("No file available in dictionary"))
    }
    file.forEach(note => {
        console.log(chalk.bgWhite.blue(note.key))
    })
}

const readfile = (key)=>{
    const file = alldata()
    const readable = file.find((note)=>{
        if(note.key === key){
            console.log(chalk.bgWhite.black(note.key)),
            console.log(chalk.bgWhite.blue(note.title))
        }
        return file.key === key
    })
    if(!readable){
        console.log(chalk.bgRed.black("no file found"))
    }
}

const createfile = (key, value)=>{
    const data = alldata()
    const duplicatefile = data.find((note)=> (note.key === key))

    // checking value cap, key cap and dictionary size
    if(!duplicatefile && value.length<=(16) && key.length <=(32) && dictionary.length <= (1024*1024*1024)){
        data.push({
            key : key,
            value: value
        })
        
        savefile(data)
        console.log(chalk.bgGreen("New data added"))
    }else{
        console.log(chalk.bgBlue("Key name already exist!"))
    }
}

const deletefile = (key) =>{
    const files = alldata()
    const removefile = files.filter((note) => note.key !== key)
    if(removefile.length === files.length){
        console.log(chalk.bgRed('No such file found'))
    }else{
        savefile(removefile)
        console.log(chalk.bgGreen('file with key' + key + 'is deleted'))
    }
}

module.exports={
    alldata : alldata,
    savefile : savefile,
    listallfile : listallfile,
    readfile : readfile,
    createfile : createfile,
    deltefile : deletefile

}

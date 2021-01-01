const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./functions.js')



//creating add commanand

yargs.command({

    command : 'createfile',
    describe : 'Adding a new file!',
    builder : {
        key:{
            describe : 'key',
            demandOption : true,
            type : 'string'
        },
        value:{
            describe:'value',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log(argv)
        //console.log('Note Title : ' + argv.key)
        //console.log('Note body : ' + argv.value)
        notes.createfile(argv.key,argv.value)
    }
})

// creating remove command

yargs.command({
    command : 'deletefile',
    describe : 'Removing a note!',
    builder : {
        key:{
            describe : 'key',
            demandOption:true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('Removing a note!')
        notes.removenote(argv.key)
    }
})

//creating list command

yargs.command({
    command:'listallfile',
    describe:'listing all the notes',
    handler(){
        notes.listallfile()
        //console.log('listing all the notes')
    }
})

//creating read command

yargs.command({
    command:'readfile',
    describe:'reading a file',
    builder : {
        key : {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('reading a note')
        notes.readfile(argv.key)
    }
})
yargs.parse()

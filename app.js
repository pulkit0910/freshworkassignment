const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./functions.js')

// const msg1 = msg('pulkit')

// console.log(msg1)

// console.log(chalk.green.bold('Suceess!'))
// console.log(chalk.inverse('Suceess!'))
// console.log(chalk.bold('Suceess!'))

// console.log(validator.isURL('www.google.com'))
//  const command = process.argv[2]

//  if(command === 'add'){
//      console.log('adding note!')
//  }else if(command === 'remove'){
//     console.log('removing note !')
//  }

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
    command : 'delete',
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
    command:'list',
    describe:'listing all the notes',
    handler(){
        notes.listallfile()
        //console.log('listing all the notes')
    }
})

//creating read command

yargs.command({
    command:'read',
    describe:'reading a note',
    builder : {
        title : {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('reading a note')
        notes.readnote(argv.title)
    }
})
yargs.parse()
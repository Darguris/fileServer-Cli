const yargs = require('yargs')

const networkUtility = require('./networkUtility')

yargs.command({
    command: 'getFiles',
    describe: '---> Get the list of all files',
    handler() {
        networkUtility.getFiles();
    }
})

yargs.command({
    command: 'deleteFile',
    describe: '---> Delete a file on server, fileName is the required arguement for this command',
    builder: {
        fileName: {
            describe: '---> Name of the file you want to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        networkUtility.deleteFile(argv.fileName);
    }
})

yargs.command({
    command: 'uploadFile',
    describe: '---> Upload a file on server, filePath is the required arguement for this command',
    builder: {
        filePath: {
            describe: 'Path of file you want to upload',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        networkUtility.uploadFile(argv.filePath);
    }
})
yargs.parse()
const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')
const chalk = require('chalk')
const fileUrl = 'https://darguris-fileserver.herokuapp.com/files'

const getFiles = () => {
    axios.get(fileUrl)
        .then(res => {
            console.log(chalk.blue.bgWhite.bold('\nThe server has these files \n'))
            res.data.forEach(file => {
                console.log(chalk.bgRedBright.yellowBright.bold(file))
            })
            console.log();
        })
        .catch(err => {
            console.log(chalk.red.bold(err))
        })
}

const deleteFile = (fileName) => {
    axios.delete(fileUrl + '/' + fileName)
        .then(res => {
            console.log(chalk.blue.bgWhite.bold('\n File deleted successfully \n'))
        })
        .catch(err => {
            console.log(chalk.red.bold(err))
        })
}

const uploadFile = (filePath) => {
    // console.log(filePath)
    const form_data = new FormData();
    form_data.append("fileName", fs.createReadStream(filePath));

    const request_config = {
        headers: form_data.getHeaders(),
        data: form_data
    };

    axios.post(fileUrl, form_data, request_config)
        .then(res => {
            console.log(chalk.blue.bgWhite.bold('\n File uploaded successfully \n'))
        })
        .catch(err => {
            console.log(chalk.red.bold(err))
        })
}

module.exports = {
    getFiles: getFiles,
    deleteFile: deleteFile,
    uploadFile: uploadFile
}
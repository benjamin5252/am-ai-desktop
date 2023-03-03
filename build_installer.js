const {MSICreator} =require('electron-wix-msi');
const path = require('path')

// input dir
const APP_DIR = path.resolve(__dirname, './output/AmarylloAI-win32-x64')

//output dir
const OUT_DIR = path.resolve(__dirname, './windows_installer')

// instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory : APP_DIR,
    outputDirectory: OUT_DIR,

    description: "Amaryllo AI",
    exe: "AmarylloAI",
    name: "AmarylloAI",
    manufacturer: "Amaryllo",
    version: "1.0.0",
    iconPath: path.resolve(__dirname, './dist/favicon.ico'),
    ui: {
        chooseDirectory: true
    }
})

msiCreator.create().then(()=>{
    msiCreator.compile();
})
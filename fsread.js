

const fs = require('fs');
const path = require('path');

// 获取目录的所有资源（文件、文件夹）
function fsReadHandle(dir) {    
    return new Promise(function (resolve, reject) {
        
        fs.readdir(dir, function (err, files) {
            if (err) {
                reject(false)
            }else{
                resolve(files)
            }
        })
    });
}

// 判断资源是文件还是文件夹
function statPromisify(fileName){
    return new Promise((resolve, reject) => {
        fs.stat(fileName, (err, stats) => {
            if (err) {
                reject(err);
            }            
            let nameArr = fileName.split('\\');
            if (stats.isDirectory()) {
                // DirItem.push(file)
                resolve({isDirectory:true,fileName:nameArr[nameArr.length-1]});
            }
            if (stats.isFile()) {
                // FileItem.push(file)
                resolve({isDirectory:false,fileName:nameArr[nameArr.length-1]});
            }
        });
    });
}


function listDir(dir) {
    let DirItem = []
    let FileItem = []
    fsReadHandle(dir).then(files=>{
        let arrFile = files.map(item=>{
            const dirPath = path.join(__dirname,item)
            return statPromisify(dirPath)
        })
        Promise.all(arrFile).then(arrFileAll=>{
            DirItem = arrFileAll.filter(item=>item.isDirectory).map(item=>item.fileName);
            FileItem = arrFileAll.filter(item=>!item.isDirectory).map(item=>item.fileName);
            console.log(DirItem)
            console.log(FileItem)
        })
        
    })
}

listDir('C:/Users/Dell/Desktop/prototype')
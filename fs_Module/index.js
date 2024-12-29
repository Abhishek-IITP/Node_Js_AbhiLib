const fs=require('fs');

// const res=fs.writeFileSync(__dirname +'/abc.txt','hello sir')


// console.log(fs)

// let data = fs.readFileSync(__dirname + '/abc.txt', 'utf-8',
//     (err, data) => {
//         if (err)throw err;
//         else
//             console.log(data)
//     })
// console.log(data)

//{fs.unlink(__dirname + '/abc.txt')} //delete file

fs.appendFile(__dirname + '/abc.txt', 'hello sir how are you im under the water', (err) => {
    if (err) throw err;
    console.log('file updated')
})

// fs.unlink(__dirname + '/kksj.js', (err) => {    //delete file
//     if (err) throw err;
//     console.log('file deleted')
// })

fs.readdir(__dirname + '/abc.txt', {encoding: "utf-8", recursive:true},(err, files) => {
    if (err) throw err;
    console.log(files)
})  


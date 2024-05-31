import fs = require('fs')

function loadJSON(filename:string, cb:(error:Error|null,data?:any)=>void){

    fs.readFile(filename, (err,data)=>{

        if(err){ 
            cb(err)
        }
        else{
            try {
                var parsed = JSON.parse(data.toString())
            } catch (error:any) {
                return cb(error)
            } 

            return cb(null, parsed)
            
        }
    })
}


function readFileAsync(file:string):Promise<any>{

    return new Promise((resolve,reject)=>{

        fs.readFile(file, (err,data)=>{
            if(err) reject(err);
            else resolve(data.toString())
        })
    })
}

function* gen(){
    
     yield 'kadima'
}

let ite = gen()


console.log(ite.next())
console.log(ite.next())
console.log(ite.next())


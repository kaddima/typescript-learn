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

loadJSON('./package.json', (err,data)=>{
    console.log('our callback called')
    if(err){

        console.log(err.message)
    }else{

        console.log(data)
        
    }

})
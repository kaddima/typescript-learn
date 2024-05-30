import { LocalDataSource } from "./data/localDataSource";
import { DomDisplay } from "./domDisplay";

let ds = new LocalDataSource()

async function displayData(): Promise<HTMLElement>{
    let display = new DomDisplay()

    display.props = {
        products:await ds.getProducts("name"),
        order:ds.order
    }

    return display.getContent()
    
}

document.onreadystatechange = ()=>{

    if(document.readyState === "complete"){
        displayData().then(el=>{

            let rootEl = document.getElementById("app")!

            rootEl.innerHTML = ""
            rootEl.appendChild(el)
        })    
    }
}



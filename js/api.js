import getData from "./dom.js";


let api = "http://localhost:3000/api/data"

async function getUser(){
    try {
        const {data} =await axios.get(api)
        console.log(data);
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

export default getUser
import getData from "./dom.js";


let api = "http://localhost:3000/api/data"
export let searchData = []
let Ikea = document.querySelector(".Ikea")
let Marcos = document.querySelector(".Marcos")
let Caressa = document.querySelector(".Caressa")
let Liddy = document.querySelector(".Liddy")
let all = document.querySelector(".all")

async function getUser() {
    try {
        const { data } = await axios.get(api)
        searchData = data
        console.log(data);
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

all.onclick = () => {
    All()
}
Ikea.onclick = () => {
    Ike()
}
Marcos.onclick = () => {
    Marco()
}
Caressa.onclick = () => {
    Caress()
}
Liddy.onclick = () => {
    Lidd()
}

async function All() {
    try {
        let response = await fetch(api);
        let data = await response.json();
        getData(data)
    }
    catch (error) {
        console.log(error);
    }
}

async function Ike() {
    try {
        let response = await fetch(api);
        let data = await response.json();

        let cop = data.filter((el) =>
            el.fields.company.includes(Ikea.value)
        );

        getData(cop);
    } catch (error) {
        console.log(error);
    }
}
async function Marco() {
    try {
        let response = await fetch(api);
        let data = await response.json();

        let cop = data.filter((el) =>
            el.fields.company.includes(Marcos.value)
        );

        getData(cop);
    } catch (error) {
        console.log(error);
    }
}
async function Caress() {
    try {
        let response = await fetch(api);
        let data = await response.json();

        let cop = data.filter((el) =>
            el.fields.company.includes(Caressa.value)
        );

        getData(cop);
    } catch (error) {
        console.log(error);
    }
}
async function Lidd() {
    try {
        let response = await fetch(api);
        let data = await response.json();

        let cop = data.filter((el) =>
            el.fields.company.includes(Liddy.value)
        );

        getData(cop);
    } catch (error) {
        console.log(error);
    }
}

async function rang(val) {
    try {
        let response = await fetch(api);
        let data = await response.json();

        data = data.filter((el) =>
            el.fields.price / 100 <= val
        );
        getData(data);
    } catch (error) {
        console.log(error);
    }
}

async function deletUser(id) {
    try {
        const { data } = await axios.delete(`${api}/${id}`)
        getUser();
    } catch (error) {
        console.log(error);
    }
}

export default getUser
export { rang, deletUser }
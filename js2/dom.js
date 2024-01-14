import getUser, { searchData, rang, deletUser } from "./api.js"


let box = document.querySelector(".box")
let kolichestvo = document.querySelector(".cnt")
let range = document.querySelector(".ranges")
let cart = document.querySelector(".cart")
let priceValue = document.querySelector(".price-value")
let cartClose = document.querySelector(".cart-close")
cartClose.onclick = () => {
    cart.close()
}
let cartItems = document.querySelector(".cart-items")
let sum = document.querySelector(".sum")
let suma = 0
let arr = []
let cartCheckout = document.querySelector(".cart-checkout")
range.onclick = () => {
    priceValue.innerHTML = "Value: " + range.value + "$"
    rang(range.value)
}

export default function getData(data) {
    box.innerHTML = ""
    data.forEach((el) => {
        let container = document.createElement("div")
        container.classList.add("container")

        let image = document.createElement('img')
        image.src = el.fields.image[0].url
        image.classList.add("image")

        let namePrice = document.createElement("div")
        namePrice.classList.add("namePrice")

        let name = document.createElement("h1")
        name.innerHTML = el.fields.name


        let searchInp = document.querySelector(".search")
        searchInp.oninput = () => {
            let datasearch = searchData.filter((el) => {
                return el.fields.name.toLowerCase().includes(searchInp.value.toLowerCase())
            })
            getData(datasearch)
        }

        let price = document.createElement("p")
        price.innerHTML = "$" + el.fields.price / 100

        let info = document.createElement('img')
        info.src = "img/Remove-bg.ai_1704808935554.png"
        info.classList.add("info")
        info.onclick = () => {
            localStorage.setItem("image", el.fields.image[0].url);
            localStorage.setItem("name", el.fields.name);
            localStorage.setItem("price", el.fields.price);
            localStorage.setItem("color", el.fields.colors[0])
            localStorage.setItem("company", el.fields.company)
            localStorage.setItem("id", el.id)
            window.location.href = "comfy.html"
        }

        // localStorage.setItem("image", el.fields.image[0].url)
        // localStorage.setItem("name", el.fields.name);
        // localStorage.setItem("price", el.fields.price);    localStorage.setItem("name", el.fields.name);

        let cartShop = document.createElement("img")
        cartShop.src = "img/Remove-bg.ai_1704832925275.png"
        cartShop.classList.add("info2")
        let number = document.createElement("p")
        number.classList.add("number")
        cartShop.onclick = () => {
            cart.showModal()
            let cnt = 0
            arr.push(el.id)
            for (let i = 0; i <= arr.length; i++) {
                if (arr[i] == el.id) {
                    cnt++
                    number.innerHTML = cnt
                }
            }
            let img = document.createElement("img")
            img.src = el.fields.image[0].url
            img.classList.add("img")

            let name = document.createElement("h1")
            name.innerHTML = el.fields.name

            let namePrice = document.createElement("div")
            namePrice.classList.add("namePrices")

            let price = document.createElement("p")
            price.innerHTML = "$" + el.fields.price / 100

            sum.innerHTML = "$" + el.fields.price / 100
            if (cnt == 2) {
                sum.innerHTML = "$" + el.fields.price / 100 * number.innerHTML
            }

            let plus = document.createElement("button")
            plus.classList.add("plus")
            plus.innerHTML = "+"
            plus.onclick = () => {
                number.innerHTML++
                alert.innerHTML++
                kolichestvo.innerHTML++
                sum.innerHTML = "$" + el.fields.price / 100 * number.innerHTML
                console.log(number);
            }

            cartCheckout.onclick = () => {
                suma += el.fields.price / 100 * number.innerHTML
                sum.innerHTML = "$" + suma
            }

            alert.innerHTML++



            let minus = document.createElement("button")
            minus.innerHTML = "-"
            minus.classList.add("minus")
            minus.onclick = () => {
                number.innerHTML--
                kolichestvo.innerHTML--
                sum.innerHTML = "$" + (el.fields.price / 100) * number.innerHTML
                if (number.innerHTML <= 0) {
                    number.innerHTML = 0
                    kolichestvo.innerHTML = 0
                }
                console.log(number);
            }

            let divCnt = document.createElement("div")
            divCnt.classList.add("divCnt")
            let cartItem = document.createElement("div")
            cartItem.classList.add("cartItem")

            let delet = document.createElement("h1")
            delet.innerHTML = "x"
            delet.classList.add("delet")
            delet.onclick = () => {
                cartItem.innerHTML = ""
            }


            kolichestvo.innerHTML = cnt

            if (cnt == 1) {
                divCnt.append(plus, number, minus)
                namePrice.append(name, price, divCnt)
                cartItem.append(img, namePrice, delet)
                cartItems.appendChild(cartItem)
            }
        }
        let cartSho = document.querySelector("#cartShop")
        cartSho.onclick = () => {
            cart.showModal()
        }


        namePrice.append(name, price)
        container.append(image, namePrice, info, cartShop)
        box.appendChild(container)

    });
}
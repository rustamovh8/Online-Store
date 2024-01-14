
let kolichestvo = document.querySelector(".cnt")
let cart = document.querySelector(".cart")
let cartItems = document.querySelector(".cart-items")
let cartClose = document.querySelector(".cart-close")
cartClose.onclick = () => {
    cart.close()
}
let arr = []
let suma = 0
let sum = document.querySelector(".sum")
let cartShop = document.querySelector("#cartShop")
let cartCheckout = document.querySelector(".cart-checkout")

export default function get() {
    let declare =
    {
        url: localStorage.getItem('image'),
        name: localStorage.getItem('name'),
        price: localStorage.getItem('price'),
        colors: localStorage.getItem('color'),
        company: localStorage.getItem('company'),
        id: localStorage.getItem('id'),
        desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge "
    }

    let boxImg = document.querySelector(".boxImg")
    let boxInfo = document.querySelector(".boxInfo")
    let text = document.querySelector(".produc")

    let img = document.createElement("img")
    img.src = declare.url
    img.classList.add("img")

    let divProduct = document.createElement("div")
    divProduct.classList.add("divProduct")

    let name = document.createElement("h1")
    name.innerHTML = declare.name

    let company = document.createElement("h2")
    company.innerHTML = "BY " + declare.company

    let divPricecolor = document.createElement("div")
    divPricecolor.classList.add("divPricecolor")

    let price = document.createElement("h1")
    price.innerHTML = "$" + declare.price / 100

    let color = document.createElement("div")
    color.style.backgroundColor = declare.colors
    color.classList.add("color")

    let desc = document.createElement("p")
    desc.innerHTML = declare.desc
    desc.classList.add("desc")

    let btnAdd = document.createElement("button")
    btnAdd.innerHTML = "ADD TO CART"
    btnAdd.classList.add("btnAdd")
    let number = document.createElement("p")
    number.classList.add("number")
    btnAdd.onclick = () => {
        cart.showModal()
        let cnt = 0
        arr.push(declare.id)
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] == declare.id) {
                cnt++
                number.innerHTML = cnt
            }
        }
        let img = document.createElement("img")
        img.src = declare.url
        img.classList.add("img")

        let name = document.createElement("h1")
        name.innerHTML = declare.name

        let namePrice = document.createElement("div")
        namePrice.classList.add("namePrices")

        let price = document.createElement("p")
        price.innerHTML = "$" + declare.price / 100


        let plus = document.createElement("button")
        plus.classList.add("plus")
        plus.innerHTML = "+"
        plus.onclick = () => {
            number.innerHTML++
            alert.innerHTML++
            sum.innerHTML = "$" + declare.price / 100 * number.innerHTML
            kolichestvo.innerHTML++
            console.log(number);
        }

        cartCheckout.onclick = () => {
            sum.innerHTML = "$" + declare.price / 100 * number.innerHTML
        }

        alert.innerHTML++

        sum.innerHTML = "$" + declare.price / 100
        if (cnt == 2) {
            sum.innerHTML = "$" + declare.price / 100 * number.innerHTML
        }

        let minus = document.createElement("button")
        minus.innerHTML = "-"
        minus.classList.add("minus")
        minus.onclick = () => {
            number.innerHTML--
            kolichestvo.innerHTML--
            sum.innerHTML = "$" + declare.price / 100 * number.innerHTML
            if (number.innerHTML <= 0) {
                number.innerHTML = 0
                kolichestvo.innerHTML = 0
            }
            console.log(number);
        }
        let cartItem = document.createElement("div")
        cartItem.classList.add("cartItem")

        let divCnt = document.createElement("div")
        divCnt.classList.add("divCnt")

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
    cartShop.onclick = () => {
        cart.showModal()
    }

    text.innerHTML = "Home/ " + declare.name

    text.appendChild(name)
    boxImg.appendChild(img)
    divProduct.append(name, company)
    divPricecolor.append(price, color)
    boxInfo.append(divProduct, divPricecolor, desc, btnAdd)

}

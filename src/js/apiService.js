let models

async function reqGet(dado){
    const apiUrl = "https://currency-exchange-services.onrender.com"
    fetch(`${apiUrl}/api/v1/`, {
        method: 'post', 
        headers: {
            "Content-Type": "application/json" 
          
        },
        body: JSON.stringify(dado)})
       .then(response => response.json())
       .then(data => {
        models = data

        console.log(models)
      
    
        let status = data.status
       // status = JSON.stringify(status)
       let atualizacao =  data.data.atualizacao
       let {day, day2, day3, day4} = data.cotacoespassadas

       /*

        day: { day: 'quarta', price: '11 233.7 AOA ' },
    day2: { day2: 'terca', price: '11 233.33 AOA ' },
    day3: { day3: 'segunda', price: '11 366.34 AOA ' },
    day4: { day4: 'domingo', price: '11 064.11 AOA ' }

    */
     
        let result = data.data.taxasInformal.result
        let {compraMinima, compraNormal,compraMaxima} = result
       result = JSON.stringify(result)
        data = JSON.stringify(data)
        
        document.querySelector("#max").innerHTML = compraMaxima
        document.querySelector("#min").innerHTML = compraMinima
        document.querySelector("#nor").innerHTML = compraNormal
        document.querySelector("#atualizadas").innerHTML = atualizacao

        document.querySelector("#a1").innerText = day.day
        document.querySelector("#a2").innerText = day2.day2
        document.querySelector("#a3").innerText = day3.day3
        document.querySelector("#a4").innerText = day4.day4
        /*

        */
        document.querySelector("#b1").innerText = dado.value
        document.querySelector("#b2").innerText = dado.value
        document.querySelector("#b3").innerText = dado.value
        document.querySelector("#b4").innerText = dado.value

        /*

        */

        document.querySelector("#c1").innerText = day.price
        document.querySelector("#c2").innerText = day2.price
        document.querySelector("#c3").innerText = day3.price
        document.querySelector("#c4").innerText = day4.price
       
       
       })
       .catch(error => {
        console.error('Erro:', error);
       });
}




  
async function main() {

let coin;

const send = document.querySelector("#send")

send.addEventListener("submit", (data)=>{

    let value = data.srcElement[0].value
    coin = value
    console.log(coin);
    let typecoin = document.querySelector("#cointype").value
    let typecoin2 = document.querySelector("#cointype2").value
  typecoin =  typecoin.toUpperCase()
  typecoin2 = typecoin2.toUpperCase()
    document.querySelector("#origincoin").innerHTML = typecoin
    document.querySelector("#fromcoin").innerHTML = typecoin2
    
    document.querySelector("#tableorigincoin").innerText = typecoin
document.querySelector("#tablefromcoin").innerText = typecoin2
document.querySelector("#a1").innerText = "erer"
    const dado = {
        coin: typecoin,
        conversionto:typecoin2,
        value: coin
    }
    document.querySelector("#defaulCoin").innerHTML = coin
    reqGet(dado)

    data.preventDefault()
})
if(coin == " "|| coin == undefined || coin == null){
    
     coin = document.querySelector("#valor").value
    document.querySelector("#defaulCoin").innerHTML = coin
    let typecoin = document.querySelector("#cointype").value
    let typecoin2 = document.querySelector("#cointype2").value

    typecoin =  typecoin.toUpperCase()
  typecoin2 = typecoin2.toUpperCase()
    document.querySelector("#origincoin").innerHTML = typecoin 
    document.querySelector("#fromcoin").innerHTML = typecoin2 
document.querySelector("#tableorigincoin").innerText = typecoin
document.querySelector("#tablefromcoin").innerText = typecoin2


  

    const dado = {
        coin: typecoin,
        conversionto:typecoin2,
        value: coin
    }
    document.querySelector("#defaulCoin").innerHTML = coin
    reqGet(dado)
}
console.log(coin)


    
}

main()
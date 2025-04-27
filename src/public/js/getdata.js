
async function reqGet(dado){
    fetch('https://currency-exchange-services.onrender.com/api/v1/', {
        method: 'post', 
        headers: {
            "Content-Type": "application/json" 
          
        },
        body: JSON.stringify(dado)})
       .then(response => response.json())
       .then(data => {
    
        let status = data.status
       // status = JSON.stringify(status)
       let atualizacao =  data.data.atualizacao
        
        let result = data.data.taxasInformal.result
        let {compraMinima, compraNormal,compraMaxima} = result
       result = JSON.stringify(result)
        data = JSON.stringify(data)
        const texto = dado.status
        console.log(texto)
        document.querySelector("#max").innerHTML = compraMaxima
        document.querySelector("#min").innerHTML = compraMinima
        document.querySelector("#nor").innerHTML = compraNormal
        document.querySelector("#atualizadas").innerHTML = atualizacao
       
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

    const dado = {
        coin: "rub",
        conversionto:"aoa",
        value: coin
    }
    document.querySelector("#defaulCoin").innerHTML = coin
    reqGet(dado)

    data.preventDefault()
})
if(coin == " "|| coin == undefined || coin == null){
     coin = document.querySelector("#coin").value
    document.querySelector("#defaulCoin").innerHTML = coin

    const dado = {
        coin: "rub",
        conversionto:"aoa",
        value: coin
    }
    document.querySelector("#defaulCoin").innerHTML = coin
    reqGet(dado)
}
console.log(coin)


    
}

main()
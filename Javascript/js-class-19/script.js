

const container = document.querySelector('#container')
async function callingApi() {
    const result = await fetch('https://fakestoreapi.com/products');
    let res = await result.json()
    console.log(res);


    res.map((card) => {
        container.innerHTML += `<div class="p-2 shadow-md border w-[200px] flex justify-center flex-col items-center">
            <img class="w-[100px]" src="${card.image}" alt="" srcset="">
            <p>title: ${card.title}</p>
            <p>price: ${card.price}</p>

        </div>`
    })
}


// Method of Apis
// 1. Get get data from api
// 2. Post send data to backend by post api
// 3. Patch (for update data)
// 4. Delete (Delete the data)
// 5. Put (update small data)
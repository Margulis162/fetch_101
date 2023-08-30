const url = new URL("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
const lst = getElementById("the_list");
console.log(url);

function dataGetter() {
    fetch(url).then(
    resp => {
        if(!resp.ok)throw new Error("someting went wrong");
        return resp.json();
    }
).then( {"name", "price"} =>{
const 
}

)
.catch(err=>{console.warn});
}
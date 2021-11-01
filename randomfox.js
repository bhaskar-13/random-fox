//Dom for creation of html element
document.body.innerHTML = `<div class="main-container">
                          <h3 class="header">Random Fox</h3>
                          <button type="submit" onclick="getdata()" class="btn btn-primary"> Get Random Fox Image</button>
                          <div class="display">
                          <img class="image1"src="https://randomfox.ca/images/101.jpg">
                          </div>
                          <div>
                          <p>This Website displays random fox image</p>
                          </div>
                         </div>`

//Asyc way to get data from rest api
async function getdata() {
    try {
    
        const data = await fetch(`https://randomfox.ca/floof/`);
        const user = await data.json();
        const display= document.querySelector(".display");
        display.innerHTML=`<img class="image" src="${user.image}" alt="Randomimage">`
    }
    catch (e) {
        console.log(e, "Error");
    }
}



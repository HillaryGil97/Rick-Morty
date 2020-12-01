const printData = response =>{
    const wrapper = document.createElement('article')
    const name = document.createElement('h1')
    const image = document.createElement('img')
    const id = document.createElement('p')
    //const dana = document.createElement('h1')

    name.innerHTML = response.name
    id.innerHTML = response.id
    image.setAttribute('src',response.image)
    wrapper.appendChild(name)
    wrapper.appendChild(image)
    wrapper.appendChild(id)
    const container = document.getElementById('container')
    container.appendChild(wrapper)
}

function loadDoc (){
    //1
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        //2
        if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText).results
            console.log(response)
            //Las funciones que queremos que se ejecute
            //ToDo: printData()
            response.forEach(element => {
                printData(element)
            })
        }
    }
    //3
    xhttp.open('GET', 'https://rickandmortyapi.com/api/character')
    //4
    xhttp.send()
}

loadDoc()
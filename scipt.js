// recuperiamo le temperature in modo dinamico

let index = 0;

const getbooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
      .then((response) => {
        console.log(response)
        if (response.ok) {
          // trasformo la response nel JSON del meteo
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto nella chiamata di rete')
          // mi auto-lancio nel blocco catch!
        }
      })
      .then((bookdata) => {
        console.log(bookdata)
        writebook(bookdata, index)
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", function(){
            index ++
          writebook(bookdata, index)
        })
      })
      .catch((err) => {
        console.log('ERRORE!', err)
      })
      
  }
  
const writebook = function(books,i){
    const cardimg = document.querySelector(".card-img-top")
    cardimg.setAttribute("src", `${books[i].img}`)
    const cardtitle = document.querySelector(".card-title")
    cardtitle.innerHTML = `${books[i].title}`
    const cardprice = document.querySelector(".price")
    cardprice.innerHTML = `${books[i].price} $`
}

  getbooks()

 
const key = "bByPReOKKldzbYCKBsEsa7FCjBr2epG8CzQnBAV8ICc"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const btnShowMore = document.getElementById("show-more-btn")

let query = ``
let page = 1

async function getImages() {
  query = searchBox.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${key}&per_page=12`
  const res = await fetch(url)
  const data = await res.json()

  if (page === 1) {
    searchResult.innerHTML = ""
  }

  const results = data.results

  results.map((result) => {
    const image = document.createElement("img")
    image.src = result.urls.small
    const imgLink = document.createElement("a")
    imgLink.href = result.links.html
    imgLink.target = "_blank"

    imgLink.appendChild(image)
    searchResult.appendChild(imgLink)
  })
  btnShowMore.style.display = "block"
  //console.log(data)
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault()
  page = 1
  getImages()
})

btnShowMore.addEventListener("click", () => {
  page++
  getImages()
})

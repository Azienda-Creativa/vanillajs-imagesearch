const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const btnShowMore = document.getElementById("show-more")
import { config } from "./config"

let query = new String()
let page = new Number()

const getData = async () => {
  query = searchBox.value
  const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}$client_id=${config.IMG_KEY}`)
  !res.ok && "Error fetching API"
  const data = await res.json()
  console.log(data)
}

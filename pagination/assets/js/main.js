const nav = document.getElementById('nav')
const content = document.getElementById('content')
let pageIndex = 0
let itemsPerPage = 5
let products = []
async function getDataAsync() {
  await fetch('https://northwind.vercel.app/api/products')
    .then((res) => res.json())
    .then((data) => {
      content.innerHTML = ''
      for (
        let i = pageIndex * itemsPerPage;
        i < pageIndex * itemsPerPage + itemsPerPage;
        i++
      ) {
        if (!data[i]) break
        const item = document.createElement('div')
        item.innerHTML = data[i].name
        content.append(item)
      }
      nav.innerHTML = ''
      for (let i = 0; i < data.length / itemsPerPage; i++) {
        const span = document.createElement('span')
        span.innerHTML = i + 1
        span.addEventListener('click', function (e) {
          pageIndex = e.target.innerHTML - 1
          content.innerHTML = ''
          for (
            let i = pageIndex * itemsPerPage;
            i < pageIndex * itemsPerPage + itemsPerPage;
            i++
          ) {
            if (!data[i]) break
            const item = document.createElement('div')
            item.innerHTML = data[i].name
            content.append(item)
          }
        })
        nav.append(span)
      }
    })
}
getDataAsync()

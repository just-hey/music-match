console.log('working');
const key = 'Mzk4M2Y2ZGQtZTczYS00NGUzLTg2MmQtMzc0ZGFiZmJiYzhl'

const request = axios.get(`https://api.napster.com/v2.2/tracks/top?apikey=${key}`)

request.then(result => {
  const tracks = result.data.tracks
  tracks.forEach(track => {
    console.log(track);
    const list = document.querySelector('.list-group')
    list.innerHTML += `<li><a href="${track.previewURL}">${track.name}</a> by ${track.artistName}</li>`
  })
})

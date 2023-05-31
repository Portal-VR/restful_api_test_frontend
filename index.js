const MAIN_API_URL = 'http://87.242.105.165:5000'

const fetchPosts = async () => {
  let result = {}
  await fetch(MAIN_API_URL + '/post')
    .then(response => response.json())
    .then(json => result = json)
  return result
}

const setPosts = (posts) => {
  const postsDiv = document.getElementById('posts_div')
  posts.forEach(post => {
    const id = document.createElement('p')
    id.textContent = 'PostId: ' + post.id

    const title = document.createElement('p')
    title.textContent = 'PostTitle: ' + post.title

    const description = document.createElement('p')
    description.textContent = 'PostDescription: ' + post.description

    const element = document.createElement('div')
    element.className = 'post'
    element
      .appendChild(id)
      .appendChild(title)
      .appendChild(description)
    postsDiv.appendChild(element)
  })
}

const init = async () => {
  const data = await fetchPosts()
  console.log(data)
  setPosts(data.posts)
}

init()
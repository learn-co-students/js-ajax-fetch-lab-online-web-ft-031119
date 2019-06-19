// Week 1 code
fetch('https://api.github.com/users/cjbrock')
  .then(function(result){
  return result.json()
})
.then(function(data){
  console.log(data)
  $('#user').append("<h1>" + data.name + "</h1><h3>" + data.url + "</h3>")
})


// Fetch Methods
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Bob',
      body: 'is awesome',
      userId: 2
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  
  // Change method for patch
  
  // DELETE
  
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  
  // Will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json))

  // equivalent to /comments?postId=1
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(json => console.log(json))
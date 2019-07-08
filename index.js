const baseURL = 'https://api.github.com';
const user = 'estorey11';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return f9e0a35f70bb85c519e64c75e06d06c0fec36e9c
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
      .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  
  fetch(
    `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
      .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const jsonIssues= fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  document.getElementById('issues').innerHTML=jsonIssues;
}

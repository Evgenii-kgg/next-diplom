
export const netWorkService = ({ url, method, body }) => {
  const name = body ? JSON.stringify(body) : null

  return fetch(` http://localhost:7070/api/${url}`, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: name
  }).then(response => response.json())
}

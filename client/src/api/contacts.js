const API_URL = "http://localhost:5000/api/contacts/"

// Get all contacts
export async function getPhonebooksAPI() {
  return fetch(API_URL)
  .then(response => response.json())
  .then(data => data)
  .catch(e => console.log(e))
}

// Add new contact
export async function postPhonebookAPI(phonebook) {
  return fetch(API_URL,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(phonebook)
  })
  .then(response => {
    return response.json()
  })
  .then(data => data)
  .catch(e => console.log(e))
}

// Get Single Contact
export async function getSinglePhonebookAPI(id) {
  return fetch(API_URL+`/${id}`)
  .then(response => response.json())
  .then(data => data)
  .catch(e => console.log(e))
}

// Update contact
export async function patchPhonebookAPI(contact) {
  const { _id: id } = contact
  return fetch(API_URL+`/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  })
  .then(response => response.json())
  .then(data => data)
  .catch(e => console.log(e))
}

// Delete contact
export async function deletePhonebookAPI(id) {
  return fetch(API_URL+`/${id}`,{
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => data)
  .catch(e => console.log(e))
}

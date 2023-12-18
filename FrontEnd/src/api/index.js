//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#enviando_datos_json

const API_URL = 'http://localhost:8000/api';

// READ
export function read() {
    return fetch(`${API_URL}/tasks`).then((response) => response.json());
}

// CREATE
export function create(data) {
    return fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

//UPDATE
export function update(id, data) {
    return fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

// DELETE

export function remove(id) {
    return fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Only parse as JSON if the response has content
            return response
                .text()
                .then((text) => (text ? JSON.parse(text) : {}));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

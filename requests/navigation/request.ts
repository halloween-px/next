const API_URL = '/api'

export const getNavigationRequest = () => {
    return fetch(`${API_URL}/navigation`)
        .then(res => res.json())
}
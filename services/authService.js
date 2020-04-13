import decode from 'jwt-decode';

export function isLoggedIn () {
    const token = getToken();
    if (token) {
        return !isTokenExpired(token);
    } else {
        return false;
    }
}

export function isTokenExpired(token) {
    if (token) {
        try {
            const decoded = getProfile(token);
            return decoded.exp < Date.now() / 1000;
        } catch (err) {
            return false;
        }
    }
}

export function getToken() {
    return window.localStorage.getItem('idToken');
}

export function logout() {
    window.localStorage.removeItem('idToken');
}

export function getProfile(token) {
    if (process.env.REACT_APP_DUMMY_DATA === 'true')
        return {
            given_name: 'Dummy',
            family_name: 'User'
        };
    return decode(token);
}

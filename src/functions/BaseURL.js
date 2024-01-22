export const currCountryCode = localStorage.getItem('curr-country');
export const baseURL = `https://backend.valureach.com/api`;

export const getUserData = async (token) => {
    const response = await fetch(`${baseURL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};
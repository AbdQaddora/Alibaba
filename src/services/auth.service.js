export const BASE_URL = "https://react-tt-api.onrender.com";
export const LOCAL_STORAGE_KEY = 'ALIBABA_SHOP_LOCAL_STORAGE_KEY';

export const signupService = async (name, email, password, rememberMe = false) => {
    try {
        const res = await fetch(`${BASE_URL}/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await res.json();

        if (data._id) {
            if (rememberMe) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
            }
            return data;
        } else {
            return { error: data.message }
        }

    } catch (err) {
        return { error: err.message }
    }
}

export const loginService = async (email, password, rememberMe = false) => {
    try {
        const res = await fetch(`${BASE_URL}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json();
        if (data._id) {
            if (rememberMe) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
            }
            return data;
        } else {
            return { error: data.message }
        }
    } catch (error) {
        return { error: error.message }
    }
}

export const logoutService = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

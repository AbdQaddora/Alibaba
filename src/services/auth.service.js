const STORAGE_KEY = "ALIBABA_GSG_TASK_AUTH";

class Auth {
    constructor() {
        if (localStorage.getItem(STORAGE_KEY)) {
            this.auth = JSON.parse(localStorage.getItem(STORAGE_KEY));
        } else if (sessionStorage.getItem(STORAGE_KEY)) {
            this.auth = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
        } else {
            this.auth = null;
        }
    }

    login = async (rememberMe = false) => {
        // !TODO: API CALL
        const auth = { userId: "", token: "" };
        if (rememberMe) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
        } else {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
        }

        this.auth = auth;
        return this.auth;
    }

    logout = () => {
        if (localStorage.getItem(STORAGE_KEY)) {
            localStorage.removeItem(STORAGE_KEY);
        }
        this.auth = null;
    }

    isAuth = () => {
        if (this.auth) {
            return true;
        }
        return false;
    }
}
const auth = new Auth();

export default auth;



class StorageHelperSingleton {

    public getAccessToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    public setAccessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    public setRefreshToken(token: string) {
        localStorage.setItem('refreshToken', token);
    }

    public clear() {
        window.localStorage.clear();
    }

    private static instance: StorageHelperSingleton;

    public static getInstance(): StorageHelperSingleton {
        if (!StorageHelperSingleton.instance) {
            StorageHelperSingleton.instance = new StorageHelperSingleton();
        }

        return StorageHelperSingleton.instance;
    }

}

export const StorageHelper = StorageHelperSingleton.getInstance();
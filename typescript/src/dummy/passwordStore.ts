const passwordStore: Map<string, string> = new Map();
passwordStore.set('web', 'admin123');

export default {
    addPassword(key: string, value: string) {
        passwordStore.set(key, value);
    },
    getPassword(key: string): string | undefined {
        return passwordStore.get(key);
    }
}
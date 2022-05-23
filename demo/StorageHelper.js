class StorageHelper {
    constructor(saveKey) {
      this.key = saveKey
    }
    save(value) {
      localStorage.setItem(this.key, JSON.stringify(value));
    }
    load() {
        return JSON.parse(localStorage.getItem(this.key));
    }
}




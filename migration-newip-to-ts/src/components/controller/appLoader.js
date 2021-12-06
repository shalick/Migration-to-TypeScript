import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '08fb5442cc4b41a3b7e211b5078e5cba', 
        });
    }
}

export default AppLoader;

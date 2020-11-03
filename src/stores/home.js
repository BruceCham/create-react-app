import { observable, action } from 'mobx';

class HomeStore {
    @observable title = 'this is home page'
    @action changeTitle(title) {
        this.title = title
    }
}

export default HomeStore;

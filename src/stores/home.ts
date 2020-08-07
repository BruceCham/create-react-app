import { observable, action } from 'mobx';

class HomeStore {
    @observable title = 'this is home page'
    @action changeTitle(title: string) {
        this.title = title
    }
}

export default HomeStore;

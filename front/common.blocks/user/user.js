import {Store} from '../redux/Store';
import {reducer} from './reducer';
import UserView from './UserView';

const blockName = 'user';

const store = new Store(reducer);
const userView = new UserView(document.querySelector(`.${blockName}`), store);

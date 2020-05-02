import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './modules/app';
import { ThemeState } from './modules/theme';

Vue.use(Vuex);

export interface IRootState {
    app: IAppState;
    theme: ThemeState;
}

export default new Vuex.Store<IRootState>({});

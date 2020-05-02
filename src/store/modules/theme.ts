import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';


export interface ThemeState {
    menuBg?: string;
    menuText?: string;
    menuActiveText?: string;
}


@Module({ dynamic: true, store, name: 'theme' })
class Theme extends VuexModule implements ThemeState {
    public menuBg?: string = '#304156';
    public menuText?: string = '#bfcbd9';
    public menuActiveText?: string = '#409EFF';
    public currentType = 'dark';

    private theme = {
        light: {
            menuBg: undefined,
            menuText: undefined,
            menuActiveText: undefined,
        },
        dark: {
            menuBg: '#304156',
            menuText: '#bfcbd9',
            menuActiveText: '#409EFF',
        },
    };

    @Action
    public SetTheme(type: 'light'|'dark') {
        this.SET_TYPE(type);
        this.SET_MENUBG(this.theme[type].menuBg);
        this.SET_MENUTEXT(this.theme[type].menuText);
        this.SET_MENUACTIVETEXT(this.theme[type].menuActiveText);
    }

    @Mutation
    private SET_MENUBG(menuBg?: string) {
        this.menuBg = menuBg;
    }

    @Mutation
    private SET_MENUTEXT(menuText?: string) {
        this.menuText = menuText;
    }

    @Mutation
    private SET_MENUACTIVETEXT(menuActiveText?: string) {
        this.menuActiveText = menuActiveText;
    }

    @Mutation
    private SET_TYPE(type: string) {
        this.currentType = type;
    }
}

export const ThemeModule = getModule(Theme);

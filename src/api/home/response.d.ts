declare namespace ApiRes {

    export interface User {
        userName: string
        permissions: Permission[]
    }

    interface Permission {
        path: string,
        name: string,
        meta: { 
            icon: string
        },
        children?: Permission[]
    }

    export type Menus = TopMenu[]
    
    interface TopMenu {
        path: string,
        meta: {
            title: string,
            icon?: string,
        },
        children?: ChildrenMenu[]
    }

    interface ChildrenMenu {
        path: string,
        component: string,
        meta: {
            title: string,
            icon?: string,
        },
        children?: ChildrenMenu[]
    }
}
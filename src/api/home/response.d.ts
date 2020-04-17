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
}
export default [

    {
        menu_title: "Dashboard",
        menu_icon: "fa fa-home",
        path: "/admin",
        child_routes: null
    },
    {
        menu_title: "Pages",
        menu_icon: "fa fa-address-book",
        child_routes: [
            {
                menu_title: "Register",
                menu_icon: "fa fa-angle-double-left",
                path: "/admin/register",
            },
            {
                menu_title: "Login",
                menu_icon: "fa fa-angle-double-left",
                path: "/admin/login",
            },
            {
                menu_title: "404",
                menu_icon: "fa fa-angle-double-left",
                path: "/404",
            },
            {
                menu_title: "500",
                menu_icon: "fa fa-angle-double-left",
                path: "/500",
            },
        ]
    },
    {
        menu_title: "Category",
        menu_icon: "fa fa-book",
        path: "/admin/category/all"
    },
    {
        menu_title: "Product",
        menu_icon: "fa fa-newspaper-o",
        child_routes: [
            {
                menu_title: "All",
                menu_icon: "fa fa-pie-chart",
                path: "/admin/product/all"
            },
            {
                menu_title: "Create",
                menu_icon: "fa fa-cloud-upload",
                path: "/admin/product/new"
            },

        ]
    },


]
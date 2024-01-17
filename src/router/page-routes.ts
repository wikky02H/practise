import { lazy } from "react";

enum PageRoutes {
    // Public Routes
    SignInPage = "/login",

    // Private Routes
    DashboardPage = "/dashboard",
}
export default PageRoutes;

export const publicRoutes = [
    {
        path: PageRoutes.SignInPage,
        componentPath: lazy(() => import("../pages/public/SignUpPage")),
    }
];

export const privateRoutes = [
    {
        path: PageRoutes.DashboardPage,
        componentPath: lazy(() => import("../pages/private/DashboardPage")),
    },
];

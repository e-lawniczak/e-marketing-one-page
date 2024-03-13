import { HomePage } from "../pages/HomePage"
import { MainLayout } from "./Layout"

export interface ProjetLink {
    path: string,
    element: any,
    isVisible: boolean,
    label: string
}
export const baseRoot = "https://localhost:7013/api"
export const projectComponents = [
    {
        label: "Liquid Energy",
        path: "/",
        element: <MainLayout>
            <HomePage />
        </MainLayout>,
        isVisible: true,

    },
    {
        label: "O nas",
        path: "/",
        element: <MainLayout>
            <></>
        </MainLayout>,
        isVisible: true,

    },
    {
        label: "Promocja",
        path: "/",
        element: <MainLayout>
            <></>
        </MainLayout>,
        isVisible: true,

    },
   
] as ProjetLink[]
import { AboutUs } from "../pages/AboutUs"
import { AskUs } from "../pages/AskUs"
import { GamePage } from "../pages/GamePage"
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
        path: "/o-nas",
        element: <MainLayout>
            <AboutUs />
        </MainLayout>,
        isVisible: true,

    },
    {
        label: "Promocja",
        path: "/promocja",
        element: <MainLayout>
            <GamePage />
        </MainLayout>,
        isVisible: true,

    },
    {
        label: "Zapytaj nas",
        path: "/zapytaj",
        element: <MainLayout>
            <AskUs />
        </MainLayout>,
        isVisible: true,

    },

] as ProjetLink[]
import NavbarPublic from "./Navbar"
import FooterPage from "./Footer"
import HomePage from "./Home"
import JobsPopuler from "./JobsPopuler"
import JobsPremium from "./JobsPremium"
export default function HomePageMain() {
    return (
        <>
            <NavbarPublic />
            <HomePage />
            <JobsPopuler />
            <JobsPremium />
            <FooterPage />
        </>
    )
}
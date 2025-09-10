import NavbarPublic from "./Navbar"
import FooterPage from "./Footer"
import HomePage from "./Home"
import JobsPopuler from "./JobsPopuler"
import JobsPremium from "./JobsPremium"
import Candidates from "./Candidate"
export default function HomePageMain() {
    return (
        <>
            <NavbarPublic />
            <HomePage />
            <JobsPopuler />
            <JobsPremium />
            <Candidates />
            <FooterPage />
        </>
    )
}
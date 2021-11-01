import React from "react"
import Banner from "../Banner"
import "./HomeScreen.css"
import Nav from "../Nav"
import requests from "../Requests"
import Row from "../Row"
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navbar */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovie} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovie} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovie} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovie} />
            <Row title="Documentraries" fetchURL={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen

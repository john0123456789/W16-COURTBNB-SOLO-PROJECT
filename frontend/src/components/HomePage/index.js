import './HomePage.css'

function HomePage() {
    return (
        <>
        <h1 className="home-title">Come hit some balls at courtbnb!</h1>
        <h2 className="home-courts">Featuring GRAND SLAM courts!</h2>
        <ul className="home-scene">
            <ul>
                <img className="home-img" src="https://www.reuters.com/resizer/Wwg3SgQERfDLdTw7wfJYBUDhHVQ=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6O7SHTMCWJM2VBGVX2BZPXX7ZM.jpg"/>
                <ul className="home-txt">Wimbledon</ul>
            </ul>
            <ul>
                <img className="home-img" src="https://www.gonomad.com/wp-content/uploads/2014/06/Roland-Garros-aerial-view.jpg"/>
                <ul className="home-txt">Roland Garros</ul>
            </ul>
            <ul>
                <img className="home-img" src="https://i0.wp.com/ministryofsport.com/wp-content/uploads/2019/07/Australian-Open-courts-700x450.jpg?resize=700%2C450&ssl=1"/>
                <ul className="home-txt">Australian Open</ul>
            </ul>
            <ul>
                <img className="home-img" src="https://newscdn2.weigelbroadcasting.com/TP7ls-1585670103-160879-blog-hypatia-h_d3b310c97b84b89a980d5d35a4ae82d8-h_51cf19c7d13b209f019cab7fc8127e3d-300.JPG"/>
                <ul className="home-txt">US Open</ul>
            </ul>
        </ul>
        <ul className="review-boxes">
            <h3 className="home-review1">"Some of the best courts I've ever played on came from courtbnb"-Roger Federer</h3>
            <h3 className="home-review2">"I wouldn't have been able to win Roland Garros all these years without courtbnb"-Rafael Nadal</h3>
            <h3 className="home-review3">"First class courts, for a first class champion like me"-Novak Djokovic</h3>
        </ul>
        </>
    )
}



export default HomePage;

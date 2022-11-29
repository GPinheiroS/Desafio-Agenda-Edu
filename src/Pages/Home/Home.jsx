import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MovieList from '../../Components/MovieList/MovieList';


const Home = () => {
    return (
        <div>
            <Header />
            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
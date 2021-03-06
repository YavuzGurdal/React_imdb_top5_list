import React, { Component } from 'react';
import Category from './Category';
import { CardGroup } from 'react-bootstrap';
import Movie from './Movie';

const categories = [
    {
        id: 1,
        image: '/images/history.jpg',
        category: 'History',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 2,
        image: '/images/sport.jpg',
        category: 'Sport',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 3,
        image: '/images/music.jpg',
        category: 'Music',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 4,
        image: '/images/mystery.jpg',
        category: 'Mystery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 5,
        image: '/images/crime.jpg',
        category: 'Crime',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
]

const movieCategoryTop5 = {
    history: [[1, "Schindler's List", 8.9, 1993, "awesome movie, advice to all"],
    [2, "Harakiri", 8.7, 1962, "awesome movie, advice to all"],
    [3, "Ayla: The Daughter of War", 8.6, 2017, "awesome movie, advice to all"],
    [4, "Braveheart", 8.3, 1995, "awesome movie, advice to all"],
    [5, "Amadeus", 8.3, 1984, "awesome movie, advice to all"]],

    sport: [[1, "Dangal", 8.4, 2016, "awesome movie, advice to all"],
    [2, "The Flying Sikh", 8.2, 2013, "awesome movie, advice to all"],
    [3, "Paan Singh Tomar", 8.2, 2012, "awesome movie, advice to all"],
    [4, "Warrior", 8.2, 2011, "awesome movie, advice to all"],
    [5, "Chak de! India", 8.2, 2007, "awesome movie, advice to all"]],

    music: [[1, "Whiplash", 8.5, 2014, "awesome movie, advice to all"],
    [2, "The Pianist", 8.5, 2002, "awesome movie, advice to all"],
    [3, "Coco", 8.4, 2017, "awesome movie, advice to all"],
    [4, "Amadeus", 8.3, 1984, "awesome movie, advice to all"],
    [5, "Green Book", 8.2, 2018, "awesome movie, advice to all"]],

    mystery: [[1, "Spirited Away", 8.6, 2001, "awesome movie, advice to all"],
    [2, "The Green Mile", 8.6, 1999, "awesome movie, advice to all"],
    [3, "Se7en", 8.6, 1995, "awesome movie, advice to all"],
    [4, "The Prestige", 8.5, 2006, "awesome movie, advice to all"],
    [5, "The Usual Suspects", 8.5, 1995, "awesome movie, advice to all"]],

    crime: [[1, "The Godfather", 9.2, 1972, "awesome movie, advice to all"],
    [2, "Joker", 9.0, 2019, "awesome movie, advice to all"],
    [3, "The Dark Knight", 9.0, 2008, "awesome movie, advice to all"],
    [4, "The Godfather - Part II", 9.0, 1974, "awesome movie, advice to all"],
    [5, "Pulp Fiction", 8.9, 1994, "awesome movie, advice to all"]]
}

class GenelView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: false,
            movies: []
        }
    }

    kategoriDegistir = childdanGelenCategory => {

        let newDisplay = this.state.display ? true : true

        this.setState({
            display: newDisplay,
            // display: ! this.state.display, // mevcut durumun tersini yapacak. yani display true ise false,
            // false ise true yapacak. 
            movies: movieCategoryTop5[childdanGelenCategory]
        })
    }

    render() {

        return (
            <div className="container">
                <CardGroup>
                    {
                        // burdaki item her dongude categories icindeki bir objecti temsil ediyor.yani onun degerini
                        // aliyor.her dongude yazdigimiz fonksiyona gore islem yapiliyor. item burda map()'in 
                        // ozelliginden dolayi ilk dongude arrayin ilk elemenini, sonraki donguse arrayin sonraki
                        // elemanini aliyor ve fonksiyon icindeki islemleri arrayin elemanlarina otomatik uyguluyor.
                        categories.map(item =>
                            <Category key={item.id}
                                image={item.image}
                                category={item.category}
                                description={item.description}
                                kategoriAl={this.kategoriDegistir}
                            />
                        )
                        // burda mesela image={item.image} yazdigimizda, <Cotegory /> Componentindeki props.image
                        // yazan yere item.image'i gonderiyorum. burda yazdigim aslinda gonderdigim data'nin alt
                        // Componentte nereye gidecegini yazmak.Bunlarida props vasitasiyla yapiyoruz.
                    }
                </CardGroup>

                <Movie movieList={this.state.movies} tabloGoster={this.state.display} />

            </div>
        );
    }
}

export default GenelView;


  // "homepage": "https://yavuzgurdal.github.io/React_imdb_top5_list/",
  // "name": "imdb_top5_list",
  // "version": "0.1.0",

//   "predeploy": "npm run build",
//     "deploy": "gh-pages -d build",

// yarn global add serve
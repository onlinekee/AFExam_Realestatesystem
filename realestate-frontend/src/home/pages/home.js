import React, {useState, useEffect} from "react";
import ImageSlider from "../components/ImageSlide";
import {getFilteredProducts} from "../productHelper";
import {useParams, Link} from 'react-router-dom'
import NewHouse from '../components/NewHouse';
import HouseCard from "./housecard";
const Home = () => {

    const params = useParams();
    let totalSize = useState(0);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(4);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(1);
    const [filteredResults, setFilteredResults] = useState([]);

    const loadProducts = () => {
        
        getFilteredProducts(skip, limit).then(data => {

            if (data.error) {
                setError(data.error);
            } else {
                console.log(data);
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });

    };

    const loadMore = () => {
        let toSkip = skip + limit;
       
        getFilteredProducts(toSkip, limit).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const LoadMore = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more...
                </button>
            )
        );
    };


    const showAlertEmpty = () => {
        console.log(totalSize);
        totalSize = totalSize + size;
        return (
            totalSize === 0 && (
                <div className='container'>
                    <div className="alert bg-danger d-flex justify-content-center" role="alert">
                        No Results! Try again
                    </div>
                </div>
            )
        );
    };

    useEffect(() => {

        loadProducts(skip, limit);
        console.log(size)
    }, []);


  return (
    <div>
        <div style={{marginTop:'-15px'}}>
            <ImageSlider />
            <hr />
            {/* <NewHouse /> */}
        </div>
        <hr/>
        <div className="container-fluid">
          <center>
            <h1 className="pt-5">Houses</h1>
          </center>
          <div className="row mt-4 m-5 d-flex justify-content-center">
            {filteredResults.map((h, i) => (
                
              <div key={i} className="row m-2 ">
                  {console.log(h._id)}
                <Link to={"/house/" + h._id} style={{ textDecoration: "none" }}>
                  <HouseCard house={h} id={h._id}/>
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      
      </div>
  );
};


export default Home;

import Title from '../components/title/Title';
import MetaDate from '../components/MetaData';
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <>
            <section id="products" className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="https://dub01pap003files.storage.live.com/y4mBx0HAp6A4J9yiyQiMtoKWsrfiJ_OCzVPEjHfy263GdQVaL2RpNVtmtisSx1YEWu1zrYDVqrEDxnS4XnKt_7qeMj0Z2RCQTx0nW5N4q5eei168R2zCS4_WQImrLkDvq64LJNlK_KRJp2QTRKnlFEOAaI7Q8OwA6YyiLJ-pvr6oceit3VCKmYDmVd6TKqXHYwN2nkRmhZNrmS9RWl699oA6ChRY8OzloHFaG09oq-d21M?encodeFailures=1&width=192&height=230"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam 1080p HD Indoor Wireless Smart Home Camera</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <span id="no_of_reviews mx-3">(5 Reviews)</span>
                                </div>
                                <p className="card-text">$965.67</p>
                                <a href="#" id="view_btn" className="btn btn-block">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

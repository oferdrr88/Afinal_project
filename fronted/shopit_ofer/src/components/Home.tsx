import Title from './title/Title';

import MetaData from './metaData';

function Home() {
    return (
        <>
            <>
                <div className="container  container-fluid">
                    <div className="">
                        <MetaData title={'on line animall'} />
                        <Title main="Animall World" sub="The online product store" />
                    </div>
                </div>

                <section id="products" className="container mt-5">
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                                <img className="card-img-top mx-auto" src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <div className="rating-outer">
                                            <div className="rating-inner"></div>
                                        </div>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$45.67</p>
                                    <a href="#" id="view_btn" className="btn btn-block">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div> */}

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

                        {/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                                <img className="card-img-top mx-auto" src="https://m.media-amazon.com/images/I/813oF-FY01L._AC_UY218_.jpg" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">Fujifilm Instax Mini Instant Film Twin Pack (White)</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$125.57</p>
                                    <a href="#" id="view_btn" className="btn btn-block">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* 
                        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                                <img className="card-img-top mx-auto" src="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">AmazonBasics High-Speed HDMI Cable</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$75.56</p>

                                    <a type="button" href="#" id="view_btn" className="btn btn-block">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                                <img className="card-img-top mx-auto" src="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">AmazonBasics High-Speed HDMI Cable, 6 Feet</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$75.56</p>
                                    <a href="#" id="view_btn" className="btn btn-block">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </>
        </>
    );
}

export default Home;

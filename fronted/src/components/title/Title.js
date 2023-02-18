import '../title/title.css';

function Title({ main, sub }) {
    return (
        <>
            <h2 className="text-center my-3  t_d">
                {main}
                <br />
                <i className="bi bi-cart4"></i>
                <br />
                <small className="">{sub}</small>
            </h2>
        </>
    );
}

export default Title;

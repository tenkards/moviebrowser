import Hero from "./Hero";


const Home = () => { //() is an anonymous arrow function, so it can be writen as a component
    return (
      <>
        <Hero text="Immerse yourself in movies" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Bejskeo ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsam assumenda veniam, vel inventore, nihil odio hic ipsum, voluptatum cupiditate ut totam magnam molestias recusandae sequi blanditiis quia architecto placeat.
                </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Home;
  
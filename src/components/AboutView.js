import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              ipsam assumenda veniam, vel inventore, nihil odio hic ipsum,
              voluptatum cupiditate ut totam magnam molestias recusandae sequi
              blanditiis quia architecto placeat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;

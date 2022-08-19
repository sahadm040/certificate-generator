import React from "react";

function About() {
  return (
    <div className="container my-5" style={{ height: "600px" }}>
      <div className="row justify-content-center my-5">
        <div className="text-center pt-3 text-secondery h2">
          <h1
            className="text-center pt-3 text-secondery h2"
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            "OSPERB INNOVATIONS"
            
          </h1>
          <p>
            Website and web application development company. Osperb Innovations
            is a south Indian company located at Malappuram district of Kerala
            known as God’s own country, focusing on innovative IT solutions.
          </p>

          <a
            className="about-link"
            href="https://osperb.com/"
            style={
              {
                textDecoration: "none",
                // marginLeft: "345px",
              }
            }
          >
            {" "}
            Website
          </a>
          <p><b>Address</b><br/>
          3rd floor, Daliya KPees Avenue Near collector bungalow, Malappuram - Perinthalmanna Rd, Up Hill, Malappuram, Kerala 676505
          </p>
          <h1>24/7 Help Desk</h1>
          <h2>Contact us:9562110055</h2>
        </div>
      </div>
    </div>
  );
}

export default About;

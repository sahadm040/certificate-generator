import React from "react";

function Footer() {
  return (
    <div>
      <div  style={{ borderTop: "2px solid gray",
          margin: " 30px 100px 0px 100px", width:""}}>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"10px"
         
        }}
      >
        
        <section className="bottom-footer">
          <div className="container">
            <p className="mb-0">Osperb © All Rights Reserved - 2022</p>
          </div>
        </section>
      </footer>
      </div>
    </div>
  );
}

export default Footer;

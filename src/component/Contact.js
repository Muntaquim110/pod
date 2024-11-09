import React from "react";
import "./comp.css";

const Contact = () => {
    return <div>
      <h1 className="head">Contact Us</h1>
      <div  className="f">
        <form>
          <label>First Name:</label>
          <input type="text" name="first_name" />
          <br />
          <label>Last Name:</label>
          <input type="text" name="last_name" />
          <br />
          <label>E-mail</label>
          <input type="email" name="email" />
          <br />
          <label>Phone Number:</label>
          <input type="tel" name="phone_number" />
          <br />
          <label>enter your query</label>
          <input  type="textbox"  name="enter your query" />
          <br />

          <input className="button" type="submit" value="Submit" />


        </form>
    

      

      </div>

    </div>;
  };
  export default Contact;
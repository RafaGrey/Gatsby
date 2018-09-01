import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello people!</h1> 
      <p>Welcome this my new site of Gatsby.</p>
      <p>Now go to build something interesting.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
      </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
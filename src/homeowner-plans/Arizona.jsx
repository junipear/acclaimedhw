import React, { useState,Fragment  } from "react";
import SingleFamily from "./ArizonaUnitSize/SingleFamily";
import Duplex from "./ArizonaUnitSize/Duplex";
import Triplex from "./ArizonaUnitSize/Triplex";
import Fourplex from "./ArizonaUnitSize/Fourplex";
import UtahHomeowner from "./../assets/images/UtahHomeowner.png"
import { Helmet } from "react-helmet";
import unitsize from '../data.json';
import { BrowserRouter as Router, useHistory,useLocation } from "react-router-dom";
const Arizona = () => {
  const [arizonaState, setArizonaState] = useState("");
  const location = useLocation();
  const sel = location.pathname;
  let history = useHistory();
  function handleChange(e) {
  history.push(e.target.value);
  }
  return (
    <>
      <Helmet>
        <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
        <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information." />
      </Helmet>
      <div className="home_page">
        {/* start inner banner */}
        <section className="top-image">
          <img src={UtahHomeowner} alt="UtahHomeowner" />
        </section>
        {/* end inner banner */}
        <section className="plans-title">
          <div className="container text-center mx-900">
            <h1 className="upper">Plans for every home</h1>
            <p className="text-center sub-txt">We want you to feel confident in your home—that’s why we provide a variety of coverage options for different needs. While all of our plans cover a variety of appliances and accessories, you can choose a more extensive option to make sure every item in your home is in good hands.</p>
          </div>
        </section>
        {/* end of text titile  */}
        <section className="change-location-header">
          <div className="container d-flex just-space">
            <span className="big upper">Arizona Homeowner Plans</span>
            <div>
              <div>
                <span>Unit Size</span>
                <Fragment>
        <select name="size" className=""
                  onChange={(e) => { const selectedd = e.target.value; setArizonaState(selectedd); }}>
          {unitsize.productList.map(option => (
            <option key={option.id} value={option.id}>{option.unitsize}</option>
          ))}
        </select>
        
      </Fragment>
              </div>
              <div>
                <span style={{ display: "block" }}>
                  Location
                  </span>
                <select name="size" className="" onChange={handleChange} defaultValue={sel}>
                  <option value="/homeowner-plans/utah">Utah</option>
                  <option value="/homeowner-plans/nevada">Nevada</option>
                  <option value="/homeowner-plans/texas">Texas</option>
                  <option value="/homeowner-plans/arizona">Arizona</option>
                  <option value="/homeowner-plans/idaho">Idaho</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* fix on top header while scroll */}
        <section className="light-back plan-options">
            {arizonaState === "1" ? <SingleFamily /> : arizonaState === "2" ? <Duplex />
              : arizonaState === "3" ? <Triplex /> : arizonaState === "4" ? <Fourplex /> : <SingleFamily />}
          <hr className="textured" />
        </section>
      </div>
    </>
  )
};
export default Arizona;
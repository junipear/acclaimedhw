import React from "react";
import {Helmet} from "react-helmet";
import {StarFilled,CheckOutlined} from '@ant-design/icons';
const SingleFamily = () =>{
    return(
        <>
          <Helmet>         
            <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
            <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information."/>
          </Helmet>
          <div className="wrapper">
        {/* fix on top header while scroll */}
        <section className="light-back plan-options">
          <div className="container">
            <div className="table-cont">
              <h2 className="upper table-left">plan options<br />
                <span>Single Family</span></h2>
              <div className="option-cont table-right">
                <div className="option">
                  <div className="star-cont"><StarFilled className="antstar"/></div>
                  <div className="body">
                    <h6 className="upper">Standard</h6>
                    <h4 className="lato">$45.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$400/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option  */}
                <div className="option">
                  <div className="star-cont"><StarFilled className="antstar"/><StarFilled className="antstar"/></div>
                  <div className="body">
                    <h6 className="upper">Premium</h6>
                    <h4 className="lato">$50.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$475/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option */}
                <div className="option">
                  <div className="star-cont"><StarFilled className="antstar"/><StarFilled className="antstar"/><StarFilled className="antstar"/></div>
                  <div className="body">
                    <h6 className="upper">Ultimate</h6>
                    <h4 className="lato">$60.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$600/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option */}
              </div>
            </div>
          </div>
          <hr className="textured" />
        </section>
        {/* end of scroll header section */}
        {/* standard featuers on here  */}
        <section className="unique-features">
          <h3 className="upper text-center lato light-back">Unique Features</h3>
          <div className="container">
            <div className="table-cont">
              <div className="table-left">
                <p><span>Central Vacuum</span></p>
                <p><span>Registers</span></p>
                <p><span>Grills</span></p>
                <p><span>Heat Lamps</span></p>
                <p><span>Angle Stops, and Gate Valves</span></p>
                <p><span>Toilet Replacement</span></p>
                <p><span>Interior Hose Bibs</span></p>
                <p><span>Shower Heads</span></p>
                <p><span>Shower Arms - Faucets</span></p>
                <p>
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                    </span>
                  </span>
                </p>
                <p> 
                  <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">No Fault Coverage</a>
                    </span>
                </p>
                <p><span>Refrigerator</span></p>
                <p><span>Washer and Dryer</span></p>
              </div>
              <div className="table-right desktop">
                <div className="feature-col">
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature"></div>
                  <div className="feature"></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                  <div className="feature included"><CheckOutlined className="antcheck"/></div>
                </div>
              </div>
              <div data-num="5" className="table-right mobile">
                <p className="feature-text-mobile"><span>Central Vacuum</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Registers</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Free ReKey (travel fees may apply)</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Grills</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Heat Lamps</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Exterior hose bibs</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Pressure Regulator Valve</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Angle Stops, and Gate Valves</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Toilet Replacement</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Interior Hose Bibs</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Shower Heads</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Shower Arms - Faucets</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Toilet replacement</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile">
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                    </span>
                  </span>
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">No Fault Coverage</a>
                    </span>
                  </span>
                </p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Refrigerator</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>R-22 Conversion</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>No Fault (code upgrades &amp; mismatched systems)</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile">
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#no_fault_popup_utah">No Fault Coverage</a>
                    </span>
                  </span>
                </p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Radiant heating/broiler</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Washer and Dryer</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
    ) 
};
export default SingleFamily;
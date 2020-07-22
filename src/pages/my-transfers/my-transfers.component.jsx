import React, { useState, useEffect, useMemo } from "react";
import LoadingBar from "react-top-loading-bar";
import Loader from 'react-loader-spinner'
import SEO from "../../components/seo/seo.component";
import "./my-transfers.styles.scss";
import Message from "../../components/message/message.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectMyTransfers,
} from "../../redux/user/user.selector";
import { getTransfersStart } from "../../redux/user/user.actions";
import Transfers from "../../components/my-transfer/transfers.component";

const MyTransfers = ({ menu, user, getTransfersStart, my_transfers }) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const [type, setType] = useState("");
  useMemo(() => {
    user && user.is_email_confrim && getTransfersStart("");
  }, [getTransfersStart, user]);
  useMemo(() => {
    window.scroll(0, 0);
  }, []);
  useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {
    setLoadBar(100);
  }, []);
  const createdAt = (data) => {
    const result = data.split("T");
    return result[0];
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    type === "all" && setType("");
    // setRegisterBtn("Registering....");
    getTransfersStart(type);
    // !refUser && (await signUpStart(email, name, password, country));
    //
    // setTimeout(() => {
    // }, 15000);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // setMessage("");
    setType(value);
    console.log(type);
  };
  // ref_id / status / amount / currency / created_at

  const loader = (
    <Loader
         type="Puff"
         color="#1d2d5f"
         height={80}
         width={80}
      />
  )

  return (
    <div className="my-transfers" style={{ width: width }}>
      <SEO title="Transfers" />
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      

      
      {!my_transfers ?
        loader
        : 
        <>
        {!user.is_email_confrim && <Message />}
        <div className="my-transfers__title">
          <h1>My Transfers</h1>
        </div>
        <form className="my-transfers__type" onSubmit={handleSubmit}>
          <div className="my-transfers__type--box1">
            <p>Transfer Type</p>

            <select
              name="type"
              id="type"
              required
              value={type}
              onChange={handleChange}
            >
              <option value="all">Select All</option>
              <option value="?status=successful">Successful</option>
              <option value="?status=pending">Pending</option>
              <option value="?status=failed">Failed</option>
            </select>
          </div>
          <button type="submit" className="my-transfers__type--box4 ripple1">
            <div>
              <i className="fa fa-search"></i>
              <p>Search</p>
            </div>
          </button>
        </form>
        
        <Transfers 
          user={user} 
          my_transfers={my_transfers} 
          createdAt={createdAt} 
        />
        </>
      }
      {/* <div className="my-transfers__type--box2">
          <p>From</p>
          <input type="date" name="" id="" />
        </div>
        <div className="my-transfers__type--box3">
          <p>To</p>
          <input type="date" name="" id="" />
        </div> */}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  my_transfers: selectMyTransfers,
});
const mapDispatchToProps = (dispatch) => ({
  getTransfersStart: (query) => dispatch(getTransfersStart(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyTransfers);

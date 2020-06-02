import Axios from "axios";

export const createBitcoinInvoiceApi = async (token, price) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + token,
  };
  const url =
    process.env.REACT_APP_API +
    process.env.REACT_APP_CREATE_COINPAYMENTS_INVOICE;
  const collectionsMap = await Axios.post(
    url,
    {
      price,
    },
    {
      headers: headers,
    }
  );
  return collectionsMap;
};

export const paymentVerifyApi = async (token, txref) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const url =
    process.env.REACT_APP_API + process.env.REACT_APP_VERIFY_PAYMENT + txref;
  const collectionsMap = await Axios.get(url, {
    headers: headers,
  });
  return collectionsMap;
};

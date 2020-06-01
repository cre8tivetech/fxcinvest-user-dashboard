import Axios from "axios";

export const fetchUserApi = async (token, uid) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + token,
  };
  const url =
    process.env.REACT_APP_API + process.env.REACT_APP_FETCH_USER + uid;
  const collectionsMap = await Axios.post(
    url,
    {},
    {
      headers: headers,
    }
  );
  return collectionsMap;
};

export const transferApi = async (token, amount, username) => {
  console.log(token, amount, username);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + token,
  };
  const url = process.env.REACT_APP_API + process.env.REACT_APP_TRANSFER;
  const collectionsMap = await Axios.post(
    url,
    {
      amount: amount,
      transfer_to: username,
    },
    {
      headers: headers,
    }
  );
  return collectionsMap;
};

export const bitcoinWithdrawalApi = async (
  token,
  amount,
  wallet_address,
  withdrawal_type,
  transaction_type
) => {
  console.log(token, amount, wallet_address, withdrawal_type, transaction_type);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + token,
  };
  const url = process.env.REACT_APP_API + process.env.REACT_APP_WITHDRAWAL;
  const collectionsMap = await Axios.post(
    url,
    {
      amount,
      wallet_address,
      withdrawal_type,
      transaction_type,
    },
    {
      headers: headers,
    }
  );
  return collectionsMap;
};

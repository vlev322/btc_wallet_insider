import React from "react";
import { useSelector } from "react-redux";
import { IBalance } from "../../../interfaces";
import { addressSelector } from "../../../store/selectors/selectors";

const BalanceInfo = (): JSX.Element => {
  const balanceInfo: IBalance = useSelector(addressSelector);
  const { balance, received, spent } = balanceInfo.total;
  return (
    <div className="address-balance">
      <div className="address-balance-total">
        <span className="label">Total amount</span>
        <p className="accent">{balance} BTC</p>
      </div>
      <div className="address-balance-received">
        <span className="label">Total received</span>
        <p>{received} BTC</p>
      </div>
      <div className="address-balance-send">
        <span className="label">Total sent</span>
        <p>{spent} BTC</p>
      </div>
    </div>
  );
};

export default BalanceInfo;

import React from 'react'

const Transfers = ({ user, my_transfers, createdAt }) => {
  return (
    <>
      <div className="my-transfers__box">
        <h1>Deposits</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>BTC Amount</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Deposited_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers.deposit.length !== 0 &&
          my_transfers.deposit.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount_in_btc}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{createdAt(list.created_at)}</p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))
          }
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.deposit.length && (
              <p>You didn't make any deposit yet</p>
            )}
            {my_transfers && !my_transfers.deposit.length && (
              <div className="my-transfers__box--btn ripple1">Deposit Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Deposit Now
          </div>
        )}
      </div>
      <div className="my-transfers__box">
        <h1>Withdrawals</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Created_at</p>
          </div>
          <div className="my-transfers__box--header__6">
            <p>Paid_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers.withdrawal.length !== 0 &&
          my_transfers.withdrawal.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{createdAt(list.created_at)}</p>
                </div>
                <div className="my-transfers__box--content__6">
                  {list.paid_at ? (
                    <p>{createdAt(list.paid_at)}</p>
                  ) : (
                    <p>-----</p>
                  )}
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))}
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.withdrawal.length && (
              <p>You didn't make any withdrawal yet</p>
            )}
            {my_transfers && !my_transfers.withdrawal.length && (
              <div className="my-transfers__box--btn ripple1">Withdraw Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Withdraw Now
          </div>
        )}
      </div>
      <div className="my-transfers__box">
        <h1>Internal transfers</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Transfer_to</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Transferred_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers.transfer.length !== 0 &&
          my_transfers.transfer.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.transfer_to}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__6">
                  <p>{createdAt(list.created_at)}</p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))}
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.transfer.length && (
              <p>You didn't make any transfer yet</p>
            )}
            {my_transfers && !my_transfers.transfer.length && (
              <div className="my-transfers__box--btn ripple1">Deposit Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Transfer Now
          </div>
        )}
      </div>
      
    </>
  )
}

export default Transfers


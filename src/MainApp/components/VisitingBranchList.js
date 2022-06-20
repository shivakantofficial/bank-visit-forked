import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateVisitStatus } from "../../Redux/features/banklistSlice";

export const VisitingBranchList = () => {
  const dispatch = useDispatch();
  const { bankList = [] } = useSelector((state) => state);

  if (Array.isArray(bankList) && bankList.length > 0) {
    const bankToVisit = bankList.filter(
      (eachBank) => eachBank.visitStatus === true
    );
    return (
      <div>
        <h2>Branch Visiting</h2>
        <ul className="banklist">
          {Array.isArray(bankToVisit) && bankToVisit.length > 0 ? (
            bankToVisit.map((eachBank) => (
              <li key={eachBank.place_id} className="each-bank">
                <div className="address">
                  <p>Hdfc Bank</p>
                  <div>{eachBank.vicinity}</div>
                </div>
                <div className="cta">
                  <span
                    onClick={() =>
                      dispatch(
                        updateVisitStatus({
                          placeId: eachBank.place_id,
                          value: false,
                        })
                      )
                    }
                  >
                    close
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li>Please select branch to visit</li>
          )}
        </ul>
      </div>
    );
  }

  return null;
};

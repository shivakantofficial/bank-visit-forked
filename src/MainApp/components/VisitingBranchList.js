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
      <ul>
        {Array.isArray(bankToVisit) && bankToVisit.length > 0 ? (
          bankToVisit.map((eachBank) => (
            <li key={eachBank.place_id}>
              <p>Hdfc Bank</p>
              <div>{eachBank.vicinity}</div>
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
            </li>
          ))
        ) : (
          <li>Please select branch to visit</li>
        )}
      </ul>
    );
  }

  return null;
};

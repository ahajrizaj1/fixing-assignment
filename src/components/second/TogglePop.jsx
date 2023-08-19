import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {IoIosArrowUp} from 'react-icons/io'

const TogglePop = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="pop-up">
      <div className="question__container">
        <div className="first__row" onClick={() => setShow(!show)}>
          <p>Why park a domain name in Parkname ?</p>
          <span>
            {show ? <IoIosArrowUp /> :<IoIosArrowDown /> }
          </span>
        </div>
        {show && <div className="popup-text">
          <p>
            Parkname is the leading industry standard for domain name parking
            and monetization services. We offer variety of services to help you
            achieve success.
          </p>
        </div>}
      </div>
    </div>
  );
};

export default TogglePop;
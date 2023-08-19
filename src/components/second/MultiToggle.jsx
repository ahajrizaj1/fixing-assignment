import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const MultiToggle = () => {
  const [show, setShow] = useState(false);

  const [pop1, setPop1] = useState(false);
  const [pop2, setPop2] = useState(false);
  const [pop3, setPop3] = useState(false);
  const [pop4, setPop4] = useState(false);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="second-popup">
      <div className="question__container" onClick={() => setShow(!show)}>
        <div className="inner__container">
          <div className="left__side">
            <span>
              <AiOutlineUser />
            </span>

            <div className="main__heading">
              <p>About Us a</p>
              <p className="description">4 articles in this Topic</p>
            </div>
          </div>
          <span className="arrow">
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {show && (
          <div className="popup-container">
            <div
              className="popup-row"
              onClick={(e) => {
                stopPropagation(e), setPop1(!pop1);
              }}
            >
              <div className="popup_top">
                <p>
                  How does Parkname seperate itself from other domain name
                  parking companies?
                </p>
                <span className="popup_span">
                  {pop1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {pop1 && (
                <div className="popup_down">
                  <p className="down_text">
                    Your domains are a valuable online property. As in any
                    investment, you want the most efficient easy way to make
                    sure your property is going to be profitable. Do you own
                    more than 1,000 domain ? As a professional domainer, you
                    will find everything you need through Parkname to generate
                    maximum profits from your domain portfolio.
                  </p>
                </div>
              )}
            </div>
            <div
              className="popup-row"
              onClick={(e) => {
                stopPropagation(e), setPop2(!pop2);
              }}
            >
              <div className="popup_top">
                <p>Is parkname actually free?</p>
                <span className="popup_span">
                  {pop2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {pop2 && (
                <div className="popup_down">
                  <p className="down_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo repudiandae aut nostrum totam autem, quos sed
                    obcaecati, accusantium molestias provident, quaerat
                    consequuntur? Quia autem fuga numquam excepturi tenetur? Ab,
                    dignissimos exercitationem quaerat facere optio beatae
                    adipisci? Et atque a, enim corrupti porro cumque natus ipsam
                    ipsa dolores quam dolorum dolorem!
                  </p>
                </div>
              )}
            </div>
            <div
              className="popup-row"
              onClick={(e) => {
                stopPropagation(e), setPop3(!pop3);
              }}
            >
              <div className="popup_top">
                <p>What you do?</p>
                <span className="popup_span">
                  {pop3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {pop3 && (
                <div className="popup_down">
                  <p className="down_text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur voluptate adipisci corporis animi ex commodi
                    quibusdam, consequatur cum? Dicta voluptas nesciunt eius
                    doloribus eaque, sunt rerum minima suscipit voluptates ex.
                  </p>
                </div>
              )}
            </div>
            <div className="popup-row" onClick={(e) => {stopPropagation(e),setPop4(!pop4)}}>
              <div className="popup_top">
                <p>When was Parkname first founded</p>
                <span className="popup_span">
                  {pop4 ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                </span>
              </div>
              {pop4 && <div className="popup_down">
                <p className="down_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, voluptatibus? Inventore consequuntur sapiente aliquid
                  cupiditate rerum animi, sunt dicta? Commodi recusandae
                  praesentium consequatur rem blanditiis.
                </p>
              </div> }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiToggle;
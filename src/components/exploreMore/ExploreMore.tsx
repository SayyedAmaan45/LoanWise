"use client";

import React from "react";
import styles from "./ExploreMore.module.css";
import { FaCarAlt, FaUserAlt, FaArrowRight } from "react-icons/fa";
import { IoHome, IoSchool } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";

const ExploreMore = () => {
  const calculators = [
    {
      id: 1,
      icon: <IoHome />,
      title: "Home Loan",
      subTitle:
        "Calculate EMI, affordability, and loan eligibility.",
    },
    {
      id: 2,
      icon: <FaUserAlt />,
      title: "Personal Loan",
      subTitle:
        "Check monthly EMI, repayment cost, and eligibility.",
    },
    {
      id: 3,
      icon: <FaCarAlt />,
      title: "Car Loan",
      subTitle:
        "Estimate car EMI, down payment, and total interest.",
    },
    {
      id: 4,
      icon: <MdBusinessCenter />,
      title: "Business Loan",
      subTitle:
        "Plan business EMI, funding needs, and repayments.",
    },
    {
      id: 5,
      icon: <IoSchool />,
      title: "Education Loan",
      subTitle:
        "Calculate student EMI, tenure, and repayment amount.",
    },
  ];

  return (
    <section className={styles.explore}>
      <div className="container">
        <div className={styles.heading}>
          <h2>Explore Our Calculators</h2>
          <p>
            Choose from our wide range of financial
            calculators
          </p>
        </div>

        <div className={styles.grid}>
          {calculators.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.subTitle}</p>

              <button>
                Calculate Now{" "}
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
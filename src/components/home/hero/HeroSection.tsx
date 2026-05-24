"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import CountUp from "react-countup";
import { calculateEMI } from "@/utils/calculateEMI";
import { saveCalculation } from "@/services/calculation.service";
import { toast } from "sonner";

export default function HeroSection() {
  const InitialValue = {
    loanAmount: "2500000",
    interestRate: "8.5",
    loanTenure: "20",
    monthlyEmi: "0",
    totalInterest: "0",
    totalPayment: "0",
    currencyType: "Rupee",
    loanType: "EMI Calculator",
  };

  const [formData, setFormData] = useState(InitialValue);
  const [isCalculated, setIsCalculated] =
    useState(false);
  const [loading, setLoading] =
    useState(false);
  const [hasChanges, setHasChanges] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setHasChanges(true);

    setIsCalculated(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLoanType = (type: string) => {
    setIsCalculated(false);
    setHasChanges(true);


    if (type === "Home Loan") {
      setFormData((prev) => ({
        ...prev,
        loanType: type,
        loanAmount: "2500000",
        interestRate: "8.5",
        loanTenure: "20",
      }));
    }

    if (type === "Personal Loan") {
      setFormData((prev) => ({
        ...prev,
        loanType: type,
        loanAmount: "500000",
        interestRate: "14",
        loanTenure: "5",
      }));
    }

    if (type === "Car Loan") {
      setFormData((prev) => ({
        ...prev,
        loanType: type,
        loanAmount: "800000",
        interestRate: "10",
        loanTenure: "7",
      }));
    }

    if (type === "EMI Calculator") {
      setFormData((prev) => ({
        ...prev,
        loanType: type,
        loanAmount: "2500000",
        interestRate: "8.5",
        loanTenure: "20",
      }));
    }
  };
  const formatNumber = (num: string) =>
    Number(num).toLocaleString("en-IN");

  const handleCalculate = async () => {
    try {
      setLoading(true);
      const result = calculateEMI(
        Number(formData.loanAmount),
        Number(formData.interestRate),
        Number(formData.loanTenure)
      );

      const updatedData = {
        loanType: formData.loanType,

        currencyType:
          formData.currencyType,

        loanAmount: Number(
          formData.loanAmount
        ),

        interestRate: Number(
          formData.interestRate
        ),

        loanTenure: Number(
          formData.loanTenure
        ),

        monthlyEmi: Number(
          result.monthlyEmi
        ),

        totalInterest: Number(
          result.totalInterest
        ),

        totalPayment: Number(
          result.totalPayment
        ),
      };

      setFormData((prev) => ({
        ...prev,
        ...result,
      }));

      const response =
        await saveCalculation(
          updatedData
        );

      if (response?.success) {
        setIsCalculated(true);

        // toast.success(
        //   "EMI Calculated Successfully 🚀"
        // );
      } else {
        toast.error(
          response?.message ||
          "Failed to save calculation"
        );
      }

      console.log(response);

    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong!"
      );
    } finally {
      setLoading(false);

    }
  };

  //   useEffect(() => {
  //   handleCalculate();
  // }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>
              Trusted by 50,000+ users
            </span>

            <h1 className={styles.title}>
              Calculate Smarter.
              <span> Borrow Better.</span>
            </h1>

            <p className={styles.desc}>
              Advanced loan calculators and expert consultation
              to help you make the best financial decisions.
            </p>

            <div className={styles.actions}>
              <button className="btnPrimary">
                Try Calculator
              </button>
              <button className="btnSecondary">
                Get Free Consultation
              </button>
            </div>

            <div className={styles.features}>
              <div>✔ 100% Secure</div>
              <div>✔ Expert Advisors</div>
              <div>✔ No Hidden Charges</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.card}>
            <div className={styles.tabs}>
              {[
                "EMI Calculator",
                "Home Loan",
                "Personal Loan",
                "Car Loan",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => handleLoanType(item)}
                  className={
                    formData.loanType === item
                      ? styles.active
                      : ""
                  }
                >
                  {item}
                </button>
              ))}
            </div>

            <div className={styles.currencyType}>
              <select
                name="currencyType"
                value={formData.currencyType}
                onChange={handleChange}
              >
                <option value="Rupee">₹ INR</option>
                <option value="Dollar">$ USD</option>
              </select>
            </div>

            <div className={styles.content}>
              <div className={styles.inputs}>
                <div className={styles.field}>
                  <label>Loan Amount</label>
                  <p>
                    {formData.currencyType === "Dollar"
                      ? "$"
                      : "₹"}{" "}
                    {formatNumber(formData.loanAmount)}
                  </p>

                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label>Interest Rate (p.a.)</label>
                  <p>{formData.interestRate}%</p>

                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.1"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label>Loan Tenure</label>
                  <p>{formData.loanTenure} Years</p>

                  <input
                    type="range"
                    min="1"
                    max="30"
                    name="loanTenure"
                    value={formData.loanTenure}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.result}>
                <span>Your Monthly EMI</span>

                <h2 className={styles.emiValue}>
                  {isCalculated ? (
                    <>
                      <span style={{ fontSize: "1.5rem" }}>
                        {formData.currencyType === "Dollar"
                          ? "$ "
                          : "₹ "}
                      </span>

                      <CountUp
                        end={Number(formData.monthlyEmi)}
                        duration={1}
                        separator=","
                        style={{ fontSize: "1.5rem" }}
                      />
                    </>
                  ) : (
                    "0"
                  )}
                </h2>

                <div className={styles.row}>
                  <p>Principal Amount</p>

                  <strong>
                    {formData.currencyType === "Dollar"
                      ? "$"
                      : "₹"}{" "}

                    {isCalculated ? (
                      <CountUp
                        end={Number(formData.loanAmount)}
                        duration={1}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                  </strong>
                </div>

                <div className={styles.row}>
                  <p>Total Interest</p>

                  <strong>
                    {formData.currencyType === "Dollar"
                      ? "$"
                      : "₹"}{" "}
                    {
                      isCalculated ? (
                        <CountUp
                          end={Number(formData.totalInterest)}
                          duration={1}
                          separator=","
                        />

                      ) : ("0")
                    }
                  </strong>
                </div>

                <div className={styles.row}>
                  <p>Total Payment</p>

                  <strong>
                    {formData.currencyType === "Dollar"
                      ? "$"
                      : "₹"}{" "}
                    {
                      isCalculated ? (
                        <CountUp
                          end={Number(formData.totalPayment)}
                          duration={1}
                          separator=","
                        />
                      ) : ("0")
                    }

                  </strong>
                </div>

                <button
                  onClick={handleCalculate}
                  className={styles.viewBtn}
                  disabled={loading || !hasChanges}

                >
                  {loading
                    ? "Calculating..."
                    : "Calculate EMI"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
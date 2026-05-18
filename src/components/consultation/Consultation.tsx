"use client";

import React, { useState } from "react";
import styles from "./Consultation.module.css";
import { consultationApi } from "@/services/consultation.service";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationSchema } from "@/validations/consultation.validation";
import { z } from "zod";

const Consultation = () => {
  type ConsultationFormData = z.infer<
    typeof consultationSchema
  >;

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(
      consultationSchema
    ),
  });

  const onSubmit = async (
    data: ConsultationFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await consultationApi(data);

      if (response?.success) {
        toast.success(
          "Consultation Submitted 🚀"
        );

        reset();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong!!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.card}>
          {/* LEFT SIDE */}
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
              <span className={styles.badge}>
                Trusted Financial Platform
              </span>

              <h2>
                Make Better
                <br />
                Loan Decisions
              </h2>

              <p>
                Calculate EMI instantly and get
                professional loan guidance
                tailored to your financial goals.
              </p>

              <div
                className={styles.highlightGrid}
              >
                <div
                  className={
                    styles.highlightCard
                  }
                >
                  <h3>50K+</h3>
                  <span>
                    EMI Calculations
                  </span>
                </div>

                <div
                  className={
                    styles.highlightCard
                  }
                >
                  <h3>4.9★</h3>
                  <span>
                    Customer Rating
                  </span>
                </div>

                <div
                  className={
                    styles.highlightCard
                  }
                >
                  <h3>24/7</h3>
                  <span>
                    Expert Support
                  </span>
                </div>

                <div
                  className={
                    styles.highlightCard
                  }
                >
                  <h3>100%</h3>
                  <span>
                    Secure Process
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={styles.rightContainer}
          >
            <h2>Book a Free Consultation</h2>

            <p>
              Fill in your details and our
              expert will get in touch with
              you.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={styles.inputGroup}
              >
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("fullName")}
                  className={
                    errors.fullName
                      ? styles.inputError
                      : ""
                  }
                />

                {errors.fullName && (
                  <p className={styles.error}>
                    {
                      errors.fullName
                        ?.message
                    }
                  </p>
                )}
              </div>

              <div
                className={styles.inputGroup}
              >
                <label>Mobile Number</label>

                <div className={styles.phoneWrap}>
                  <span>+91</span>

                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    {...register(
                      "mobileNumber"
                    )}
                    className={
                      errors.mobileNumber
                        ? styles.inputError
                        : ""
                    }
                  />
                </div>

                {errors.mobileNumber && (
                  <p className={styles.error}>
                    {
                      errors.mobileNumber
                        ?.message
                    }
                  </p>
                )}
              </div>

              <div
                className={styles.inputGroup}
              >
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  className={
                    errors.email
                      ? styles.inputError
                      : ""
                  }
                />

                {errors.email && (
                  <p className={styles.error}>
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className={styles.row}>
                <div
                  className={styles.inputGroup}
                >
                  <label>Loan Type</label>

                  <select
                    {...register("loanType")}
                    className={
                      errors.loanType
                        ? styles.inputError
                        : ""
                    }
                  >
                    <option value="">
                      Select loan type
                    </option>

                    <option>
                      Home Loan
                    </option>

                    <option>
                      Car Loan
                    </option>

                    <option>
                      Personal Loan
                    </option>

                    <option>
                      Business Loan
                    </option>
                  </select>

                  {errors.loanType && (
                    <p className={styles.error}>
                      {
                        errors.loanType
                          ?.message
                      }
                    </p>
                  )}
                </div>

                <div
                  className={styles.inputGroup}
                >
                  <label>Loan Amount</label>

                  <input
                    type="text"
                    placeholder="Enter amount"
                    {...register(
                      "loanAmount"
                    )}
                    className={
                      errors.loanAmount
                        ? styles.inputError
                        : ""
                    }
                  />

                  {errors.loanAmount && (
                    <p className={styles.error}>
                      {
                        errors.loanAmount
                          ?.message
                      }
                    </p>
                  )}
                </div>
              </div>

              <div
                className={styles.inputGroup}
              >
                <label>Your Message</label>

                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  {...register("message")}
                  className={
                    errors.message
                      ? styles.inputError
                      : ""
                  }
                ></textarea>

                {errors.message && (
                  <p className={styles.error}>
                    {
                      errors.message
                        ?.message
                    }
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={styles.btn}
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : "Request Callback"}
              </button>

              <p className={styles.note}>
                🔒 We respect your privacy.
                Your information is safe with
                us
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
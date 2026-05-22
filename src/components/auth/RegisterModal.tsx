"use client";

import Link from "next/link";
import styles from "./AuthModal.module.css";
import { registerSchema } from "@/validations/register.validation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerApi } from "@/services/auth/register.service";
import { toast } from "sonner";
import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function RegisterModal() {
  type RegisterFormData = z.infer<
    typeof registerSchema
  >;

  const [loading, setLoading] =
    useState(false);
    const [showPassword, setShowPassword] =
  useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(
      registerSchema
    ),
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      setLoading(true);

      const response =
        await registerApi(data);

      if (response?.success) {
        toast.success(
          "Account Created Successfully 🚀"
        );

        reset();
          window.location.href = "/login";
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
      <div className={styles.card}>

        {/* LEFT */}

        <div className={styles.left}>

          <span className={styles.badge}>
            Join LoanWise
          </span>

          <h1>
            Start Your <span>Smart Finance</span> Journey
          </h1>

          <p>
            Create your account to save calculations,
            access dashboard analytics, and unlock
            premium financial insights.
          </p>

          <div className={styles.features}>

            <div className={styles.feature}>
              <span>✓</span>
              Smart EMI Tracking
            </div>

            <div className={styles.feature}>
              <span>✓</span>
              Secure Data Protection
            </div>

            <div className={styles.feature}>
              <span>✓</span>
              Premium Financial Tools
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className={styles.right}>

          <h2>Create Account</h2>

          <p>
            Register and unlock your dashboard.
          </p>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >

            {/* FULL NAME */}

            <div className={styles.inputGroup}>
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
                  {errors.fullName?.message}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div className={styles.inputGroup}>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
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

            {/* PASSWORD */}

<div className={styles.inputGroup}>
  <label>Password</label>

  <div className={styles.passwordWrapper}>
    <input
      type={
        showPassword
          ? "text"
          : "password"
      }
      placeholder="Create password"
      {...register("password")}
      className={
        errors.password
          ? styles.inputError
          : ""
      }
    />

    <button
      type="button"
      className={styles.eyeBtn}
      onClick={() =>
        setShowPassword(
          !showPassword
        )
      }
    >
      {showPassword ? (
        <FaEyeSlash />
      ) : (
        <FaEye />
      )}
    </button>
  </div>

  {errors.password && (
    <p className={styles.error}>
      {errors.password?.message}
    </p>
  )}
</div>

            <button
              type="submit"
              className={styles.btn}
              disabled={loading}
            >
              {loading
                ? "Creating..."
                : "Register"}
            </button>

          </form>

          <div className={styles.bottomText}>
            Already have an account?{" "}

            <Link href="/login">
              Login
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import styles from "./AuthModal.module.css";
import { loginSchema } from "@/validations/login.validation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginApi } from "@/services/auth/login.service";
import { toast } from "sonner";
import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function LoginModal() {
  type LoginFormData = z.infer<
    typeof loginSchema
  >;

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [captchaValue, setCaptchaValue] =
    useState("");

const [captchaText, setCaptchaText] =
  useState("");

useEffect(() => {
  generateCaptcha();
}, []);

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < 6; i++) {
    result +=
      chars[
        Math.floor(
          Math.random() *
            chars.length
        )
      ];
  }

  setCaptchaText(result);
};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(
      loginSchema
    ),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      setLoading(true);

      // CAPTCHA CHECK
      if (
        captchaValue !== captchaText
      ) {
        toast.error(
          "Invalid captcha"
        );

        return;
      }

      const response =
        await loginApi(data);

      if (response?.success) {
        toast.success(
          "Login Successful 🚀"
        );

        reset();

        window.location.href = "/";
      } else {
        toast.error(
          response?.message
        );
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
            Welcome Back
          </span>

          <h1>
            Access Your{" "}
            <span>LoanWise</span>{" "}
            Dashboard
          </h1>

          <p>
            Track EMI calculations,
            manage analytics, and
            access premium financial
            tools securely.
          </p>

          <div
            className={
              styles.features
            }
          >
            <div
              className={
                styles.feature
              }
            >
              <span>✓</span>
              Secure Authentication
            </div>

            <div
              className={
                styles.feature
              }
            >
              <span>✓</span>
              Save EMI Calculations
            </div>

            <div
              className={
                styles.feature
              }
            >
              <span>✓</span>
              Dashboard Analytics
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.right}>
          <h2>Login</h2>

          <p>
            Continue managing your
            financial journey.
          </p>

          <form
            className={styles.form}
            onSubmit={handleSubmit(
              onSubmit
            )}
          >
            {/* EMAIL */}

            <div
              className={
                styles.inputGroup
              }
            >
              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register(
                  "email"
                )}
                className={
                  errors.email
                    ? styles.inputError
                    : ""
                }
              />

              {errors.email && (
                <p
                  className={
                    styles.error
                  }
                >
                  {
                    errors.email
                      ?.message
                  }
                </p>
              )}
            </div>

            {/* PASSWORD */}

            <div
              className={
                styles.inputGroup
              }
            >
              <label>Password</label>

              <div
                className={
                  styles.passwordWrapper
                }
              >
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  {...register(
                    "password"
                  )}
                  className={
                    errors.password
                      ? styles.inputError
                      : ""
                  }
                />

                <button
                  type="button"
                  className={
                    styles.eyeBtn
                  }
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
                <p
                  className={
                    styles.error
                  }
                >
                  {
                    errors.password
                      ?.message
                  }
                </p>
              )}
            </div>

            {/* CAPTCHA */}

            <div
              className={
                styles.captchaBox
              }
            >
              <span
                className={
                  styles.captcha
                }
              >
                {captchaText}
              </span>

              <input
                type="text"
                placeholder="Enter captcha"
                value={
                  captchaValue
                }
                  {...register("captcha")}
                onChange={(e) =>
                  setCaptchaValue(
                    e.target.value
                  )
                }
                className={
                  errors.email
                    ? styles.inputError
                    : ""
                }
              />
            </div>

            <button
              type="submit"
              className={styles.btn}
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          <div
            className={
              styles.bottomText
            }
          >
            Don’t have an account?{" "}
            <Link href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
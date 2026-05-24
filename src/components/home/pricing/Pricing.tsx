"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { useRouter } from "next/navigation";

type PricingProps = {
    variant: "compact" | "full";
};

export default function Pricing({ variant }: PricingProps) {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
    const router = useRouter()

    const plans = [
        {
            name: "Free",
            monthly: 0,
            yearly: 0,
            oldMonthly: 0,
            oldYearly: 0,
            desc: "Perfect to explore calculators.",
            features: [
                "5 Calculations / month",
                "Basic EMI Reports",
                "Community Support",
                "Access Core Tools",
            ],
            popular: false,
        },
        {
            name: "Basic",
            monthly: 499,
            yearly: 4990,
            oldMonthly: 799,
            oldYearly: 8990,
            desc: "For serious planners & regular users.",
            features: [
                "Unlimited Calculations",
                "Save Reports",
                "Download PDF Reports",
                "Email Support",
                "Priority Speed",
            ],
            popular: true,
        },
        {
            name: "Pro",
            monthly: 1499,
            yearly: 14990,
            oldMonthly: 2499,
            oldYearly: 24990,
            desc: "Best for professionals & premium support.",
            features: [
                "Everything in Basic",
                "1-on-1 Consultation",
                "Advanced Insights",
                "Loan Strategy Report",
                "Priority Support",
            ],
            popular: false,
        },
    ];

    return (
        <section className={styles.pricing}>
            <div className="container">
                <div className={styles.top}>
                    <span className={styles.badge}>Pricing</span>

                    <h2 className={styles.heading}>
                        Simple Pricing for <span>Everyone</span>
                    </h2>

                    <p className={styles.desc}>
                        Choose a plan that fits your financial planning needs.
                    </p>

                    {variant === "full" && (
                        <div className={styles.toggle}>
                            <button
                                onClick={() => setBilling("monthly")}
                                className={
                                    billing === "monthly" ? styles.activeToggle : ""
                                }
                            >
                                Monthly
                            </button>

                            <button
                                onClick={() => setBilling("yearly")}
                                className={
                                    billing === "yearly" ? styles.activeToggle : ""
                                }
                            >
                                Yearly
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => {
                        const price =
                            billing === "monthly"
                                ? plan.monthly
                                : plan.yearly;

                        const oldPrice =
                            billing === "monthly"
                                ? plan.oldMonthly
                                : plan.oldYearly;

                        const period =
                            billing === "monthly"
                                ? "month"
                                : "year";

                        return (
                            <div
                                key={index}
                                className={`${styles.card} ${plan.popular ? styles.popular : ""
                                    }`}
                            >
                                {plan.popular && (
                                    <span className={styles.tag}>
                                        Most Popular
                                    </span>
                                )}

                                <h3>{plan.name}</h3>

                                <p className={styles.planDesc}>
                                    {plan.desc}
                                </p>

                                <div className={styles.priceWrap}>
                                    {oldPrice > 0 && (
                                        <div className={styles.oldPrice}>
                                            ₹{oldPrice}
                                        </div>
                                    )}

                                    <div className={styles.price}>
                                        ₹{price}
                                        <span>/{period}</span>
                                    </div>

                                    {oldPrice > 0 && (
                                        <div className={styles.saveTag}>
                                            Save ₹{oldPrice - price}
                                        </div>
                                    )}
                                </div>

                                <ul className={styles.features}>
                                    {plan.features.map((item, i) => (
                                        <li key={i}>✓ {item}</li>
                                    ))}
                                </ul>

                                <button className={styles.btn}>
                                    Get Started
                                </button>
                            </div>
                        );
                    })}
                </div>

                {variant === "compact" && (
                    <div className={styles.bottomCta}>
                        <button
                            onClick={() => router.push("/pricing")}
                            className="btnPrimary"
                        >
                            View Full Pricing
                        </button>
                    </div>
                )}
            {variant === "full" &&
                <div className={styles.trustSection}>
                    <p className={styles.guarantee}>
                        All plans include 7-day money back guarantee.
                    </p>
            
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>🔒 Secure Payment</div>
                        <div className={styles.trustItem}>⭕ Cancel Anytime</div>
                        <div className={styles.trustItem}>🛡️ 100% Safe & Secure</div>
                    </div>
                </div>
            }
            </div>
        </section>
    );
}
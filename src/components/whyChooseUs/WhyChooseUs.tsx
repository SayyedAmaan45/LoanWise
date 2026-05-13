import {
  IoShieldCheckmarkSharp,
  IoTrendingUp,
} from "react-icons/io5";
import {
  FaUserTie,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const whyChooseUsList = [
    {
      id: 1,
      icon: <IoTrendingUp />,
      title: "Accurate Calculations",
      subTitle:
        "Advanced EMI formulas with instant results for loans, affordability and repayment planning.",
    },
    {
      id: 2,
      icon: <FaUserTie />,
      title: "Expert Consultation",
      subTitle:
        "Get guidance from professionals to choose smarter loan options and reduce repayment stress.",
    },
    {
      id: 3,
      icon: <IoShieldCheckmarkSharp />,
      title: "Secure & Private",
      subTitle:
        "Your calculations and consultation data stay protected with privacy-first handling.",
    },
    {
      id: 4,
      icon: <FaFileDownload />,
      title: "Save & Download",
      subTitle:
        "Store calculations, compare reports and download summaries whenever needed.",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.badge}>Why Choose Us</span>

          <h2 className={styles.heading}>
            Why Choose <span>LoanWise</span>
          </h2>

          <p className={styles.desc}>
            Everything you need to calculate smarter, borrow confidently,
            and make better financial decisions.
          </p>
        </div>

        <div className={styles.grid}>
          {whyChooseUsList.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.icon}>{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
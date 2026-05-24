import styles from "./Tables.module.css";

const calculations = [
  {
    name: "Amaan",
    loan: "₹500000",
    loantype: "Home Loan",
    emi: "₹12,500",
  },
  {
    name: "Rahul",
    loan: "₹800000",
        loantype: "Education Loan",

    emi: "₹18,200",
  },
  {
    name: "Sana",
    loan: "₹250000",
        loantype: "Personal Loan",
    emi: "₹7,900",
  },
];

export default function RecentCalculations() {

  return (
    <div className={styles.tableCard}>

      <div className={styles.header}>
        <h3>
          Recent Calculations
        </h3>
      </div>

      <div className={styles.tableWrapper}>

        <table
          className={styles.table}
        >

          <thead>
            <tr>
              <th>User</th>
              <th>Loan Type</th>
              <th>Loan</th>
              <th>EMI</th>
            </tr>
          </thead>

          <tbody>

            {calculations.map(
              (item, index) => (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>

                  <td>
                    {item.loantype}
                  </td>
                  <td>
                    {item.loan}
                  </td>

                  <td>
                    {item.emi}
                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transaction}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.border}>Type</th>
            <th className={css.border}>Amount</th>
            <th className={css.border}>Currency</th>
          </tr>
        </thead>

        <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.item} key={id} >
              <td className={css.border}>{type}</td>
              <td className={css.border}>{amount}</td>
              <td className={css.border}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

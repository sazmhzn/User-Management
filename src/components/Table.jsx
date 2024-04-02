import { Link } from "react-router-dom";
const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.header.length > 0 &&
            props.header.map((row, index) => {
              return <th key={index}>{row.label}</th>;
            })}
          {props.actions && props.actions.length > 0 && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {props.data.length > 0 &&
          props.data.map((row, index) => {
            return (
              <tr key={index}>
                {/* body starts */}
                {props.header.map((header, index) => {
                  return <td key={index}>{row[header.key]}</td>;
                })}
                {/* body ends */}

                {/* action starts */}
                {props.actions && props.actions.length > 0 && (
                  <td>
                    {props.actions.map((action, index) => {
                      return (
                        <Link to={`${action.link}/${row.id}`} key={index}>
                          <button className={action.className}>
                            {action.name}
                          </button>
                        </Link>
                      );
                    })}
                  </td>
                )}
                {/* action ends */}
              </tr>
            );
          })}
        {props.data.length === 0 && (
          <tr>
            <td colSpan={4}>No records found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;

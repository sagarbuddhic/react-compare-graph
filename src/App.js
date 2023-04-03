import logo from "./logo.svg";
import "./App.css";

let values = [
  [
    { source: "5", target: "6" },
    { source: "50.0", target: "51.0" },
    { source: "1", target: "1" },
    { source: "VARCHAR", target: "VARCHAR" },
    { source: "Y", target: "N" },
  ],
  [
    { source: "5", target: "4" },
    { source: "50.0", target: "50.0" },
    { source: "1", target: "1" },
    { source: "VARCHAR", target: "VARCHAR" },
    { source: "Y", target: "N" },
  ],
  [
    { source: "5", target: "5" },
    { source: "50.0", target: "50.0" },
    { source: "1", target: "1" },
    { source: "VARCHAR", target: "VARCHAR" },
    { source: "N", target: "N" },
  ],
];

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          marginLeft: "150px",
          gap: "50px",
          flexDirection: "row",
        }}
      >
        <span>ATTR_SNO</span>
        <span>DATA_LENGTH</span>
        <span>DATA_SCALE</span>
        <span>DATA_TYPE</span>
        <span>NULLABLE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            marginTop: "70px",
            flexDirection: "column",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <span>ADDRESS</span>
          <span>COMPANY_NAME</span>
          {/* style={{ transform: "rotate(-25deg)" }} */}
          <span>FIRST_NAME</span>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "50px" }}>
          {values.map((propertyValues) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "90px",
                  marginBottom: "40px",
                  alignItems: "center",
                }}
              >
                {propertyValues.map((property) => {
                  if (property.source === property.target) {
                    return (
                      <div
                        style={{
                          border: "1px solid lightgrey",
                          padding: "5px 10px",
                          color: "lightseagreen",
                          maxHeight: "20px",
                        }}
                      >
                        {property.source}
                      </div>
                    );
                  } else {
                    return (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          style={{
                            border: "1px solid lightgrey",
                            padding: "5px 10px",
                            color: "palevioletred",
                            verticalAlign: "center",
                          }}
                        >
                          {property.source}
                        </div>
                        <div
                          style={{
                            border: "1px solid lightgrey",
                            padding: "5px 10px",
                            color: "palevioletred",
                          }}
                        >
                          {property.target}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

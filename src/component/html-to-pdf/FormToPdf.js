import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function PrescriptionGenerator() {
  const contentRef = useRef(null);

  const generatePDF1 = () => {
    html2canvas(contentRef.current, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const height = (canvas.height * pageWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, height);

      pdf.save("prescription.pdf");
    });
  };
  const generatePDF = () => {
    const contentNode = contentRef.current;
    // Adding padding to the content
    const paddingLeft = 20;
    const paddingTop = 20;
    const paddingRight = 20;
    const paddingBottom = 20;
    // Save the original width and height of the content
    const originalWidth = contentNode.offsetWidth;
    const originalHeight = contentNode.offsetHeight;
    // Apply padding directly to the content element
    contentNode.style.padding = `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
    // Convert the padded content to canvas
    html2canvas(contentNode, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const height = (canvas.height * pageWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, height);
      // Restore the original dimensions and remove padding after conversion
      contentNode.style.padding = "0";
      contentNode.style.width = `${originalWidth}px`;
      contentNode.style.height = `${originalHeight}px`;
      pdf.save("prescription.pdf");
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        Doctor Prescription
      </h1>
      <div ref={contentRef} style={{ fontSize: "14px", textAlign: "center" }}>
        <h2>Shri Ganga Ram Hospital, Dr. SK Sinha</h2>
        <p>Address: SDA Market, Delhi</p>
        <hr style={{ margin: "10px 0px" }}></hr>
        <div>Some info Some info Some info Some info Some info Some info</div>
        <hr style={{ margin: "10px 0px" }}></hr>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>2054: Mr. JP</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div style={{ width: "100%", margin: "10px 0px", display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Medicine{" "}
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Doses
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Timing - Freq - Duration
          </div>
        </div>
        <div style={{ width: "100%", margin: "10px 0px", display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <input
              type="text"
              name="medicine"
              style={{ height: "40px", width: "90%", padding: "5px" }}
            />
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <input
              type="text"
              name="dose"
              style={{ height: "40px", width: "90%", padding: "5px" }}
            />
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <input
              type="timing"
              style={{ height: "40px", width: "100%", padding: "5px" }}
            />
          </div>
        </div>

        <hr style={{ margin: "30px 0px" }}></hr>
        <div>
          <h2
            style={{
              width: "12%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Rx
          </h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            <h4
              style={{
                width: "12%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Test prescribed
            </h4>
            <textarea
              style={{
                height: "40px",
                marginLeft: "2px",
                width: "88%",
                padding: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              margin: "30px 0px",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                width: "12%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              History{" "}
            </h4>
            <textarea
              style={{
                height: "40px",
                marginLeft: "2px",
                width: "88%",
                padding: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
        <button
          onClick={generatePDF}
          style={{
            border: "1px solid blue",
            padding: "4px",
            borderRadius: "4px",
            background: "#fff",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}

export default PrescriptionGenerator;

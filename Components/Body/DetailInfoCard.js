import React from "react";
import Meter from "@/Components/Body/Meter";
// import DataTable from '@/Components/firebase/DataTable'

const DetailsInfoCard = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 bg-gray-200 p-4 meter-container">
          <h2 className="text-2xl font-bold">AQI Meter</h2>
          <Meter lvl="1" />
        </div>
        <div className="col-span-2 lg:col-span-1 bg-gray-200 p-4 meter-container">
          <h2 className="text-2xl font-bold">WQI Meter</h2>
          <Meter lvl="2" />
        </div>

        <div className="col-span-2 lg:col-span-1 bg-gray-300 p-4 info-container">
          <h2 className="text-xl font-bold">AQI Readings</h2>
          <div className="table-container">
            <div className="table-con">
              <table className="custom-cell" >
                <thead className="custom-cell">
                  <tr className="custom-cell">
                    <th >Parameter</th>
                    <th > Value</th>
                  </tr>
                </thead>
                <tbody className="custom-cell">
                  <tr className="custom-cell">
                    <td>AQI Level (PPM)</td>
                    <td>44</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>Temperature (°C)</td>
                    <td>35</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>Humidity (%)</td>
                    <td>25</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>CO ()</td>
                    <td>45</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>PM<sub>2.5</sub> (PPM)</td>
                    <td>45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 bg-gray-300 p-4 info-container">
          <h2 className="text-xl font-bold">WQI Readings</h2>
          <div className="table-container">
            <div className="table-con">
              <table className="custom-cell" >
                <thead className="custom-cell">
                  <tr className="custom-cell">
                    <th >Parameter</th>
                    <th > Value</th>
                  </tr>
                </thead>
                <tbody className="custom-cell">
                  <tr className="custom-cell">
                    <td>TDS Level (PPM)</td>
                    <td>?</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>PH Level (pH)</td>
                    <td>?</td>
                  </tr>
                  <tr className="custom-cell">
                    <td>Purity (%)</td>
                    <td>?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfoCard;

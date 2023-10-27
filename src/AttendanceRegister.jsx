import React, { useState } from 'react';

const AttendanceRegister = () => {
  const [attendance, setAttendance] = useState([]);

  const handleAttendanceChange = (index, value) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index] = value;
    setAttendance(updatedAttendance);
  };

  const renderAttendanceTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((status, index) => (
            <tr key={index}>
              <td>Employee {index + 1}</td>
              <td>
                <select value={status || ''} onChange={(e) => handleAttendanceChange(index, e.target.value)}>
                  <option value="">Select</option>
                  <option value="Full Day">Full Day</option>
                  <option value="Half Day">Half Day</option>
                  <option value="Leave">Leave</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Attendance Register</h2>
      {renderAttendanceTable()}
    </div>
  );
};

export default AttendanceRegister;

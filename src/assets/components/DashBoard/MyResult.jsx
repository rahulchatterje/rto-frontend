import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const MyResult= ()=>{
    //Example data for the table
    const tableData = [
      { id: 1, totalQuestions: 10, questionsAttempted: 8, marks: 80, result: 'Pass' },
      { id: 2, totalQuestions: 15, questionsAttempted: 12, marks: 90, result: 'Pass' },
      // Add more data as needed
    ];
  
    return(
        <>
         <div className="container mt-5">
      <h2>Your Result Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Total Questions</th>
            <th>Questions Attempted</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.totalQuestions}</td>
              <td>{data.questionsAttempted}</td>
              <td>{data.marks}</td>
              <td>{data.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}

export default MyResult
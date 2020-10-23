import React from "react";

function BoardTable({ lists, title }) {
  // const { id, company, subject, registDatetime } = lists;
  return (
    <table>
      <thead>
        <tr>
          <th dangerouslySetInnerHTML={{ __html: title }}></th>
          <th>회사</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        {lists.length
          ? lists.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <td>{list.company}</td>
                  <td>{list.subject}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

// function TableHeader() {
//   return (
//     <tr>
//       <th>번호</th>
//       <th>회사</th>
//       <th>제목</th>
//     </tr>
//   );
// }

// function TableContent() {
//   return (
//     <tr>
//       <td>1</td>
//       <td>서울</td>
//       <td>타이틀입니다.</td>
//     </tr>
//   );
// }

export default BoardTable;

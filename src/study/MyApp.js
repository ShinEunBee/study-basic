import React from "react";

let isLoggedIn = 0;

function AdminPanel() {
  return (
    <h2>나는 관리자</h2>
  );
}

function PartnerPanel() {
  return (
    <h2>나는 입점사</h2>
  );
}

let content;

// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <PartnerPanel />;
// }

export default function Profile() {
  return (
    <>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <PartnerPanel />
      )}
    </>
  );
}

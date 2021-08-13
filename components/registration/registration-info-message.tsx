import React from "react";

export function RegistrationInfoMessage() {
  return (
    <div className="bg-green-100 p-3 border-l-4 border-green-500">
      <div>
        Mengalami kesulitan?{" "}
        <a className="text-green-500 underline" href="#">
          Hubungi Help Desk
        </a>
      </div>
      <em>
        Jam Operasional Helpdesk <strong>08:00 - 17:00</strong> WIB
      </em>
    </div>
  );
}

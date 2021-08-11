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
      <i>
        Jam Operasional Helpdesk <b>08:00 - 17:00</b> WIB
      </i>
    </div>
  );
}

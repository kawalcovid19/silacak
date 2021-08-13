export function CheckAccountBanner() {
  return (
    <div className="space-y-4">
      <div className="bg-silacak-50 border-l-4 border-silacak-400 p-4">
        <div className="flex">
          <div className="ml-3 space-y-1">
            <p className="text-sm text-silacak-700">
              Mengalami kesulitan dalam login?{" "}
              <a className="font-medium underline text-silacak-700 hover:text-silacak-600" href="#">
                Hubungi Help Desk.
              </a>
            </p>
            <p className="text-sm text-silacak-700">
              Jam Operasional Helpdesk: <span className="font-medium">08:00 - 17:00 WIB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

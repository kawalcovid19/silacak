import { AddCloseContactButton } from "./add-close-contact-button";
import { CloseContactCard } from "./close-contact-card";

export function CloseContactList() {
  const handleAddCloseContact = () => {
    console.log("clicked");
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:truncate">
            Daftar Kontak Erat Pasien
          </h2>
        </div>
        <div className="hidden md:flex md:ml-4">
          {/* TODO: add floating version for mobile */}
          <AddCloseContactButton onClick={handleAddCloseContact} />
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-md shadow bg-white">
          <ul className="divide-y divide-gray-200">
            <li>
              <CloseContactCard />
            </li>
            <li>
              <CloseContactCard />
            </li>
            <li>
              <CloseContactCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

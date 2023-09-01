import { useState } from 'react';
import Input from '../ui/forms/input';
import allPincodes from '@/seed/allowedstates.json';
import { toast } from 'react-toastify';
function AllowedPincodes() {
  const [pincode, setPincode] = useState('');
  function checkPinCode() {
    if (allPincodes.indexOf(pincode) > -1) {
      toast.success('Delivery Option is available');
    } else {
      toast.error('Delivery Option is not available');
    }
  }
  return (
    <div>
      <div className="flex  items-center justify-start">
        <div className="w-full max-w-md">
          <div className="rounded-lg bg-white   ">
            <h2 className="mb-4 text-xl font-semibold">Delivery Option</h2>
            <div className="-ml-8   flex  justify-start px-8">
              <input
                type="text"
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                placeholder="Enter PIN Code"
                className="w-full rounded-l-md border border-r-0 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={checkPinCode}
                className="rounded-r-md border border-l-0 border-black bg-white px-4 py-2 text-red-600    "
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowedPincodes;

import CountryCode from '../ui/forms/country-code';

export default function HearFromUsForm() {
  return (
    <div>
      <h5 className="font-newsreader mb-8 text-3xl font-bold text-[#166AB4]">
        We'd love to hear from you!
      </h5>
      <form className="    font-semibold">
        <div className="grid gap-8  lg:grid-cols-2">
          <div>
            <label htmlFor="">Name *</label>
            <input
              placeholder="Name"
              className="mt-2 rounded-lg border bg-[#F1F1F1] px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="">Email *</label>
            <input
              placeholder="Email"
              type="email"
              className="mt-2 rounded-lg border bg-[#F1F1F1] px-4 py-2 outline-none"
            />
          </div>
        </div>
        <div className="mt-3 grid gap-8 lg:grid-cols-2">
          <div>
            <label htmlFor="">Country Code *</label>

            <CountryCode
              onChange={() => {}}
              className="mt-2 overflow-hidden rounded-lg border bg-[#F1F1F1] py-2 outline-none lg:w-[210px]"
            />
          </div>
          <div>
            <label htmlFor="">Mobile No. *</label>
            <input
              placeholder="Enter Your Number"
              type="email"
              className="mt-2 rounded-lg border bg-[#F1F1F1] px-4 py-2 outline-none"
            />
          </div>
        </div>
        <div className="mt-3  gap-3">
          <div className="grid">
            <label htmlFor="">What You Want To Know? *</label>
            <select className="mt-2 rounded-lg border bg-[#F1F1F1] px-4 py-2 outline-none">
              <option value="Integral Healing Package">
                Integral Healing Package
              </option>
              <option value="Aura and Chakra Healing">
                Aura and Chakra Healing
              </option>
              <option value="Reiki Healing">Reiki Healing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-3  gap-3">
          <div className="grid">
            <label htmlFor="">Message *</label>
            <textarea className="mt-2 rounded-lg border bg-[#F1F1F1] px-4 py-2 outline-none" />
          </div>
        </div>
        <button className="my-4 rounded-lg bg-[#166AB4] px-4 py-2 text-white outline-none">
          Send Message
        </button>
      </form>
    </div>
  );
}

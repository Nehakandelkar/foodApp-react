export function DetailsModalBody({ setName, setPhone, setAddress }) {
  return (
    <form>
      Name
      <input type="text" onChange={(e) => setName(e.target.value)} />

      Phone Number
      <input type="text" onChange={(e) => setPhone(e.target.value)} />

      Address
      <input type="text" onChange={(e) => setAddress(e.target.value)} />

    </form>
  );
}

import { useState } from "react";





function BookSlip() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("");

  return (
    <div>
      <h2>The Order Desk</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <label>Copies</label>
      <input
        type="number"
        value={copies}
        onChange={(e) => setCopies(e.target.value)}
      />

      <br /><br />

      <button>Add</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <header style={{ backgroundColor: "crimson", color: "white", padding: "20px" }}>
        <h1>Hostel store</h1>
      </header>



      <main>
        <BookSlip />
      </main>

      <footer>Roll Number: 247237</footer>
    </div>
  );
}

export default App;

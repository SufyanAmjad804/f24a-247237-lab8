
import { useState } from "react";

function BookSlip({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("");

  function handleAdd() {
    if (title.trim() === "" || price.trim() === "" || copies.trim() === "") {
      return;
    }

    onAdd({
      title: title,
      price: Number(price),
      copies: Number(copies)
    });

    setTitle("");
    setPrice("");
    setCopies("");
  }

  return (
    <div>
      <h2>The Order Desk</h2>

      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <br /><br />

      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <br /><br />

      <label>Copies</label>
      <input type="number" value={copies} onChange={(e) => setCopies(e.target.value)} />

      <br /><br />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function App() {
  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks((previousBooks) => [...previousBooks, book]);
  }

  return (
    <div>
      <header style={{ backgroundColor: "crimson", color: "white", padding: "20px" }}>
        <h1>Hostel store</h1>
      </header>

      <main>
        <BookSlip onAdd={addBook} />

        <h2>Book List</h2>

        {books.map((book, index) => (
          <p key={index}>
            {book.title} - {book.price} - {book.copies}
          </p>
        ))}

        <h2>Copies: {books.reduce((sum, book) => sum + book.copies, 0)}</h2>
      </main>

      <footer>Roll Number: 247237</footer>
    </div>
  );
}

export default App;

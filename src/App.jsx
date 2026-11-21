
import { useState } from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>The list is empty.</p>
      ) : (
        books.map((book, index) => (
          <p key={index}>
            {book.title} - {book.price} - {book.copies}
          </p>
        ))
      )}
    </div>
  );
}

function BookSlip({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("");
  const [message, setMessage] = useState("");

  function handleAdd() {
  if (title.trim() === "" || price.trim() === "") {
    return;
  }

  if (copies.trim() === "") {
    setMessage("Type the copies.");
    return;
  }

  onAdd({
    title: title.trim(),
    price: Number(price),
    copies: Number(copies)
  });

  setTitle("");
  setPrice("");
  setCopies("");
  setMessage("");
}

  return (
    <div>
      <h2>The Order Desk</h2>

      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Copies" type="number" value={copies} onChange={(e) => setCopies(e.target.value)} />

      <button onClick={handleAdd}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
}

function App() {
  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks((previousBooks) => [...previousBooks, book]);
  }

  const totalCopies = books.reduce((sum, book) => sum + book.copies, 0);

  return (
    <div>
      <header style={{ backgroundColor: "crimson", color: "white", padding: "20px" }}>
        <h1>Hostel store</h1>
      </header>

      <main>
        <BookSlip onAdd={addBook} />
        <BookList books={books} />
        <h2>Copies: {totalCopies}</h2>
      </main>

      <footer>Roll Number: 247237</footer>
    </div>
  );
}

export default App;

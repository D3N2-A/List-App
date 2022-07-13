import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const person = { id: new Date().getTime().toString(), firstName, email };
    if (firstName && email) {
      console.log(firstName, email);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      alert("Please fill out details");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              id="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button className="btn">Submit</button>
          </div>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default App;

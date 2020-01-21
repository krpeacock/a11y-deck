import React, { useState } from "react";

const ExampleForm = () => {
  const [value, setValue] = useState();

  return (
    <>
      <form
        id="Signup form"
        onSubmit={e => {
          e.preventDefault();
          let foo;
          try {
            foo = [...e.currentTarget.querySelectorAll("input")].reduce(
              (start, next) => {
                var obj = {};
                obj[next.id] = next.value;
                return { ...start, ...obj };
              },
              {}
            );
          } catch (error) {}
          setValue(foo);
          setTimeout(() => {
            document.querySelector("#results").focus();
          }, 1000);
        }}
      >
        <fieldset>
          <label for="name">Name:</label>
          <input type="text" autocomplete="name" id="name" />
          <br />
          <label for="email">Email:</label>
          <input type="email" autocomplete="email" id="email" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <section>
        {value && value.name ? (
          <div aria-role="alert">
            <h4 id="results" tabIndex={0}>
              Results
            </h4>
            <p>Name: {value.name}</p>
            <p>Email: {value.email}</p>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default ExampleForm;

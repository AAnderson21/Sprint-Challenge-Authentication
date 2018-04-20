<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 - Middleware is a function that acts as a bridge that intercepts actions that come through, it can allow it to pass or cancel the action depending on what you tell it.
  - Sessions are data stored on the server side that is accessed via the client via a unique id.
  - bcrypt is a service that protects users (a hashing algorythm).
  - JWT is Json web token
2.  What does bcrypt do in order to prevent attacks?
    - bcrypt takes a hash and adds a timing aspect to it to create a key derivation function, that makes it harder and longer (days months years and centuries) to break a password
3.  What are the three parts of the JSON Web Token?
 - HEADER, PAYLOAD & SIGNATURE
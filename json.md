

## 🧠 When to Use `express.json()` and `express.urlencoded()`

### ✅ Use `express.json()` when:

* You're building an **API** (backend for a mobile app, frontend app, or Postman)
* The client is sending **JSON data**

👉 Example data sent:

```json
{
  "name": "Nitin",
  "age": 25
}
```

👉 Add this in your server:

```js
app.use(express.json());
```

---

### ✅ Use `express.urlencoded({ extended: true })` when:

* You're using an **HTML `<form>`** (like in a webpage)
* The browser sends data like:

```
name=Nitin&age=25
```

👉 Add this in your server:

```js
app.use(express.urlencoded({ extended: true }));
```

---

### ✅ Use **both** when:

You want your backend to handle:

* **APIs** using JSON
* **Forms** from HTML pages

👉 Add both:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

## 🧠 Summary Table:

| Use case                             | Middleware to use                        |
| ------------------------------------ | ---------------------------------------- |
| JSON from Postman, React, mobile app | `express.json()`                         |
| HTML form on a webpage               | `express.urlencoded({ extended: true })` |
| Supporting both                      | Use **both**                             |

---

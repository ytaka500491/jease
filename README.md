jeasy.js

jeasy.js is a lightweight and beginner-friendly JavaScript utility library designed to simplify DOM manipulation, form handling, and UI feedback.  
It’s ideal for family-safe interfaces, educational tools, and projects that prioritize clarity, kindness, and ease of use.

---

🌟 Features

- Easy DOM selection (getId, $, $all)
- Show/hide elements with simple functions
- Form value handling and reset
- Error highlighting and gentle alerts
- Safe text rendering (XSS protection)
- Smooth scrolling to elements
- Katakana-to-Hiragana conversion

---

📦 Usage

Include jeasy.js in your HTML file:

`html
<script src="jeasy.js"></script>
`

Then use its functions like this:

`javascript
const nameInput = getId("name");
if (getValue(nameInput).trim() === "") {
  highlightError(nameInput, "Please enter your name");
  friendlyAlert("Name is required");
}
`

---

🔧 API Reference

DOM Selection
| Function              | Description                          |
|-----------------------|--------------------------------------|
| getId(id)           | Get element by ID                    |
| getClass(className) | Get elements by class name           |
| $(selector)         | Query single element                 |
| $all(selector)      | Query all matching elements          |

Display & Style
| Function              | Description                          |
|-----------------------|--------------------------------------|
| show(el)            | Show element                         |
| hide(el)            | Hide element                         |
| addClass(el, name)  | Add CSS class                        |
| removeClass(el, name) | Remove CSS class                   |
| setText(el, text)   | Set text content                     |

Form Handling
| Function              | Description                          |
|-----------------------|--------------------------------------|
| getValue(el)        | Get input value                      |
| setValue(el, val)   | Set input value                      |
| clearForm(el)       | Reset all form fields                |
| isChecked(el)       | Check if checkbox/radio is checked   |

UI Feedback
| Function              | Description                          |
|-----------------------|--------------------------------------|
| highlightError(el, msg) | Highlight input with error style |
| clearError(el)      | Remove error styling                 |
| friendlyAlert(msg, duration) | Show gentle alert popup     |
| CustomAlert(msg, options) | Customizable alert box         |

Utility
| Function              | Description                          |
|-----------------------|--------------------------------------|
| scrollToId(selector) | Smooth scroll to element by selector |
| katakanaToHiragana(str) | Convert Katakana to Hiragana    |
| safeText(str)       | Escape HTML for safe rendering       |

---

🧸 Philosophy

jeasy.js is built with kindness in mind.  
It’s not just about simplifying code — it’s about creating interfaces that feel safe, gentle, and intuitive for everyone, including children and non-technical users.

---

📄 License

MIT License — free to use, modify, and share.

---

💬 Author

Created by Yuuto (悠人) — a developer who blends technical skill with empathy and care for family-friendly design.

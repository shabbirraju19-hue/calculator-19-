# Simple Calculator

![HTML-CSS-JS](https://img.shields.io/badge/HTML-CSS-JS-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Demo

Open `index.html` in your web browser to start using the calculator.

## How It Works

The calculator maintains state for:

- `currentValue` - The number currently being entered
- `previousValue` - The first operand for calculations
- `operation` - The selected operator (+, -, *, /)
- `shouldResetDisplay` - Flag to reset display after calculation

### Usage

1. Click number buttons (0-9) to input values
2. Click operators (+, -, ×, ÷) to perform calculations
3. Click `=` to see the result
4. Click `C` to clear everything
5. Click `DEL` to remove the last digit

## File Structure

```
simple-calculator/
├── index.html    # Calculator UI structure
├── styles.css    # Styling and animations
├── script.js     # Calculator logic
└── README.md     # This file
```

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, gradients, transitions
- **JavaScript (ES6)** - DOM manipulation, event handling

## Installation

No installation required! Simply download the files and open `index.html` in any modern web browser.

```bash
# Clone this repository
git clone https://github.com/shabbirraju19-hue/calculator-19-.git
cd calculator-19-

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ using vanilla web technologies.

---

**Note:** This is a lightweight, educational project demonstrating fundamental JavaScript concepts.

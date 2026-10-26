# 🎨 CSS Essentials & Practice Project

A foundational project designed to learn, experiment with, and master core **CSS (Cascading Style Sheets)** concepts. This repository serves as a reference guide covering styles insertion, selectors specificity, CSS units, layout positioning, and practical project assets.

## 📌 Project Overview & Notes

### 1. CSS Insertion Methods
* **Default (Browser Styles):** Built-in styles applied by browsers.
* **Inline Styles:** Applied directly inside the HTML element using the `style` attribute.
* **Internal Styles:** Written inside the `<style>` tag in the HTML `<head>`.
* **External Styles:** Linked via an external stylesheet (`style.css`).

### 2. Selectors & Specificity Hierarchy
Understanding CSS specificity rules to control style precedence:

| Selector Type | Specificity Weight | Example |
| :--- | :--- | :--- |
| **Inline Style** | `1000` | `style="..."` |
| **ID Selector** | `100` | `#header` |
| **Class Selector** | `10` | `.btn` |
| **Tag / Element Selector** | `1` | `h1`, `p` |

* **Additional Selectors Covered:**
  * Pseudo-classes (e.g., `:hover`, `:nth-child`)
  * Universal Selector (`*`)
  * Combinator & Relational Selectors (`div > p`, `h1 + p`, etc.)
  * Attribute Selectors (`[type="text"]`)

### 3. CSS Units
* `pt` (Points): Absolute unit primarily used for print media.
* `px` (Pixels): Fixed-size relative unit based on screen resolution.
* `em`: Relative to the font size of the parent element (`1em ≈ 16px` default).
* `rem`: Relative to the font size of the root (`<html>`) element.
* `vw`: Relative to 1% of the viewport's width.
* `vh`: Relative to 1% of the viewport's height.

### 4. Layout & Positioning
* `relative`: Positioned relative to its normal position.
* `absolute`: Positioned relative to the nearest positioned ancestor.
* `fixed`: Positioned relative to the viewport and stays in place during scroll.

## 📂 Project Structure
- 📁 **assets/**
  - 🖼️ `leo.jpg`
  - 🖼️ `leo-2.jpg`
- 📁 **fonts/**
  - 🔤 `Rosehot.ttf`
- 📄 `index.html`
- 🎨 `style.css`
- 📝 `notes.txt`

## 🔗 Useful Resources & Links

* 🔤 **Fonts:** [1001 Fonts - Family Fonts](https://www.1001fonts.com/family-fonts.html)
* 🎨 **Color Palette:** [Color Hunt Palette #202734](https://colorhunt.co/palette/20273436415ab7d894e0f8c7)
* 🖼️ **Stock Images:** [Pexels Lion Search](https://www.pexels.com/search/lion/)
* 🚀 **Design Inspiration:** [Start Bootstrap UI Kit Pro](https://startbootstrap.com/previews/sb-ui-kit-pro)

## 💻 Getting Started

1. Clone the repository:
   
```bash
   git clone [https://github.com/Men3m/CSS.git](https://github.com/Men3m/CSS.git)


# Web Design :

> **Status:** Completed ✅
> **Level:** First Year 
> **Name:** Arjun Korlekar
> **MIS-No:** 612505021
> **Objective:** Fulfill syllabus requirements 

This repository contains the complete lab assignments for the Web Design course.Each assignment utilizes best practices, semantic HTML5, modern CSS3 (Flexbox/Grid, Variables), and robust ES6+ JavaScript/Node.js patterns.

---

## 📂 Project Structure

The repository is organized into 13 distinct folders, corresponding to the 13 laboratory assignments.

```text
.
├── assignment1/       # Environment Setup & Boilerplate
├── assignment2/       # Semantic HTML & Typography
├── assignment3/       # Data Lists & Tables
├── assignment4/       # Multi-page Navigation & Forms
├── assignment5/       # CSS Specificity Wars
├── assignment6/       # External CSS & Architecture
├── assignment7/       # The Box Model & Glassmorphism
├── assignment8/       # JavaScript System Dashboard
├── assignment9/       # Interactive DOM Manipulation
├── assignment10/      # Advanced Form Validation
├── assignment11/      # Node.js CLI Tooling
├── assignment12/      # Node.js HTTP Routing
├── assignment13/      # Full Stack Server & Static Files
└── README.md
```

---

## 📋 The Assignment Matrix

Below is a detailed breakdown of each assignment, including the original problem statement and the "Overkill" features implemented.

| # | Topic | Problem Statement | Pro Implementation |
| :--- | :--- | :--- | :--- |
| **01** | **Environment Setup** | Create `index.html` with "Hello World" to verify the environment. | **Professional Boilerplate:** Implemented a full HTML5 structure with SEO meta tags, semantic `<main>` tags, and a "Terminal" aesthetic using CSS Flexbox. Includes a Console Log system check on load. |
| **02** | **Basic HTML** | Use headings, paragraphs, formatting (bold/italic), images, and hyperlinks. | **Semantic Article Structure:** Used `<article>`, `<figure>`, and `<time>` tags. Implemented responsive images and a sophisticated typography hierarchy with hover-state links. |
| **03** | **Lists & Tables** | Create ordered/unordered lists and a 3x3 table. | **Data Visualization:** Created a responsive data table with hover effects on rows (`tr:hover`), semantic `<caption>`, and nested lists to demonstrate hierarchy. Styled with CSS collapse and zebra striping concepts. |
| **04** | **Two-Page Website** | Build two pages with navigation links (Home & Contact). | **Sticky Navigation:** Implemented a fixed position navbar that persists while scrolling. The Contact page features a responsive grid form layout with modern input styling. |
| **05** | **Inline vs. Internal CSS** | Demonstrate differences between inline styles and internal `<style>` blocks. | **Specificity Comparison:** A split-screen design visually comparing "Legacy (Inline)" vs "Modern (Internal)" approaches. Uses inline styles for the "bad" example and internal classes for the "good" example to teach specificity. |
| **06** | **External CSS** | Link an external `.css` file to HTML. | **Theming System:** Used CSS Custom Properties (`:root` variables) for colors. Implemented a CSS Reset, Flexbox centering, and BEM-style naming conventions in the separate stylesheet. |
| **07** | **Box Model & Selectors** | Demonstrate padding, margin, border, and ID/Class selectors. | **Glassmorphism UI:** Created a profile card utilizing `backdrop-filter` and complex `box-shadow`. Visually demonstrates the box model by toggling padding/margin on a translucent card floating above an animated background blob. |
| **08** | **JS Intro** | Alert on load and display today's date. | **System Dashboard:** Replaced native alerts with a "System Initialized" logic. Displays live time, calculates the percentage of the day passed, and uses an IIFE (Immediately Invoked Function Expression) to avoid global scope pollution. |
| **09** | **JS Events** | Button to change background color and toggle image visibility. | **State Management:** Implemented a state object to track color index. Instead of rough `display: none`, used CSS `opacity` and `transform` transitions for a smooth holographic toggle effect. Cycles through a curated Cyberpunk color palette. |
| **10** | **Form Validation** | Check if Name/Email are not empty. | **Real-time UX:** Validates inputs on the `input` event (live feedback). Uses Regex for strict email format validation. Includes visual error states (red borders), error messages, and a custom CSS "Shake" animation on submission failure. |
| **11** | **Node.js Setup** | Print "Hello Node.js" in the terminal. | **CLI Application:** A script that accepts command-line arguments (`process.argv`). Includes ANSI color codes for terminal styling and conditional logic to greet the user based on the time of day (Morning/Afternoon/Evening). |
| **12** | **HTTP Server** | Create a server responding "Hello World" at `localhost:3000`. | **Custom Router:** Implemented a simple routing system handling `/`, `/api` (returns JSON), and `/time`. Handles different MIME types (`text/html` vs `application/json`) and 404 errors gracefully. |
| **13** | **Static Server & Forms** | Serve static HTML/CSS and handle form GET/POST. | **Full Stack Architecture:** Built a custom static file server to serve external CSS stylesheets correctly (fixing MIME types). Implements a "Secret Ops" UI. Parses POST data manually (buffer chunks) for maximum compatibility and logs data to a local `database.txt` file. |

---

## 🚀 Getting Started

### Prerequisites
*   A modern web browser (Chrome/Firefox/Edge).
*   Node.js installed (for Assignments 11-13).
*   A code editor (VS Code recommended).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SkyArjun99/webdev-assignments.git
    cd webdev-assignments
    ```

2.  **Running Assignments 1-10 (Static Web):**
    *   Navigate to the specific folder (e.g., `cd assignment1`).
    *   Open `index.html` directly in your browser.

3.  **Running Assignments 11-13 (Node.js):**
    *   Navigate to the specific folder (e.g., `cd assignment13`).
    *   Install dependencies (none used for these specific assignments, strictly native Node).
    *   Start the server:
        ```bash
        node server.js
        ```
    *   Open your browser and visit `http://localhost:3000`.

---

## 💡 Technical Highlights

*   **Semantic HTML:** Heavy use of `<header>`, `<main>`, `<article>`, `<section>`, and `<figure>` for accessibility and SEO.
*   **Modern CSS:** No usage of deprecated tags like `<font>` or `<center>`. Reliance on Flexbox, CSS Grid, Variables, and Transitions.
*   **Clean JavaScript:** Usage of `const`/`let`, Arrow Functions, Template Literals, and Event Listeners.
*   **Robust Node.js:** Manual parsing of request bodies and streams to understand the underlying mechanics of the web without relying on heavy frameworks like Express.

---

## 📜 Syllabus Compliance

This project covers the following outcomes from the official syllabus:
1.  ✅ Ability to set up a web server environment.
2.  ✅ Design webpages using HTML5 and CSS3.
3.  ✅ Manipulate DOM objects using JavaScript and handle client-server communication via Node.js.

---


**Course:** Web Design (First Year)  
**Instructor:** [Manish Sir]

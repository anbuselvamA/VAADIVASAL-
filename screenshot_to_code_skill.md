# 📸 Screenshot-to-Code Skill & Reference Integration

This document defines the specialized **Screenshot-to-Code** capabilities, prompt engineering architectures, and visual fidelity guidelines adapted directly from the popular open-source repository `abi/screenshot-to-code`. 

By establishing this skill file in our workspace, we can dynamically reference these strict rules and templates whenever you request to build or refine components based on design screenshots, mockups, or wireframes.

---

## 🚀 Core Architectural Guidelines

The `screenshot-to-code` system relies on strict directives to ensure that the generated code is clean, fully featured, and visually identical to the source screenshot. We strictly adopt the following developer settings:

> [!IMPORTANT]
> **No Placeholders or Code Comments**
> The AI must **never** use placeholders or shorthand comments (e.g., `<!-- Add other links here -->` or `// Repeat items`). Everything visible in the design must be fully coded. If a card is repeated 6 times in the image, it must be written out 6 times in the code.

> [!TIP]
> **Aesthetic Precision**
> Pay immediate attention to background colors, gradient positions, text sizes, font weights, padding/margin scales, borders, border-radii, opacity, and responsive flex/grid layouts. Match the visual essence perfectly.

---

## 📜 System Prompts & Tech Stacks

Below are the exact prompt templates customized for our Vite + React + Tailwind CSS project setup:

### 1. React + Tailwind CSS Prompt
Use this prompt when building or modifying React components (`.jsx`/`.tsx`) in our Vite project:

```text
You are an expert React + Tailwind CSS developer.
You take a screenshot or visual reference of a webpage/component, and reconstruct it into functional, production-ready React code.

## Strict Guidelines:
1. Return ONLY the code inside a clean, reusable React component.
2. Include Tailwind CSS classes for all styling. Use modern utility classes.
3. Use Lucide React icons (`lucide-react`) for all UI icons.
4. For images, use beautiful placeholder assets from Unsplash or `https://placehold.co` with descriptive texts, or direct SVG inline icons.
5. Make sure the component is fully responsive (using sm:, md:, lg:, xl: breakpoints).
6. Implement smooth interactivity (e.g., hover states, active transitions, dropdown toggles, modal states) using React hooks (`useState`, `useEffect`).
7. NO PLACEHOLDERS: Generate every list item, card, grid item, and navigation link in full.
```

### 2. HTML + Tailwind CSS Prompt
Use this prompt when creating standalone mockups or static landing pages (`index.html`):

```text
You are an expert Frontend developer. You take screenshot references and build single-page apps using standard HTML, Tailwind CSS (via CDN), and Vanilla JS.

## Tech Stack Setup:
- Include Tailwind CSS: <script src="https://cdn.tailwindcss.com"></script>
- Include Lucide Icons or Font Awesome: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
- Include Google Fonts: Use links to import premium modern typography (e.g., Inter, Outfit, Plus Jakarta Sans).

## Formatting Rules:
- Pay close attention to colors, alignment, margins, padding, and borders.
- Include a dark/light mode toggle if visible in the design.
- Use `https://placehold.co` for image placeholders.
```

---

## 🎨 Asset and Styling Best Practices

To achieve the premium look expected from professional screenshot-to-code conversion, we apply these specific asset injection techniques:

### 🖼️ Image Placeholders with Semantic Alt Text
When a screenshot includes images, we represent them with descriptive placeholders or clean unsplash images to make the mockup instantly alive:
*   **Generic Placeholder**: `https://placehold.co/600x400/1e293b/ffffff?text=Product+Image`
*   **Unsplash Stock Images**:
    *   *Turf/Sports*: `https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800` (Football turf)
    *   *Users*: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150` (User profile)

### 📐 Dynamic CSS Framework Rules
*   **Color Matching**: Instead of generic `bg-blue-500`, we extract exact hex codes or harmonious Tailwind/HSL colors (e.g., `bg-[#0f172a]` for a deep slate background, `text-[#10b981]` for turf-green accents).
*   **Typography**: Integrate premium fonts. For a modern sports/booking app, use `font-sans` with an imported font like **Outfit** or **Cabinet Grotesk**.
*   **Glassmorphism Effects**: Apply `backdrop-blur-md bg-white/10 border border-white/20` for premium floating elements or overlay menus.

---

## 🔄 How to Activate this Skill

Whenever you upload a screenshot, Figma design link, or describe a UI layout, you can prompt me with:
> *"Convert this screenshot to code using our **Screenshot-to-Code skill**."*

I will immediately parse this document, activate these exact prompts, and construct or modify the files in your project with 100% fidelity.

# Wuzzuf Clone

A Vue.js-based job board application focusing on frontend performance optimization and testing best practices. This project is a clone of Wuzzuf's interface, built to enhance frontend development skills and demonstrate modern web development practices.

## 🎯 Project Goals

- Implement frontend performance optimization techniques
- Practice comprehensive testing methodologies
- Create a responsive and accessible user interface
- Demonstrate Vue.js best practices and patterns

## 🚀 Features

- **Job Listings**: Responsive and performant job card components
- **Multi-Apply System**: Efficient batch application process
- **Performance Optimized**:
  - Lazy loading components
  - Image optimization
  - Code splitting
  - Virtual scrolling for long lists
- **Comprehensive Testing**:
  - Unit tests for components
  - Integration tests for features
  - E2E tests for critical user flows
  - Performance testing

## 🛠️ Tech Stack

- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Styling**:
  - Tailwind CSS
  - shadcn/vue components
- **Icons**: Iconify
- **Testing**:
  - Vitest for unit testing
  - Cypress for E2E testing
  - Lighthouse for performance testing

## 📊 Performance Optimizations

- Implemented lazy loading for images and components
- Used virtual scrolling for job listings
- Optimized bundle size through code splitting
- Implemented caching strategies
- Utilized Tailwind's purge for minimal CSS

## 🧪 Testing Strategy

- **Unit Tests**: Testing individual components and utilities
- **Integration Tests**: Testing component interactions
- **E2E Tests**: Testing complete user flows
- **Performance Tests**:
  - Lighthouse scores
  - Load time metrics
  - Core Web Vitals

## 🚦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/wuzzuf-clone.git
   ```

2. Install dependencies:

   ```bash
   cd wuzzuf-clone
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm run test:unit     # Unit tests
   npm run test:e2e      # E2E tests
   ```

## 📝 Learning Outcomes

- Advanced Vue.js patterns and practices
- Frontend performance optimization techniques
- Comprehensive testing strategies
- Modern CSS practices with Tailwind
- Component library integration
- Accessibility considerations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐️ If you found this project helpful, please give it a star on GitHub!

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

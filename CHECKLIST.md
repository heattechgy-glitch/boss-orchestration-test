# QA Checklist for React App

Before shipping this React application, verify the following items:

## 1. Build & Deployment
- [ ] `npm run build` completes without errors or warnings
- [ ] Production build runs correctly when served locally
- [ ] All environment variables are properly configured for production

## 2. Functionality
- [ ] All core features work as expected
- [ ] Forms validate input correctly and display appropriate error messages
- [ ] Navigation between routes works without errors
- [ ] API calls return expected data and errors are handled gracefully

## 3. Browser & Responsive Testing
- [ ] App works in Chrome, Firefox, Safari, and Edge
- [ ] Layout displays correctly on mobile devices (320px - 480px)
- [ ] Layout displays correctly on tablets (768px - 1024px)
- [ ] Layout displays correctly on desktop (1024px+)

## 4. Performance & Accessibility
- [ ] Lighthouse performance score is acceptable (>70)
- [ ] Images have alt text and are optimized
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA standards

## 5. Console & Error Handling
- [ ] No console errors or warnings in production build
- [ ] 404 and error pages display correctly
- [ ] Loading states are shown during async operations
- [ ] Network failures display user-friendly error messages

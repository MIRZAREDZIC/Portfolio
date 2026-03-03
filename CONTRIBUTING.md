# Contributing Guidelines

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Development Setup

Please refer to the [README.md](./README.md) for detailed setup instructions. The project uses Docker for development, which is the recommended approach.

## Code Style

### PHP (Laravel)

- Follow [PSR-12](https://www.php-fig.org/psr/psr-12/) coding standards
- Use Laravel's naming conventions:
  - Controllers: `PascalCase` (e.g., `ContentController`)
  - Models: `PascalCase`, singular (e.g., `Content`)
  - Routes: `kebab-case` (e.g., `/api/contents`)
  - Database tables: `snake_case`, plural (e.g., `contents`)

### TypeScript/React (Next.js)

- Use TypeScript for all new files
- Follow React best practices:
  - Use functional components with hooks
  - Extract reusable logic into custom hooks
  - Use TypeScript interfaces/types for props and data structures
- Component naming: `PascalCase` (e.g., `ContentView`)
- File naming: `kebab-case` for files, `PascalCase` for components
- Use ESLint and Prettier (if configured)

## Git Workflow

1. **Create a branch** from `master`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Commit message format** (Conventional Commits):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

4. **Push and create a Pull Request**:
   ```bash
   git push origin feature/your-feature-name
   ```

## Project Structure Guidelines

### Backend (Laravel)

- **Controllers**: Place in `app/Http/Controllers/`
  - Group related controllers in subdirectories (e.g., `Auth/`, `Api/`)
- **Models**: Place in `app/Models/`
- **Requests**: Validation logic in `app/Http/Requests/`
- **Routes**: API routes in `routes/api.php`
- **Migrations**: Database migrations in `database/migrations/`

### Frontend (Next.js)

- **Pages**: Use Next.js App Router in `src/app/`
- **Components**: Reusable components in `src/components/`
- **Sections**: Page-specific views in `src/sections/`
- **Hooks**: Custom hooks in `src/hooks/`
- **Services**: API service functions in `src/services/`
- **Types**: TypeScript types/interfaces in `src/types/`
- **Context**: React context providers in `src/context/`

## Testing

- Write tests for new features and bug fixes
- Laravel: Use PHPUnit for backend tests
- Next.js: Add tests for critical components (if test setup exists)

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Add tests for new functionality
4. Ensure all tests pass
5. Update the README if you've changed setup instructions
6. Create a clear PR description explaining:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes

## Questions?

If you have questions or need clarification, please open an issue or reach out to the maintainer.

Thank you for contributing! 🎉

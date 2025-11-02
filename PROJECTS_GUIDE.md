# How to Add Your Projects

This guide will help you add your real projects to your portfolio.

## Quick Start

All projects are stored in `/app/data/projects.ts`. Simply edit this file to add, update, or remove projects.

## Project Structure

Each project follows this structure:

```typescript
{
  id: "unique-project-id",              // Required: Unique identifier (no spaces)
  title: "Project Name",                // Required: Display title
  description: "Brief description...",  // Required: 1-2 sentence description

  // Optional Frontend Features
  frontendFeatures: {
    title: "Frontend Architecture",     // Customize the section title
    items: [
      "Feature 1",
      "Feature 2",
      // ... more items
    ]
  },

  // Optional Backend Features
  backendFeatures: {
    title: "Backend Systems",           // Customize the section title
    items: [
      "Feature 1",
      "Feature 2",
      // ... more items
    ]
  },

  // Optional Achievements/Metrics
  achievements: {
    title: "Key Achievements",          // Customize the section title
    items: [
      "Achievement 1",
      "Achievement 2",
      // ... more items
    ]
  },

  // Optional: Technology tags displayed as badges
  technologies: ["React", "Node.js", "MongoDB"],

  // Optional: Project links
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/username/project",

  // Optional: Project screenshot/image
  // Place image in /public/projects/ folder and reference it
  imageUrl: "/projects/project-screenshot.png"
}
```

## Step-by-Step: Adding a New Project

### 1. Open the Projects File

Open `/app/data/projects.ts` in your editor.

### 2. Add Your Project

Add a new project object to the `projects` array. Here's a template:

```typescript
{
  id: "my-awesome-project",
  title: "My Awesome Project",
  description: "A full-stack web application that does something amazing.",
  frontendFeatures: {
    title: "Frontend Features",
    items: [
      "React with TypeScript",
      "Responsive design",
      "Dark mode support",
    ]
  },
  backendFeatures: {
    title: "Backend Features",
    items: [
      "RESTful API with Express",
      "MongoDB database",
      "JWT authentication",
    ]
  },
  achievements: {
    title: "Key Achievements",
    items: [
      "1000+ active users",
      "99.9% uptime",
      "Sub-second load times",
    ]
  },
  technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
  liveUrl: "https://my-project.vercel.app",
  githubUrl: "https://github.com/yourusername/my-project",
}
```

### 3. Add Project Screenshot (Optional)

1. Create a folder: `/public/projects/` (if it doesn't exist)
2. Add your screenshot image (PNG or JPG recommended)
3. Reference it in your project:

```typescript
imageUrl: "/projects/my-project-screenshot.png";
```

**Image Tips:**

- Recommended size: 1200x900px or similar 4:3 aspect ratio
- Format: PNG or JPG
- File size: Keep under 500KB for fast loading

### 4. Customize Sections (Optional)

You can customize section titles or remove sections you don't need:

```typescript
// Remove a section by simply not including it
// Or customize the title
frontendFeatures: {
  title: "What I Built",  // Custom title
  items: [...]
}
```

### 5. Reorder Projects

Projects appear in the order they're listed in the array. Move projects up or down to reorder them.

## Examples

### Minimal Project (Only Required Fields)

```typescript
{
  id: "simple-project",
  title: "Simple Project",
  description: "A simple project description.",
}
```

### Full Featured Project

```typescript
{
  id: "full-featured-project",
  title: "Full Featured Project",
  description: "A comprehensive project with all features.",
  frontendFeatures: {
    title: "Frontend",
    items: ["React", "TypeScript", "TailwindCSS"]
  },
  backendFeatures: {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL"]
  },
  achievements: {
    title: "Results",
    items: ["500+ users", "Great performance"]
  },
  technologies: ["React", "Node.js", "PostgreSQL"],
  liveUrl: "https://project.com",
  githubUrl: "https://github.com/user/project",
  imageUrl: "/projects/project.png"
}
```

### Frontend-Only Project

```typescript
{
  id: "frontend-project",
  title: "Frontend Project",
  description: "A beautiful frontend application.",
  frontendFeatures: {
    title: "Technologies Used",
    items: ["React", "Next.js", "Framer Motion"]
  },
  technologies: ["React", "Next.js"],
  liveUrl: "https://frontend-project.com",
  githubUrl: "https://github.com/user/frontend-project",
}
```

## Tips

1. **Keep descriptions concise**: 1-2 sentences work best
2. **Highlight impact**: In achievements, mention real numbers/metrics
3. **Be specific**: Instead of "Used React", say "Built with React and TypeScript"
4. **Show variety**: Include projects showing different skills/technologies
5. **Update links**: Make sure your `liveUrl` and `githubUrl` are correct
6. **Quality over quantity**: 3-5 strong projects are better than many weak ones

## Removing Example Projects

To remove the example projects and start fresh:

1. Open `/app/data/projects.ts`
2. Delete or comment out the example project objects
3. Add your own projects

## Need Help?

If you need to customize the project display further, edit `/app/components/ProjectsSection.tsx`. The component uses the data from `projects.ts` and renders it.

## Architecture Diagrams

The example projects include custom SVG architecture diagrams. For new projects, you can:

1. **Use a screenshot**: Add `imageUrl` to show a project screenshot
2. **Create a custom diagram**: Modify the `ProjectArchitectureDiagram` component in `ProjectsSection.tsx`
3. **Use the placeholder**: Leave it blank and it will show a placeholder (or add your own SVG)

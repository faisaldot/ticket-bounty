// Declare plain and module CSS imports so TypeScript accepts `import './globals.css'`.
declare module "*.css";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

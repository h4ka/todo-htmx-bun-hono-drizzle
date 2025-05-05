## 🌐 HTMX - Bun, Hono, Drizzle ORM, Tailwind
A simple ToDo app meant to show some of the HTMX basics. 
It is all running using Bun, with Hono for the routing, Drizzle as the ORM for the SQLite database and Tailwind for styling.

### Setup
Install all dependencies
```
bun install
```
Create a `.env` file
```
PORT=3049
```
Create SQLite DB + Generate and apply migrations + insert seed data
```
bun run db:init
```

### Start
Everything should be set up now! All we have left to do is run:
```
bun run dev
```

### Migrations
Generate migration files
```
bun run db:generate --name=add_column_foo
```
Apply migrations
```
bun run db:migrate
```
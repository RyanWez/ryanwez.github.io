# Ryan Wez - Personal Portfolio Website

This is a personal portfolio website built with Next.js, TypeScript, Tailwind CSS, Prisma, and a PostgreSQL database. It features a clean, minimalist design inspired by `ryanwez.github.io` and includes a dynamic projects section managed through a password-protected admin panel.

## Features

- **Hero Section**: A brief, impactful personal introduction.
- **About Me Section**: Showcase skills, experience, and passions.
- **Dynamic Projects Section**: Dynamically fetch and display projects from the database.
- **Skills/Technologies Section**: A dedicated section listing technical skills.
- **Contact & Social Links**: Easy access to social media and contact information.
- **Admin Panel**: A password-protected interface (`/admin`) for administrators to add, edit, and delete projects.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (e.g., hosted on [Neon.tech](https://neon.tech/))
- **Authentication**: Cookie-based sessions using `@hapi/iron`

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- pnpm, npm, or yarn
- A PostgreSQL database

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or
    # npm install
    # or
    # yarn install
    ```

### Environment Variables

1.  Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```

2.  Update the `.env` file with your specific configuration:

    -   `DATABASE_URL`: Your PostgreSQL connection string. If you're using a free tier database from a provider like Neon, Supabase, or Vercel, you can find this in your project dashboard.
        ```
        # Example for Neon.tech
        DATABASE_URL="postgresql://<user>:<password>@<host>.neon.tech/neondb?sslmode=require"
        ```

    -   `ADMIN_PASSWORD`: A secure password you will use to log in to the admin panel.
        ```
        ADMIN_PASSWORD="your_super_secret_password"
        ```

    -   `SESSION_SECRET`: A secret key for encrypting session cookies. It **must be at least 32 characters long**. You can generate one using an online tool or the following command:
        ```bash
        node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        ```

### Database Setup

1.  **Generate Prisma Client:** This step creates the TypeScript types for your database schema.
    ```bash
    npx prisma generate
    ```

2.  **Push the schema to your database:** This command will create the `Project` table in your PostgreSQL database based on the schema defined in `prisma/schema.prisma`.
    ```bash
    npx prisma db push
    ```
    You can also use `npx prisma migrate dev` if you prefer to manage schema changes with migration files.

### Running the Development Server

Once the setup is complete, you can start the development server:

```bash
pnpm dev
# or
# npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio website.

### Accessing the Admin Panel

To manage your projects, navigate to the admin panel:

-   **URL**: [http://localhost:3000/admin](http://localhost:3000/admin)
-   **Password**: The `ADMIN_PASSWORD` you set in your `.env` file.

After logging in, you will be redirected to the admin dashboard where you can create, update, and delete projects.

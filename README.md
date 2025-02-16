# ECHO

Where markdown meets its reflection. A modern, real-time markdown editor and sharing platform built with Next.js 14.

[Live Demo](https://echo-markdown.vercel.app)

![ECHO Preview](preview.png)

## Features

- ✨ Real-time markdown preview
- 🔗 Instant sharing with unique URLs
- 🎨 Beautiful, responsive design
- 🌙 Dark mode support
- ⚡️ Built with performance in mind

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Redis](https://redis.io/) - Data Storage
- [Lucide React](https://lucide.dev/) - Icons
- [GeistUI](https://geist-ui.dev/) - Typography

## Getting Started

### Prerequisites

- Node.js 20.0 or later
- npm or yarn
- Redis database (you can use [Upstash](https://upstash.com/) for free)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/echo.git
cd echo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Redis URL:

```env
REDIS_URL="your-redis-url-here"
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy ECHO is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fecho)

Don't forget to add your `REDIS_URL` to your Vercel environment variables.

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Typography by [Geist](https://vercel.com/font)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ by Ivars Gmizo

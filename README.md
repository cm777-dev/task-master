# TaskMaster

A professional services marketplace platform that connects service providers with customers who need their services. This platform is inspired by GetNinjas and built with modern web technologies.

## Technologies Used

- Frontend: React.js, Material-UI, Styled Components
- Backend: Node.js, Express.js
- Database: Baserow
- Authentication: JWT

## Features

- User registration and authentication (both service providers and customers)
- Service category browsing
- Service request creation
- Service provider search and filtering
- Real-time messaging between customers and providers
- Rating and review system
- Responsive design for mobile and desktop

## Project Structure

```
taskmaster/
├── client/             # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── .github/            # GitHub Actions workflows
├── .gitignore
└── README.md
```

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Create a `.env` file in the client directory:
   ```
   VITE_BASEROW_API_URL=your_baserow_api_url
   VITE_BASEROW_API_TOKEN=your_baserow_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is set up to be deployed using GitHub Pages. The frontend is automatically deployed when changes are pushed to the main branch.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)

 import "./globals.css";
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Front-End Developer Assessment</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

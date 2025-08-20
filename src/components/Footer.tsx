const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 text-center glass mt-20">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Ryan Wez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

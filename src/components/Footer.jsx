const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Speech2Script</h2>

          <p>
            &copy; {new Date().getFullYear()} Tanbir Alam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

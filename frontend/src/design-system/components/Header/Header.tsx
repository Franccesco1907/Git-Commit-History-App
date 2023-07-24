type HeaderProps = {
  image: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ image, title }) => {
  return (
    <header className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src={image}
                alt="header-logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

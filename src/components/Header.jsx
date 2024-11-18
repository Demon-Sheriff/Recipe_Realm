import { Link } from "react-router-dom";


const Heading = () => {

    return (
        <>
          <div className="navbar-center">
            <Link
              to="/"
              className="normal-case text-xl sm:text-3xl text-[#f1faee] font-bold"
            >
              <span className="relative flex">
                <span className="relative text-4xl right-11 sm:right-11 sm:top-0 sm:text-6xl font-semibold">
                  R<span className="absolute right-1 text-amber-600">R</span>
                </span>
                <span className="flex flex-col justify-center items-center relative">
                  <span className="text-amber-600 absolute z-10 bottom-3 sm:bottom-4 -left-11">
                    ecipe
                  </span>
                  <span className="absolute z-30 top-[10px] sm:top-[22px] -left-11">
                    ealm
                  </span>
                </span>
              </span>
            </Link>
          </div>

            {
            /* <div className="navbar-center">
            <Link
              to="/"
              className="normal-case text-xl sm:text-3xl text-[#f1faee] font-bold"
            >
              <span className="relative flex">
                <span className="relative text-4xl right-11 sm:right-11 sm:top-0 sm:text-6xl font-semibold">
                  R<span className="absolute right-1 text-amber-700">R</span>
                </span>
                <span className="flex flex-col justify-center items-center relative">
                  <span className="text-amber-700 absolute z-10 bottom-3 sm:bottom-4 -left-11">
                    ecipe
                  </span>
                  <span className="absolute z-20 sm:text-4xl">🍔</span>
                  <span className="absolute z-30 top-[10px] sm:top-[22px] -left-11">
                    ealm
                  </span>
                </span>
              </span>
            </Link>
          </div> */
          }
        </>
    );
}

const Header = () => {
    return (
        <>
            <div className="navbar m-auto justfiy-between backdrop-blur-md top-50 z-0">
                <div className="navbar justify-between m-auto max-w-6xl">
                    <div>
                        DropDown
                    </div>
                    <div>
                        <Heading/>
                    </div>
                    <div>
                        SearchBar
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
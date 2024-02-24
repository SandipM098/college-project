import React from 'react'

const Foot = () => {
    return (
        <footer>
          <div>
            <div>
              <h3>RideOrDrive</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                pariatur repudiandae quos porro aspernatur eveniet? Eveniet
                accusantium quisquam quae aliquam atque vitae, inventore repudiandae
                fugit? Debitis rem eaque facere suscipit!
              </p>
            </div>
            <div>
                <h1>Pages Links</h1>
                <div>
                
              <Link
                to="/About"
                className="hover:text-blue-900 transition duration-200 ease-linear"
              >
                About Us
              </Link>
              <Link
                to="/Car"
                className="hover:text-blue-900 transition duration-200 ease-linear"
              >
                Our Cars
              </Link>
              <Link
                to="/Bike"
                className="hover:text-blue-900 transition duration-200 ease-linear"
              >
                Our Bikes
              </Link>
              <Link
                to="/Service"
                className="hover:text-blue-900 transition duration-200 ease-linear"
              >
                Services
              </Link>
                </div>
            </div>
          </div>
        </footer>
      );
    }


export default Foot

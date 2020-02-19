import React from "react";
import { Jumbotron, Spinner, Toast, ToastBody, ToastHeader } from "reactstrap";
const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, Selamat Datang!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>Warning!!!!</ToastHeader>
              <ToastBody>
                <span>
                  {" "}
                  Menuju Fullstack Web Developer <Spinner color="success" />
                </span>
              </ToastBody>
            </Toast>
          </div>
        </p>
        {/* <p className="lead">
          <div>
            
          </div>
        </p> */}
      </Jumbotron>
    </div>
  );
};
export default Home;

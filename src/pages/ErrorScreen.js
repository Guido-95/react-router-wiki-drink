import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import useTitle from '../useTitle';
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  useTitle("ERRORE");
  return (
    <div className="error-url">
        <h3>Pagina Non Trovata</h3>
        <Lottie
            options={{
            loop: true,
            autoplay: true,
            reverse: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
            }}
            width={500}
            height={500}
        />
        <Link className="btn btn-primary btn-error-url" to="/">
            Torna in Home
        </Link>
    </div>
  );
};

// const Wrapper = styled.section`
//   min-height: 86.2vh;
//   display: grid;
//   place-items: center;
//   h3 {
//     text-transform: uppercase;
//   }
//   @media screen and (min-width: 992px) {
//     min-height: 84.5vh;
//   }
// `;

export default ErrorScreen;

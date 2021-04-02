import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix Logo"></img>

      <img
        className="nav__avatar"
        src="https://lh3.googleusercontent.com/fife/ABSRlIrYx-5diJ3MlZ2vvslXkWVs5FU1UaSMaF6oSC3cySGh77rXvXa8ya7yD0JXwj4pMDgvdosUUiReIU2LLd7Ye8oDTABFTfYYCMYcqhKPv5BYpfwmazI6iYb47LA6-HdIgM9HSDjZHUKu1MzQ9pAOtOOEVnUivkWt4wlq0Ta7XTDAGy7vQeqzBCcfZuwVcWsP4N1guB0m90K-aH8ESXYr5OHDwT5UF-JEc1d6JXX1e6yiWqLKCcP0WL2eGgQBMKFvYP8zUYshwVUT1Daay_EFgYkSNyCQTX4gAGcG9tGZ_HS6sSTOvbIeQC2k_Rdf1cWvomZJsZY9_SCPd7n6o37YjQAm86g-O5MdIuQPyZgL6TdTREg0ayKL5RCH_WI8FS0CotYa3ApiTypO15yObMlg75lXM4Md8qizZc54iFxYrpRjncHJvgpti8ZptjAtAfUnlGCZpuys7FpU99VlvVZArJhG4wMKfjA21c0uwzSoZlXjAehosXGfB9r9Z1rLZms6VgJEnh2CrpFMJS3YNogz10Llz6pG5nSFhUbTa_mpdnQ3Kqwo8kCrkndHbQWj173trNRR6vXuDDbUtbXQ-iimah4oj_m3umRIDYSWKEc33_j_i4gfZwWkWS54ByiUMmTHAvCqjd8PtqQlO1FQkwX_Ex_K1mK-UY6iQedvm0_zwhg4dwoOoL93ioYwWCyL-L4eBlSnXVo_vdZ3wGOlshQRFswIrIDgICHtB_DxauihlSgsc8U=s83-c"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

export default Nav;

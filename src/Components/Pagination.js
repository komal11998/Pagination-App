import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const userData = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setUsers(await userData.json());
  };

  console.log("users", users);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  return (
    <div className="container mt-5">
      <div className="row textCenter">
        <div>
          <h1>Handling Data using Pagination</h1>
        </div>
        {users.slice(pagesVisited, pagesVisited + usersPerPage).map((users) => {
          const { name, email, body } = users;
          return (
            <div className="col-10 col-md-3 mt-5">
              <div>name:- {name}</div>
              <div>email:-{email}</div>
              <div>body:- {body}</div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"previous tab"}
        nextLabel={"next slide"}
        pageCount={pageCount}
        onPageChange={handleChange}
        containerClassName={"paginationButton"}
      />
    </div>
  );
};

export default Pagination;

// import "./HomePage.scss";
// //import ColorBox from "./components/ColorBox";
// import TodoList from "../../components/TodoList/index";
// import React, { useEffect, useState } from "react";
// import TodoForm from "../../components/TodoForm";
// import PostList from "../../components/PostList";
// import Pagination from "../../components/Pagination";
// import queryString from "query-string";
// import PostFilterForm from "../../components/PostFilterForm";
// import MagicBox from "../../components/MagicBox";

// function App() {
//   const [todoList, setTodoList] = useState([
//     { id: 1, title: "i can everything" },
//     { id: 2, title: "i can love you" },
//     { id: 3, title: "i can't everything" },
//   ]);

//   const [postList, setPostList] = useState([]);

//   const [filters, setFilter] = useState({
//     _limit: 10,
//     _page: 1,
//     title_like: "quis",
//   });

//   const [pagination, setPagination] = useState({
//     _page: 1,
//     _limit: 10,
//     _totalRows: 11,
//   });

//   useEffect(() => {
//     async function fetchPostList() {
//       //nhung thu nam trong ham try la dung
//       try {
//         const paramsString = queryString.stringify(filters); //day la chuyen tu object sang dangj chuoi vi filters la dang object gia duj chuye ns:_limit=10&_page=1
//         // const requestUrl = `http://js-post-api.herokuapp.com/api/posts`;
//         const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
//         // "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"; //cai nay de giup cho viec filter thay doi
//         // ;
//         //

//         // console.log(requestUrl1);
//         const response = await fetch(requestUrl);
//         const responseJSON = await response.json();
//         const { data, pagination } = responseJSON;

//         setPostList(data);
//         setPagination(pagination);
//       } catch (error) {
//         //catch thi chi don gian neu sai thi se hien ra nhu the
//         console.log("failed to fetch post list ", error.message);
//       }
//     }
//     fetchPostList();
//   }, [filters]); //de mang rong tuc la no chi chay co 1 lan thoi

//   function HandlePageChange(newPage) {
//     console.log("newPage", newPage);
//     setFilter({
//       ...filters,
//       _page: newPage,
//     });
//   }

//   function HandleTodoList(todo) {
//     console.log(todo);
//     const index = todoList.findIndex((x) => x.id === todo.id);
//     if (index < 0) return;
//     const newTodoList = [...todoList]; //tao ra 1 mang moi
//     newTodoList.splice(index, 1);
//     setTodoList(newTodoList); //???setTodoList la 1 function
//   }

//   function HandleTodoFormSubmit(formValues) {
//     console.log("form submit", formValues);
//     //them fromValue vao browser sau khi chung ta nhap du lieu vao o text roi nhan enter
//     const newTodo = {
//       id: todoList.length + 1,
//       ...formValues,
//     };
//     const newTodoList = [...todoList];
//     newTodoList.push(newTodo);
//     setTodoList(newTodoList);
//   }

//   function handleFiltersChange(newFilters) {
//     console.log("filters change", newFilters);
//     setFilter({
//       ...filters,
//       _page: 1,
//       title_like: newFilters.searchTerm,
//     });
//   }

//   return (
//     <div className="app">
//       <h1> react hook-PostList</h1>

//       {/* <ColorBox /> */}

//       {/* <TodoList todos={todoList} onTodoClick={HandleTodoList} />
//       <TodoForm onSubmit={HandleTodoFormSubmit} /> */}

//       {/* cau lenh nay tuc la thang postList truyen du lieu vao cho props posts ..sau do truyen vao thang con  PostList render o file ben kia */}
//       {/* <PostFilterForm onSubmit={handleFiltersChange} /> */}

//       {/* <PostList posts={postList} /> */}
//       {/* <Pagination pagination={pagination} onPageChange={HandlePageChange} /> */}
//       {/* <MagicBox /> */}
//     </div>
//   );
// }

// export default App;

// //what is the app : This is the file for App Component. App Component is the main component in React which acts as a container for all other components.

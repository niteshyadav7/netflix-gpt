const { createBrowserRouter, RouterProvider } = require("react-router-dom");
const { default: Login } = require("./Login");
const { default: Browse } = require("./Browse");

function Body() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Body;

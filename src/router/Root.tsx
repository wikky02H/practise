import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageRoutes, { privateRoutes, publicRoutes } from "./page-routes";

const IndexRouter = () => {
  const token = "nwsvnkj";
  if (token)
    return (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route index element={<Navigate to={PageRoutes.DashboardPage} />} />
          {privateRoutes.map(({ path, componentPath: PageComponent }) => (
            <Route key={path} path={path} element={<PageComponent />} />
          ))}
          <Route path="/*" element={<Navigate to={PageRoutes.DashboardPage} />} />
        </Routes>
      </Suspense>
    );
  return (
    <Routes>
      <Route index element={<Navigate to={PageRoutes.SignInPage} />} />

      {publicRoutes.map(({ path, componentPath: PageComponent }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PageComponent />
            </Suspense>
          }
        />
      ))}
      <Route path="*" element={<Navigate to={PageRoutes.SignInPage} />} />
    </Routes>
  );
};

export default IndexRouter;

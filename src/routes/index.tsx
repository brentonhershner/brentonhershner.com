import { lazy } from "react";
import {
  createRootRoute,
  createRoute,
  Outlet,
  Router,
} from "@tanstack/react-router";

const Home = lazy(() => import("../pages/home"));

const rootRoute = createRootRoute({ component: () => <Outlet /> });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([homeRoute]);
export const router = new Router({ routeTree });

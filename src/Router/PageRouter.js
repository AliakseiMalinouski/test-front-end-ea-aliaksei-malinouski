import React, { Suspense } from "react";
import { lazy } from "react";
import {Route, Routes} from 'react-router-dom';
import { Progress } from "../components/Progress";

const HomeLazy = lazy(() => import("../Pages/PageHome"));
const EventsLazy = lazy(() => import("../Pages/PageEvents"));

export const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Progress/>}>
                <HomeLazy/>
            </Suspense>}/>
            <Route path="/events" element={<Suspense fallback={<Progress/>}>
                <EventsLazy/>
            </Suspense>}/>
        </Routes>
    )
}
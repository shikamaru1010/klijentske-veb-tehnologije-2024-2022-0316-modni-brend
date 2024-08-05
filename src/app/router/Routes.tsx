import { createBrowserRouter} from "react-router-dom";
import App from "../layout/App";
import CollectionDashboard from "../features/Brand/dashboard/CollectionDashboard";
import CollectionDetailedPage from "../features/Brand/details/CollectionDetailedPage";
import CollectionForm from "../features/Brand/form/CollectionForm"
export const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <App />,
            children: [
                {path: '/Brand',element: <CollectionDashboard />},
                {path: '/Brand/:id',element: <CollectionDetailedPage />},
                {path: '/manage/:id',element: <CollectionForm/>},
                {path: '/Ask us',element: <CollectionForm />},
            ]
        }
    ]
)
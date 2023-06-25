import Homepage from "./Homepage";
import {
	createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "*",
		element: Homepage
	}
])

export default router;
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import TestUseMemoPage from "./pages/TestUseMemoPage";
import UseArrayPage from "./pages/useArrayPage";
import UseFetchPage from "./pages/useFetchPage";
import UseTogglePage from "./pages/useTogglePage";
import UsersPage from "./pages/usersPage";
import CommentsPage from "./pages/commentsPage";
import PostsPage from "./pages/postsPage";
import UseCallbackPage from "./pages/useCallbackPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: 'testUseMemo',
                element: <TestUseMemoPage />
            },
            {
                path: 'useCallback',
                element:  <UseCallbackPage />
            },
            {
                path: 'useArray',
                element: <UseArrayPage/>
            },
            {
                path: 'useToggle',
                element: <UseTogglePage/>
            },
            {
                path: 'useFetch',
                element: <UseFetchPage/>,
                children: [
                    {
                        path: 'users',
                        element: <UsersPage />
                    },
                    {
                        path: 'comments',
                        element: <CommentsPage/>
                    },
                    {
                        path: 'posts',
                        element: <PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {router};
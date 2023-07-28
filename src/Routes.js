import Home from "Routes/Home";
import Upload from "Routes/Upload";

import FileUploadIcon from '@mui/icons-material/FileUpload';
import HomeIcon from '@mui/icons-material/Home';

const routes = [
    {
        type: "route",
        name: "Home",
        key: "home",
        route: "/home",
        icon: <HomeIcon />,
        component: <Home />,
        navItem: true,
    },
    {
        type: "upload",
        name: "Upload",
        key: "upload",
        route: "/upload",
        icon: <FileUploadIcon />,
        component: <Upload />,
        navItem: true,
    },
];

export default routes;
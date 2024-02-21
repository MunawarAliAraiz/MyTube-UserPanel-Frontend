import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
   
  export default function DefaultSidebar() {
    return (
      <Card className="w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            MyTube
          </Typography>
        </div>
        {/* Content container */}
        <div className="p-4 flex gap-2 items-center">
          {/* Avatar icon */}
          <img
            src="https://docs.material-tailwind.com/img/face-1.jpg"
            alt="avatar"
            className="rounded-full h-8 w-8 mb-2 object-cover object-center"
          />

          {/* Page title */}
          <div className="text-lg font-bold text-center">Jaydon Frankie</div>
        </div>
        <List>
          <Link to={'/'}>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Link to={'/credentials'}>
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Credentials
            </ListItem>
          </Link>
          
          <Link to={'/'}>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </Link>
        </List>
      </Card>
    );
  }
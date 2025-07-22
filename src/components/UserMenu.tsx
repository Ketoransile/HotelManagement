import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming shadcn/ui or similar for dropdown components
import {
  MdDashboard,
  MdOutlinePayment,
  MdOutlineSecurity,
  MdOutlineBookmarks, // Icon for 'My Bookings'
} from "react-icons/md"; // Importing MD icons
import {
  IoNotifications,
  IoSettingsOutline, // Icon for 'Profile Settings'
} from "react-icons/io5"; // Importing IO icons (using io5 for newer icons)
import { LuUser } from "react-icons/lu"; // Icon for the dropdown trigger
import React from "react"; // Required for React components
import { authClient } from "@/lib/auth-client"; // Assuming authClient for session management
import { useRouter } from "next/navigation"; // Assuming Next.js router for navigation

// Define the navigation items based on the provided image
const navigations = [
  { key: "dashboard", label: "Dashboard", icon: MdDashboard },
  { key: "my-bookings", label: "My Bookings", icon: MdOutlineBookmarks },
  { key: "notifications", label: "Notification", icon: IoNotifications },
  {
    key: "payments-invoices",
    label: "Payments & Invoices",
    icon: MdOutlinePayment,
  },
  {
    key: "profile-settings",
    label: "Profile Settings",
    icon: IoSettingsOutline,
  },
  {
    key: "security-privacy",
    label: "Security & Privacy",
    icon: MdOutlineSecurity,
  },
];

export const UserMenu = () => {
  const router = useRouter(); // Initialize Next.js router for navigation
  const {
    data: session, // User session data
    isPending, // Loading state of the session
    // error,
    // refetch,
  } = authClient.useSession(); // Hook to get session data

  // Log session data for debugging purposes
  console.log("Session from header is ", session);

  // Extract userId from the session
  const userId = session?.user?.id;

  // If session is pending or not available, do not render the menu
  if (isPending || !session) {
    return null;
  }

  /**
   * Handles the action when a dropdown menu item is selected.
   * Navigates to the corresponding page or performs logout.
   * @param {string} key - The key associated with the selected menu item.
   */
  const handleAction = async (key: string) => {
    if (key === "logout") {
      // If 'logout' is selected, sign out the user
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/sign-in"); // Redirect to the login page on successful logout
          },
        },
      });
    } else if (key === "my-bookings") {
      // For 'My Bookings', navigate to a user-specific path
      router.push(`/my-bookings/${userId}`);
    } else {
      // For other items, navigate to the path corresponding to the key
      router.push(`/${key}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* The trigger for the dropdown menu, showing a user icon */}
        <div className="flex items-center gap-2 cursor-pointer">
          <LuUser size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end" // Align the dropdown content to the right of the trigger
        className="w-[240px] p-2 rounded-lg shadow-lg bg-white border-none drop-shadow-xl drop-shadow-neutral-400" // Styling for the dropdown container: fixed width, padding, rounded corners, shadow, white background
      >
        {/* Map through the navigation items to render each menu item */}
        {navigations.map((item) => (
          <DropdownMenuItem
            key={item.key} // Unique key for each item
            onSelect={() => handleAction(item.key)} // Call handleAction on item selection
            className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900" // Styling for individual menu items: flex layout, spacing, padding, rounded corners, text color, hover/focus states
          >
            <item.icon size={20} className="text-gray-500" />{" "}
            {/* Render the icon with a specific size and color */}
            {item.label} {/* Display the label for the menu item */}
          </DropdownMenuItem>
        ))}
        {/* Separator line before the logout button */}
        <DropdownMenuSeparator className="my-2 bg-gray-200" />{" "}
        {/* Margin and background color for the separator */}
        {/* Logout button */}
        <DropdownMenuItem
          onSelect={() => handleAction("logout")} // Call handleAction for logout
          className="flex items-center justify-center bg-blue-600 text-white rounded-md py-2 px-4 cursor-pointer hover:bg-blue-700 focus:bg-blue-700 focus:text-white w-full" // Styling for the logout button: centered content, blue background, white text, rounded corners, padding, full width, hover/focus states
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

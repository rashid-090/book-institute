import React, { useState } from 'react'

const AdminLayout = () => {
    const [isSideBarOpen, setIsSidebarOpen] = useState();
    return (
        <div className="flex h-screen bg-gray-100 text-black w-full">
            <AdminSidebar />
            <div className="flex flex-col flex-1 w-full">
                <AdminNav setIsSidebarOpen={setIsSidebarOpen} />
                <div className="flex-1 p-4 overflow-y-scroll w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout
